const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Configurações
const CONFIG = {
  CHECK_INTERVAL: 30000, // 30 segundos
  MIN_COMMIT_INTERVAL: 60000, // 1 minuto
  WATCH_PATHS: ['polkadot-wallet/src', 'polkadot-wallet/public', 'src'],
  WATCH_EXTENSIONS: ['.tsx', '.ts', '.js', '.jsx', '.css', '.md', '.json'],
  IGNORE_FILES: ['node_modules', '.git', 'package-lock.json', '*.log']
};

class AutoDev {
  constructor() {
    this.lastCommitTime = 0;
    this.changedFiles = new Set();
    this.isRunning = false;
  }

  shouldWatchFile(filePath) {
    const ext = path.extname(filePath);
    return CONFIG.WATCH_EXTENSIONS.includes(ext) && 
           !CONFIG.IGNORE_FILES.some(ignore => filePath.includes(ignore));
  }

  logInteracao(mensagem, contexto = '') {
    const logPath = path.join(__dirname, 'log-interacoes.md');
    const data = new Date().toLocaleString();
    const log = `\n## [${data}]\n**Contexto:** ${contexto}\n**Mensagem:**\n${mensagem}\n`;
    fs.appendFileSync(logPath, log);
    console.log(`📝 Log registrado: ${mensagem}`);
  }

  async executeGitCommand(command) {
    return new Promise((resolve, reject) => {
      exec(command, { cwd: __dirname }, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Erro Git: ${error.message}`);
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });
  }

  async checkGitStatus() {
    try {
      const status = await this.executeGitCommand('git status --porcelain');
      return status.trim().split('\n').filter(line => line.length > 0);
    } catch (error) {
      return [];
    }
  }

  async autoCommit() {
    const now = Date.now();
    if (now - this.lastCommitTime < CONFIG.MIN_COMMIT_INTERVAL) {
      return;
    }

    try {
      const changes = await this.checkGitStatus();
      if (changes.length === 0) {
        return;
      }

      const changedFiles = changes.map(change => change.split(' ').pop()).join(', ');
      this.logInteracao(
        `Commit automático - ${changes.length} arquivo(s) alterado(s)`,
        `AutoDev - ${changedFiles}`
      );

      await this.executeGitCommand('git add .');
      await this.executeGitCommand(`git commit -m "AutoDev: ${changes.length} arquivo(s) alterado(s) - ${new Date().toLocaleString()}"`);
      
      this.lastCommitTime = now;
      console.log(`✅ Commit automático realizado: ${changes.length} arquivo(s)`);
    } catch (error) {
      console.error('❌ Erro no commit automático:', error.message);
    }
  }

  watchFiles() {
    CONFIG.WATCH_PATHS.forEach(watchPath => {
      const fullPath = path.join(__dirname, watchPath);
      if (fs.existsSync(fullPath)) {
        fs.watch(fullPath, { recursive: true }, (eventType, filename) => {
          if (filename && this.shouldWatchFile(filename)) {
            this.changedFiles.add(path.join(watchPath, filename));
            console.log(`📁 Arquivo alterado: ${filename}`);
          }
        });
      }
    });
  }

  async start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    console.log('🚀 AutoDev iniciado!');
    console.log(`⏰ Verificando a cada ${CONFIG.CHECK_INTERVAL / 1000} segundos`);
    console.log(`📁 Monitorando: ${CONFIG.WATCH_PATHS.join(', ')}`);
    
    this.watchFiles();
    
    setInterval(async () => {
      if (this.changedFiles.size > 0) {
        console.log(`🔄 ${this.changedFiles.size} arquivo(s) com mudanças detectadas`);
        await this.autoCommit();
        this.changedFiles.clear();
      }
    }, CONFIG.CHECK_INTERVAL);
  }

  stop() {
    this.isRunning = false;
    console.log('⏹️ AutoDev parado');
  }
}

if (require.main === module) {
  const autoDev = new AutoDev();
  
  process.on('SIGINT', () => {
    console.log('\n🛑 Parando AutoDev...');
    autoDev.stop();
    process.exit(0);
  });

  autoDev.start();
}

module.exports = AutoDev; 