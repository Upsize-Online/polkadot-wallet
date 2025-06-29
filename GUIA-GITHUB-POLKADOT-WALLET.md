# Como migrar o projeto polkadot-wallet para o GitHub

*Um guia completo para publicar seu projeto Next.js no GitHub de forma profissional*

---

## 🎯 Por que migrar para o GitHub?

Você desenvolveu um projeto incrível - o **polkadot-wallet** - com uma interface moderna, funcionalidades avançadas e código bem organizado. Agora é hora de compartilhar seu trabalho com a comunidade e criar um portfólio profissional.

**O GitHub oferece:**
- 📁 **Repositório público** para mostrar seu trabalho
- 🌐 **GitHub Pages** para deploy automático
- 👥 **Colaboração** com outros desenvolvedores
- 📊 **Análise de código** e insights
- 🏷️ **Issues e Pull Requests** para melhorias
- 📈 **Visibilidade** na comunidade tech

---

## 🚀 O que vamos implementar

Neste guia, você aprenderá a:

1. **Preparar o projeto** para publicação
2. **Criar repositório** no GitHub
3. **Configurar GitHub Pages** para deploy automático
4. **Adicionar documentação** profissional
5. **Configurar workflows** automáticos
6. **Publicar e manter** o projeto

---

## 🤖 A forma mais fácil: Use o Assistente do Cursor

**Importante**: Você não precisa fazer nada manualmente! O assistente do Cursor pode implementar **tudo automaticamente**.

### Como usar o assistente:

1. **Abra o assistente** no Cursor (geralmente `Ctrl + K` ou `Cmd + K`)
2. **Copie e cole** qualquer seção deste artigo como prompt
3. **Peça para implementar** automaticamente

### Exemplos de prompts para o assistente:

- *"Crie um README.md profissional para o projeto polkadot-wallet"*
- *"Configure GitHub Pages para deploy automático"*
- *"Crie workflows do GitHub Actions para CI/CD"*
- *"Prepare o projeto para publicação no GitHub"*

### ⚠️ Considerações importantes:

- **Conta GitHub**: Você precisa ter uma conta no GitHub
- **Token de acesso**: Para automação, pode ser necessário um token pessoal
- **Configurações**: Algumas configurações podem precisar de ajustes individuais
- **Backup**: Sempre faça backup antes de publicar

### 🎯 Abordagem recomendada:

1. **Leia o guia completo** para entender o que será implementado
2. **Use o assistente** para automatizar as partes que desejar
3. **Adapte conforme necessário** para seu projeto específico
4. **Teste cada implementação** antes de prosseguir

---

## 📋 Pré-requisitos

- ✅ Projeto polkadot-wallet funcionando (já temos!)
- ✅ Git configurado (já configuramos!)
- ✅ Conta no GitHub
- ✅ 15 minutos do seu tempo

---

## 🔧 Passo 1: Preparar o Projeto para GitHub

### O que é?

Preparar todos os arquivos necessários para uma publicação profissional no GitHub.

### Como fazer:

#### 1.1 Verificar arquivos essenciais:

```bash
# Verificar se temos todos os arquivos necessários
ls -la
```

**Arquivos que devem existir:**
- ✅ `package.json` - Dependências e scripts
- ✅ `README.md` - Documentação principal
- ✅ `.gitignore` - Arquivos ignorados pelo Git
- ✅ `next.config.ts` - Configuração do Next.js
- ✅ `tsconfig.json` - Configuração do TypeScript

#### 1.2 Verificar se o projeto funciona:

```bash
# Instalar dependências
npm install

# Testar o projeto
npm run dev
```

**Confirme que:**
- ✅ O servidor inicia sem erros
- ✅ A aplicação funciona no navegador
- ✅ Todas as funcionalidades estão operacionais

---

## 📝 Passo 2: Criar README.md Profissional

### O que é?

O README.md é a primeira coisa que as pessoas veem no seu repositório. Deve ser claro, completo e profissional.

### Como criar:

#### 2.1 Estrutura básica:

```markdown
# Polkadot Wallet App

Uma aplicação moderna para conectar e gerenciar wallets Polkadot com interface intuitiva e design responsivo.

## 🚀 Funcionalidades

- 🔗 **Conexão de Wallet**: Suporte para extensões Polkadot.js, Nova, Talisman e SubWallet
- 💰 **Visualização de Saldo**: Exibição em tempo real do saldo DOT
- 🌙 **Tema Escuro/Claro**: Interface adaptável com alternância de tema
- 📱 **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- 🔒 **Segurança**: Implementação segura seguindo melhores práticas

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Wallet**: Polkadot.js API
- **Deploy**: Vercel/Netlify

## 📦 Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/polkadot-wallet.git
   cd polkadot-wallet
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**:
   ```
   http://localhost:3000
   ```

## 🔧 Configuração

### Pré-requisitos

- Node.js 18+ instalado
- Extensão de wallet Polkadot (Nova, Talisman, SubWallet ou Polkadot.js)

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_POLKADOT_ENDPOINTS=wss://rpc.polkadot.io,wss://polkadot.api.onfinality.io/public-ws
```

## 🎨 Estrutura do Projeto

```
polkadot-wallet/
├── src/
│   ├── app/                 # Páginas da aplicação
│   │   ├── page.tsx         # Página principal (Wallet)
│   │   ├── quem-somos/      # Página Quem Somos
│   │   ├── o-que-fazemos/   # Página O que Fazemos
│   │   ├── faq/            # Perguntas Frequentes
│   │   └── contato/        # Página de Contato
│   ├── components/         # Componentes React
│   │   ├── Header.tsx      # Cabeçalho da aplicação
│   │   ├── Footer.tsx      # Rodapé da aplicação
│   │   └── WalletConnect.tsx # Componente principal da wallet
│   └── globals.css         # Estilos globais
├── public/                 # Arquivos estáticos
│   └── images/            # Imagens e logos
├── package.json           # Dependências e scripts
├── next.config.ts         # Configuração do Next.js
└── README.md              # Este arquivo
```

## 🚀 Deploy

### Vercel (Recomendado)

1. **Conecte seu repositório** ao Vercel
2. **Configure as variáveis de ambiente**
3. **Deploy automático** a cada push

### Netlify

1. **Conecte seu repositório** ao Netlify
2. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy automático** a cada push

## 🤝 Contribuindo

1. **Fork o projeto**
2. **Crie uma branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit suas mudanças** (`git commit -m 'Add some AmazingFeature'`)
4. **Push para a branch** (`git push origin feature/AmazingFeature`)
5. **Abra um Pull Request**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- Comunidade Polkadot
- Next.js Team
- Tailwind CSS
- Todos os contribuidores

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

- 📧 Email: seu-email@exemplo.com
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/polkadot-wallet/issues)
- 💬 Discussões: [GitHub Discussions](https://github.com/seu-usuario/polkadot-wallet/discussions)

---

**⭐ Se este projeto te ajudou, considere dar uma estrela no GitHub!**
```

#### 2.2 Personalizar o README:

**Substitua:**
- `seu-usuario` pelo seu nome de usuário do GitHub
- `seu-email@exemplo.com` pelo seu email
- Links do LinkedIn e outras redes sociais
- Informações específicas do seu projeto

---

## 🔗 Passo 3: Criar Repositório no GitHub

### O que é?

Criar um repositório público no GitHub para hospedar seu projeto.

### Como fazer:

#### 3.1 Acessar GitHub:

1. **Vá para**: [https://github.com](https://github.com)
2. **Faça login** na sua conta
3. **Clique no botão "+"** no canto superior direito
4. **Selecione "New repository"**

#### 3.2 Configurar repositório:

**Informações básicas:**
- **Repository name**: `polkadot-wallet`
- **Description**: `Aplicação moderna para conectar e gerenciar wallets Polkadot`
- **Visibility**: `Public` (recomendado para portfólio)
- **Initialize with**: Deixe desmarcado (já temos o projeto)

**Configurações avançadas:**
- ✅ **Add a README file**: Não (já temos)
- ✅ **Add .gitignore**: Não (já temos)
- ✅ **Choose a license**: MIT License (recomendado)

#### 3.3 Criar repositório:

1. **Clique em "Create repository"**
2. **Copie a URL** do repositório criado
3. **Guarde a URL** para usar nos próximos passos

---

## 🔄 Passo 4: Conectar Projeto Local ao GitHub

### O que é?

Conectar seu projeto local ao repositório remoto no GitHub.

### Como fazer:

#### 4.1 Adicionar remote:

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/seu-usuario/polkadot-wallet.git

# Verificar se foi adicionado
git remote -v
```

#### 4.2 Fazer push inicial:

```bash
# Fazer push de todos os commits
git push -u origin master

# Verificar se funcionou
git status
```

**Se der erro de autenticação:**
- Use token pessoal do GitHub
- Ou configure SSH keys

---

## 🌐 Passo 5: Configurar GitHub Pages

### O que é?

GitHub Pages permite hospedar seu site diretamente do repositório.

### Como fazer:

#### 5.1 Configurar Pages:

1. **Vá para Settings** do repositório
2. **Clique em "Pages"** no menu lateral
3. **Configure Source**:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` (vamos criar)
   - Folder: `/ (root)`

#### 5.2 Criar branch gh-pages:

```bash
# Criar branch gh-pages
git checkout -b gh-pages

# Fazer push da branch
git push origin gh-pages

# Voltar para master
git checkout master
```

#### 5.3 Configurar Next.js para export estático:

**Editar `next.config.ts`:**
```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

#### 5.4 Adicionar script de build:

**Editar `package.json`:**
```json
{
  "scripts": {
    "build": "next build",
    "export": "next build && next export",
    "deploy": "npm run export && touch out/.nojekyll"
  }
}
```

---

## 🤖 Passo 6: Configurar GitHub Actions

### O que é?

Automatizar o deploy e testes do projeto.

### Como fazer:

#### 6.1 Criar workflow de deploy:

**Criar arquivo**: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build project
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/master'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

#### 6.2 Criar workflow de testes:

**Criar arquivo**: `.github/workflows/test.yml`

```yaml
name: Test

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Run linting
      run: npm run lint
```

---

## 📋 Passo 7: Adicionar Arquivos Essenciais

### O que é?

Adicionar arquivos que tornam o projeto mais profissional.

### Como fazer:

#### 7.1 Criar LICENSE:

**Criar arquivo**: `LICENSE`

```
MIT License

Copyright (c) 2024 Seu Nome

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

#### 7.2 Criar CONTRIBUTING.md:

**Criar arquivo**: `CONTRIBUTING.md`

```markdown
# Guia de Contribuição

Obrigado por considerar contribuir com o projeto Polkadot Wallet!

## Como Contribuir

### 1. Fork o Projeto

1. Vá para [https://github.com/seu-usuario/polkadot-wallet](https://github.com/seu-usuario/polkadot-wallet)
2. Clique em "Fork" no canto superior direito
3. Clone seu fork localmente

### 2. Configure o Ambiente

```bash
git clone https://github.com/seu-usuario/polkadot-wallet.git
cd polkadot-wallet
npm install
npm run dev
```

### 3. Crie uma Branch

```bash
git checkout -b feature/nova-funcionalidade
```

### 4. Faça suas Alterações

- Escreva código limpo e bem documentado
- Siga os padrões do projeto
- Teste suas alterações

### 5. Commit suas Mudanças

```bash
git add .
git commit -m "feat: adiciona nova funcionalidade"
```

### 6. Push para sua Branch

```bash
git push origin feature/nova-funcionalidade
```

### 7. Abra um Pull Request

1. Vá para seu fork no GitHub
2. Clique em "Compare & pull request"
3. Descreva suas alterações
4. Aguarde a revisão

## Padrões de Código

- Use TypeScript
- Siga as convenções do ESLint
- Escreva testes quando possível
- Documente funções complexas

## Reportando Bugs

Use o template de issue do GitHub e inclua:
- Descrição do bug
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots (se aplicável)

## Sugerindo Funcionalidades

Use o template de feature request e inclua:
- Descrição da funcionalidade
- Casos de uso
- Benefícios para os usuários
```

#### 7.3 Criar ISSUE_TEMPLATE:

**Criar arquivo**: `.github/ISSUE_TEMPLATE/bug_report.md`

```markdown
---
name: Bug report
about: Crie um relatório para nos ajudar a melhorar
title: '[BUG] '
labels: bug
assignees: ''

---

**Descreva o bug**
Uma descrição clara e concisa do que é o bug.

**Para Reproduzir**
Passos para reproduzir o comportamento:
1. Vá para '...'
2. Clique em '....'
3. Role para baixo até '....'
4. Veja o erro

**Comportamento Esperado**
Uma descrição clara do que você esperava que acontecesse.

**Screenshots**
Se aplicável, adicione screenshots para ajudar a explicar seu problema.

**Ambiente:**
 - OS: [ex: iOS]
 - Navegador: [ex: chrome, safari]
 - Versão: [ex: 22]

**Contexto Adicional**
Adicione qualquer outro contexto sobre o problema aqui.
```

---

## 🎯 Passo 8: Configurar Deploy Automático

### O que é?

Configurar para que o site seja atualizado automaticamente a cada push.

### Como fazer:

#### 8.1 Configurar Vercel (Recomendado):

1. **Vá para**: [https://vercel.com](https://vercel.com)
2. **Conecte sua conta GitHub**
3. **Importe o repositório** polkadot-wallet
4. **Configure as variáveis de ambiente**
5. **Deploy automático** configurado!

#### 8.2 Configurar Netlify:

1. **Vá para**: [https://netlify.com](https://netlify.com)
2. **Conecte sua conta GitHub**
3. **Importe o repositório**
4. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. **Deploy automático** configurado!

---

## 🎉 Passo 9: Publicar e Manter

### O que é?

Fazer o push final e manter o projeto atualizado.

### Como fazer:

#### 9.1 Push final:

```bash
# Adicionar todos os arquivos
git add .

# Commit das alterações
git commit -m "feat: prepara projeto para GitHub - README, workflows e documentação"

# Push para GitHub
git push origin master
```

#### 9.2 Verificar deploy:

1. **Vá para seu repositório** no GitHub
2. **Clique em "Actions"** para ver os workflows
3. **Clique em "Settings > Pages"** para ver o site
4. **Teste o site** funcionando

#### 9.3 Manter atualizado:

```bash
# Sempre que fizer alterações
git add .
git commit -m "feat: descrição das alterações"
git push origin master
```

---

## 🔍 Como Verificar se Está Funcionando

### GitHub Pages:
- Vá para: `https://seu-usuario.github.io/polkadot-wallet`
- Deve mostrar seu site funcionando

### GitHub Actions:
- Vá para: `https://github.com/seu-usuario/polkadot-wallet/actions`
- Deve mostrar workflows executando

### Issues:
- Vá para: `https://github.com/seu-usuario/polkadot-wallet/issues`
- Deve mostrar template de issues

### Deploy Automático:
- Faça uma alteração no código
- Push para GitHub
- Verifique se o site atualiza automaticamente

---

## 🛠️ Personalizações

### Mudar nome do repositório:
```bash
# Renomear localmente
git remote set-url origin https://github.com/seu-usuario/novo-nome.git
```

### Adicionar domínio customizado:
1. **Compre um domínio**
2. **Configure DNS** para apontar para GitHub Pages
3. **Adicione arquivo CNAME** no repositório

### Configurar analytics:
```javascript
// Adicionar Google Analytics
export default function Analytics() {
  return (
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
    />
  )
}
```

---

## 🎉 Resultado Final

Com este sistema implementado, você terá:

### ✅ **Projeto Profissional**
- Repositório público no GitHub
- Documentação completa
- Deploy automático
- Workflows configurados

### ✅ **Visibilidade Máxima**
- Site público funcionando
- Código aberto para colaboração
- Portfólio profissional
- Networking na comunidade

### ✅ **Manutenção Fácil**
- Deploy automático a cada push
- Issues e Pull Requests
- Contribuições da comunidade
- Atualizações contínuas

---

## 🚨 Solução de Problemas

### Erro de autenticação:
- **Crie token pessoal**: GitHub > Settings > Developer settings > Personal access tokens
- **Configure Git**: `git config --global user.name "Seu Nome"`
- **Configure email**: `git config --global user.email "seu-email@exemplo.com"`

### Deploy não funciona:
- **Verifique Actions**: GitHub > Actions > verificar erros
- **Teste localmente**: `npm run build`
- **Verifique configurações**: next.config.ts e package.json

### GitHub Pages não carrega:
- **Verifique branch**: deve ser `gh-pages` ou `master`
- **Verifique configurações**: Settings > Pages
- **Aguarde alguns minutos**: deploy pode demorar

### Problemas específicos do sistema operacional:

#### Windows:
- **Use Git Bash**: em vez do PowerShell
- **Configure line endings**: `git config --global core.autocrlf true`

#### macOS:
- **Use Terminal**: ou iTerm2
- **Configure permissões**: `chmod +x scripts/*`

#### Linux:
- **Configure permissões**: `chmod +x scripts/*`
- **Verifique dependências**: `sudo apt install nodejs npm`

---

## 📞 Suporte

Se você encontrar problemas:

1. **Verifique logs** no GitHub Actions
2. **Consulte documentação** do Next.js e GitHub
3. **Teste cada componente** individualmente
4. **Reinicie workflows** se necessário
5. **Consulte a comunidade** no GitHub Discussions

---

## 🎯 Conclusão

Implementando este sistema, seu projeto **polkadot-wallet** estará:

- 🌐 **Publicado** no GitHub
- 🚀 **Deployado** automaticamente
- 📚 **Documentado** profissionalmente
- 🤝 **Pronto** para colaboração
- 📈 **Visível** na comunidade

**Lembre-se**: Um projeto bem documentado e publicado é a melhor forma de mostrar suas habilidades e contribuir com a comunidade!

---

*Este guia foi baseado em experiências reais de desenvolvimento e foi adaptado para funcionar em diferentes sistemas operacionais. Se você implementar todos os passos, terá um projeto profissional e bem estruturado no GitHub.*

**Boa sorte com seu projeto!** 🚀 