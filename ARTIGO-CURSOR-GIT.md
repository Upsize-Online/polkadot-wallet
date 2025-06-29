# Esqueci de salvar e perdi horas de trabalho no Cursor... Como resolver isso com o próprio Cursor

*Um guia completo para configurar um ambiente de desenvolvimento seguro e profissional*

---

## 😰 O Problema Real

Você já passou por isso? Trabalhou por horas no Cursor, fez várias alterações importantes, e quando voltou ao projeto... **tudo havia desaparecido**. Arquivos modificados, códigos alterados, layouts ajustados - tudo perdido porque você esqueceu de salvar ou algo deu errado.

**Isso acontece com todo mundo**, especialmente quando estamos focados no desenvolvimento e não queremos nos preocupar com backups e salvamentos manuais.

A boa notícia é que o **Cursor pode ser configurado para resolver isso definitivamente**. Vou te mostrar como criar um ambiente de desenvolvimento profissional que nunca mais vai te deixar na mão.

---

## 🎯 O que Vamos Implementar

Neste guia, você vai aprender a configurar:

1. **Salvamento automático** - arquivos salvam sozinhos
2. **Controle de versões com Git** - histórico completo de alterações
3. **Sistema de logs** - registro de todas as decisões
4. **Automação completa** - tudo funciona sem você se preocupar
5. **Contexto organizado** - documentação clara do projeto

---

## 🤖 A Maneira Mais Fácil: Use o Assistente do Cursor

**Importante**: Você não precisa fazer nada manualmente! O assistente do Cursor pode implementar **tudo automaticamente**.

### Como usar o assistente:

1. **Abra o assistente** no Cursor (geralmente `Ctrl + K` ou `Cmd + K`)
2. **Copie e cole** qualquer seção deste artigo como prompt
3. **Peça para implementar** automaticamente

### Exemplos de prompts para o assistente:

- *"Implemente salvamento automático no Cursor com intervalo de 5 segundos"*
- *"Configure Git no meu projeto e faça o primeiro commit"*
- *"Crie um sistema de logs automático para registrar interações"*
- *"Implemente automação completa que detecta mudanças e faz commits"*

### ⚠️ Considerações importantes:

- **Sistemas operacionais**: Este guia foi testado no Windows, mas pode precisar de adaptações para macOS ou Linux
- **Versões do Cursor**: Funcionalidades podem variar entre versões
- **Configurações pessoais**: Algumas configurações podem precisar de ajustes individuais
- **Backup**: Sempre faça backup antes de implementar mudanças automáticas

### 🎯 Abordagem recomendada:

1. **Leia o guia completo** para entender o que será implementado
2. **Use o assistente** para automatizar as partes que desejar
3. **Adapte conforme necessário** para seu sistema operacional
4. **Teste cada implementação** antes de prosseguir

---

## 📋 Pré-requisitos

- Cursor instalado (você já tem!)
- Conhecimento básico de terminal (vou te ensinar)
- 10 minutos do seu tempo

---

## 🚀 Passo 1: Instalar o Git

### Por que o Git é essencial?

O Git é um sistema de controle de versões que salva "fotos" do seu projeto em diferentes momentos. Assim, se algo der errado, você pode voltar para qualquer versão anterior.

### Como instalar:

#### Windows:
1. **Acesse o site oficial**: [https://git-scm.com/download/win](https://git-scm.com/download/win)

2. **Baixe a versão correta**:
   - Clique em "Click here to download the latest (2.50.0) x64 version of Git for Windows"
   - Esta é a versão mais recente e estável

3. **Execute o instalador**:
   - Dê dois cliques no arquivo baixado (`Git-2.50.0-64-bit.exe`)
   - Se aparecer uma janela pedindo permissão, clique em "Sim"
   - Siga as instruções do instalador (pode deixar todas as opções padrão)
   - Clique em "Finish" ao final

#### macOS:
1. **Instale via Homebrew** (recomendado):
   ```bash
   brew install git
   ```
   
2. **Ou baixe do site oficial**: [https://git-scm.com/download/mac](https://git-scm.com/download/mac)

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install git
```

#### Linux (Fedora):
```bash
sudo dnf install git
```

### Teste a instalação:
- Feche e reabra o Cursor
- Abra um novo terminal (Terminal > New Terminal)
- Digite: `git --version`
- Se aparecer algo como `git version 2.50.0`, está tudo certo!

---

## 🔧 Passo 2: Configurar Salvamento Automático

### O que é?

Configuração para que o Cursor salve seus arquivos automaticamente, sem você precisar se lembrar de pressionar Ctrl+S.

### Como configurar:

1. **Abra as configurações do Cursor**:
   - Windows/Linux: Pressione `Ctrl + ,` (Ctrl + vírgula)
   - macOS: Pressione `Cmd + ,` (Cmd + vírgula)

2. **Procure por "Auto Save"**:
   - Na barra de pesquisa, digite: `auto save`
   - Procure por "Files: Auto Save"

3. **Configure o salvamento**:
   - Clique na seta ao lado de "off"
   - Selecione "afterDelay"

4. **Configure o tempo**:
   - Procure por "Files: Auto Save Delay"
   - Digite `5000` (5 segundos)
   - Ou escolha outro valor:
     - `3000` = 3 segundos
     - `10000` = 10 segundos

5. **Teste**:
   - Abra um arquivo
   - Faça uma alteração
   - Pare de digitar por 5 segundos
   - Veja se o ponto (•) desaparece do nome do arquivo

---

## 📝 Passo 3: Inicializar o Git no Projeto

### O que é?

Criar um repositório Git no seu projeto para começar a controlar versões.

### Como fazer:

1. **Abra o terminal no Cursor**:
   - Certifique-se de estar na pasta raiz do seu projeto

2. **Inicialize o Git**:
   ```bash
   git init
   ```

3. **Adicione todos os arquivos**:
   ```bash
   git add .
   ```

4. **Crie o primeiro commit**:
   ```bash
   git commit -m "Primeiro commit - salvando estado atual do projeto"
   ```

### O que cada comando faz:

- `git init`: Cria um repositório Git no seu projeto
- `git add .`: Adiciona todos os arquivos para serem versionados
- `git commit -m "mensagem"`: Salva uma "foto" do estado atual

---

## 📊 Passo 4: Criar Sistema de Logs

### O que é?

Sistema para registrar todas as suas decisões, alterações e contexto do desenvolvimento.

### Como implementar:

1. **Crie um arquivo de log** (`log-interacoes.md`):
   ```markdown
   # Log de Interações com o Assistente

   ## Data: [Data Atual]

   ### Contexto:
   - Projeto: [Nome do seu projeto]
   - Objetivo: [O que você está fazendo]

   ### Interações:
   - [Horário] [Descreva a interação]

   ### Arquivos analisados:
   - [Nome do arquivo]
   ```

2. **Crie um script de log automático** (`log-assistente.js`):
   ```javascript
   const fs = require('fs');
   const path = require('path');

   function logInteracao(mensagem, contexto = '') {
     const logPath = path.join(__dirname, 'log-interacoes.md');
     const data = new Date().toLocaleString();
     const log = `\n## [${data}]\n**Contexto:** ${contexto}\n**Mensagem:**\n${mensagem}\n`;
     fs.appendFileSync(logPath, log);
   }

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
   ```

3. **Como usar**:
   ```bash
   node log-assistente.js "Sua mensagem aqui" "Contexto da interação"
   ```

---

## 🤖 Passo 5: Implementar Automação Completa

### O que é?

Sistema que detecta alterações automaticamente e faz log + commit sem você precisar fazer nada.

### Como implementar:

1. **Crie o script de automação** (`auto-dev.js`):
   ```javascript
   const fs = require('fs');
   const path = require('path');
   const { exec } = require('child_process');

   const CONFIG = {
     CHECK_INTERVAL: 30000, // 30 segundos
     MIN_COMMIT_INTERVAL: 60000, // 1 minuto
     WATCH_PATHS: ['src', 'components', 'pages'],
     WATCH_EXTENSIONS: ['.tsx', '.ts', '.js', '.jsx', '.css', '.md', '.json'],
     IGNORE_FILES: ['node_modules', '.git', 'package-lock.json']
   };

   class AutoDev {
     constructor() {
       this.lastCommitTime = 0;
       this.changedFiles = new Set();
       this.isRunning = false;
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

     shouldWatchFile(filePath) {
       const ext = path.extname(filePath);
       return CONFIG.WATCH_EXTENSIONS.includes(ext) && 
              !CONFIG.IGNORE_FILES.some(ignore => filePath.includes(ignore));
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
   ```

2. **Adicione scripts no package.json**:
   ```json
   {
     "scripts": {
       "autodev": "node auto-dev.js",
       "autodev:start": "node auto-dev.js",
       "log": "node log-assistente.js"
     }
   }
   ```

3. **Como usar**:
   ```bash
   npm run autodev
   ```

---

## 📚 Passo 6: Criar Sistema de Contexto

### O que é?

Documentação organizada do projeto para manter contexto consistente.

### Como implementar:

1. **Crie arquivo de contexto geral** (`CONTEXT-PROJETO.md`):
   ```markdown
   # Contexto Geral do Projeto

   ## 🎯 Objetivo Principal
   [Descrição do que seu projeto faz]

   ## 🏗️ Arquitetura e Tecnologias
   - **Framework**: [Next.js, React, etc.]
   - **Estilização**: [Tailwind, CSS, etc.]
   - **Linguagem**: [TypeScript, JavaScript, etc.]

   ## 📋 Padrões de Desenvolvimento
   - **Componentes**: [Como organizar componentes]
   - **Estilização**: [Padrões de CSS]
   - **Estrutura**: [Organização de pastas]

   ## 🎨 Diretrizes de Design
   - **Interface**: [Estilo visual]
   - **Cores**: [Paleta de cores]
   - **Tipografia**: [Fontes e tamanhos]

   ## 🔧 Configurações do Ambiente
   - **Salvamento**: Automático a cada 5 segundos
   - **Versionamento**: Git com commits frequentes
   - **Log**: Registro de interações e decisões

   ## 🚀 Fluxo de Trabalho
   1. Verificar contexto antes de começar
   2. Desenvolver seguindo padrões
   3. Registrar decisões importantes
   4. Commit de alterações
   ```

2. **Crie pasta de tarefas** (`TAREFAS/`):
   ```markdown
   # Sistema de Tarefas

   ## Como Usar
   1. Crie um arquivo `TAREFA-[nome].md` para cada funcionalidade
   2. Use o template abaixo
   3. Consulte durante o desenvolvimento

   ## Template de Tarefa
   ```markdown
   # TAREFA: [Nome da Tarefa]

   ## 🎯 Objetivo
   [Descrição clara do que deve ser feito]

   ## 📅 Prazo
   [Data limite ou estimativa]

   ## 🔧 Arquivos Envolvidos
   - [Lista de arquivos que serão modificados]

   ## 📋 Checklist
   - [ ] [Item 1]
   - [ ] [Item 2]

   ## 🎨 Diretrizes Específicas
   [Regras específicas para esta tarefa]

   ## 📝 Notas de Desenvolvimento
   [Anotações durante o desenvolvimento]

   ## ✅ Critérios de Conclusão
   [Como saber que a tarefa está completa]
   ```
   ```

---

## 🎯 Passo 7: Como Usar o Sistema Completo

### Fluxo de Trabalho Diário:

1. **Iniciar o AutoDev**:
   ```bash
   npm run autodev
   ```

2. **Consultar contexto**:
   - Leia `CONTEXT-PROJETO.md` para contexto geral
   - Consulte arquivo de tarefa específica se houver

3. **Desenvolver normalmente**:
   - Faça suas alterações no Cursor
   - Arquivos salvam automaticamente a cada 5 segundos
   - AutoDev detecta mudanças e faz commit automaticamente

4. **Registrar decisões importantes**:
   ```bash
   node log-assistente.js "Decisão importante" "Contexto da decisão"
   ```

5. **Parar o AutoDev**:
   - Pressione `Ctrl + C` no terminal (Windows/Linux)
   - Pressione `Cmd + C` no terminal (macOS)

### Para Nova Funcionalidade:

1. **Criar arquivo de tarefa**:
   - Crie `TAREFAS/TAREFA-[nome].md`
   - Use o template fornecido

2. **Desenvolver**:
   - Siga as diretrizes da tarefa
   - Consulte contexto geral quando necessário

3. **Finalizar**:
   - Marque itens do checklist como concluídos
   - Verifique critérios de conclusão

---

## 🔍 Como Verificar se Está Funcionando

### Salvamento Automático:
- Faça uma alteração em um arquivo
- Pare de digitar por 5 segundos
- Veja se o ponto (•) desaparece do nome do arquivo

### Git:
- Digite: `git log --oneline`
- Deve mostrar commits automáticos

### Log:
- Abra `log-interacoes.md`
- Deve mostrar entradas com timestamps

### AutoDev:
- Execute `npm run autodev`
- Faça uma alteração
- Veja mensagens no terminal confirmando detecção e commit

---

## 🛠️ Personalizações

### Alterar Tempos:
Edite `auto-dev.js`:
```javascript
const CONFIG = {
  CHECK_INTERVAL: 30000, // 30 segundos (verificação)
  MIN_COMMIT_INTERVAL: 60000, // 1 minuto (entre commits)
  // ...
};
```

### Alterar Pastas Monitoradas:
```javascript
WATCH_PATHS: ['src', 'components', 'pages', 'sua-pasta'],
```

### Alterar Extensões:
```javascript
WATCH_EXTENSIONS: ['.tsx', '.ts', '.js', '.jsx', '.css', '.md', '.json', '.sua-extensao'],
```

---

## 🎉 Resultado Final

Com esse sistema implementado, você terá:

### ✅ **Proteção Total**
- Salvamento automático
- Controle de versões
- Histórico completo
- Poder de voltar atrás

### ✅ **Produtividade Máxima**
- Foque no desenvolvimento
- Sem preocupações com backups
- Trabalho organizado
- Contexto sempre disponível

### ✅ **Profissionalismo**
- Ambiente de desenvolvimento robusto
- Documentação clara
- Rastreabilidade completa
- Padrões estabelecidos

---

## 🚨 Troubleshooting

### Git não reconhecido:
- **Windows**: Reinstale o Git: [https://git-scm.com/download/win](https://git-scm.com/download/win)
- **macOS**: `brew install git` ou [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
- **Linux**: `sudo apt install git` (Ubuntu) ou `sudo dnf install git` (Fedora)
- Feche e reabra o Cursor

### AutoDev não detecta mudanças:
- Verifique se as pastas em `WATCH_PATHS` existem
- Confirme se as extensões em `WATCH_EXTENSIONS` estão corretas
- Verifique permissões de arquivo no seu sistema operacional

### Erro de commit:
- Verifique se o Git está inicializado: `git status`
- Confirme se há mudanças para commitar
- Verifique se o Git está configurado corretamente no seu sistema

### Salvamento não funciona:
- Verifique configurações do Cursor: `Ctrl + ,` (Windows/Linux) ou `Cmd + ,` (macOS)
- Confirme se "Files: Auto Save" está como "afterDelay"

### Problemas específicos do sistema operacional:

#### Windows:
- Verifique se o PowerShell ou Git Bash estão funcionando
- Confirme permissões de administrador se necessário

#### macOS:
- Verifique se o Terminal tem permissões adequadas
- Confirme se o Homebrew está instalado (se usado)

#### Linux:
- Verifique permissões de arquivo: `chmod +x auto-dev.js`
- Confirme se o Node.js está instalado: `node --version`

---

## 📞 Suporte

Se encontrar problemas:

1. **Verifique os logs** em `log-interacoes.md`
2. **Consulte o histórico do Git**: `git log --oneline`
3. **Teste cada componente** individualmente
4. **Reinicie o AutoDev** se necessário
5. **Consulte a documentação** do seu sistema operacional

---

## 🎯 Conclusão

Implementando esse sistema, você nunca mais vai perder horas de trabalho. O Cursor se torna uma ferramenta poderosa e segura, permitindo que você foque no que realmente importa: **desenvolver seu projeto**.

**Lembre-se**: A automação é sua amiga. Configure uma vez, use sempre!

---

*Este guia foi baseado em experiência real de desenvolvimento e foi adaptado para funcionar em diferentes sistemas operacionais. Se você implementar todos os passos, terá um ambiente de desenvolvimento profissional e seguro.*

**Boa sorte com seu projeto!** 🚀 