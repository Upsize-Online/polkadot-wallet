const fs = require('fs');
const path = require('path');

function logInteracao(mensagem, contexto = '') {
  const logPath = path.join(__dirname, 'log-interacoes.md');
  const data = new Date().toLocaleString();
  const log = `\n## [${data}]\n**Contexto:** ${contexto}\n**Mensagem:**\n${mensagem}\n`;
  fs.appendFileSync(logPath, log);
}

// Permite uso via linha de comando:
// Exemplo: node log-assistente.js "Mensagem aqui" "Contexto aqui"
if (require.main === module) {
  const mensagem = process.argv[2] || '';
  const contexto = process.argv[3] || '';
  if (!mensagem) {
    console.log('Uso: node log-assistente.js "Mensagem" "Contexto"');
    process.exit(1);
  }
  logInteracao(mensagem, contexto);
  console.log('Interação registrada com sucesso!');
}

module.exports = logInteracao; 