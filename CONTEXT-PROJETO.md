# ⚠️ ATENÇÃO: PowerShell/CMD NÃO SUPORTA '&&' ⚠️

**Nunca use '&&' ou comandos compostos no PowerShell/CMD!**
- Sempre execute **um comando por vez**.
- Isso evita erros e garante compatibilidade total no Windows.

# Contexto Geral - Gerenciamento de Múltiplos Projetos

## 🎯 Objetivo Principal
Este documento serve como **referência central** para gerenciar múltiplos projetos relacionados ao ecossistema Polkadot, garantindo consistência, padronização e organização no desenvolvimento.

## 📁 Estrutura de Projetos

### Projetos Ativos
```
test/ (raiz)
├── CONTEXT-PROJETO.md                    # Este arquivo - Contexto geral
├── polkadot-wallet/
│   ├── CONTEXT-PROJETO.md                # Contexto específico do wallet
│   └── src/
└── Advanced-Knowledge-Base-Management/
    ├── CONTEXT-PROJETO.md                # Contexto específico do SaaS
    └── src/
```

## 🎯 Scripts de Desenvolvimento na Raiz

### Comandos Disponíveis
- `npm run dev` - Exibe instruções para iniciar projetos
- `npm run dev:wallet` - Inicia o projeto Polkadot Wallet
- `npm run dev:saas` - Inicia o projeto Advanced Knowledge Base Management

### Como Usar
```powershell
# Para iniciar o Wallet
npm run dev:wallet

# Para iniciar o SaaS
npm run dev:saas

# Para ver instruções
npm run dev
```

**Nota**: Cada projeto deve ser iniciado em terminais separados para evitar conflitos de porta.

## 🎯 Projetos Específicos

### 1. **Polkadot Wallet** (`polkadot-wallet/`)
- **Objetivo**: Interface de wallet Polkadot para usuários não técnicos
- **Status**: 🟢 Em desenvolvimento ativo
- **Contexto**: `polkadot-wallet/CONTEXT-PROJETO.md`
- **Tecnologias**: Next.js 15, React 19, TypeScript, Tailwind CSS 4

### 2. **Advanced Knowledge Base Management** (`Advanced-Knowledge-Base-Management/`)
- **Objetivo**: Plataforma SaaS para gestão avançada de base de conhecimento
- **Status**: 🟡 Em desenvolvimento inicial
- **Contexto**: `Advanced-Knowledge-Base-Management/CONTEXT-PROJETO.md`
- **Tecnologias**: Next.js 15, React 19, TypeScript, Tailwind CSS 4, RAG Pipeline

## 🔄 Padrões Compartilhados

### Tecnologias Base
- **Framework**: Next.js 15 com React 19
- **Estilização**: Tailwind CSS 4
- **Linguagem**: TypeScript
- **UI Components**: Radix UI + Lucide React

### Automação
- **Sistema de Log**: log-assistant.js padronizado
- **Commits**: Padrão de mensagens semânticas
- **Documentação**: Templates consistentes

### Design System
- **Cores Polkadot**: Paleta oficial padronizada
- **Componentes**: Reutilizáveis entre projetos
- **Responsividade**: Mobile-first design

## 🚀 Fluxo de Trabalho Multi-Projeto

### 1. **Identificação do Projeto**
- Sempre especificar qual projeto está sendo trabalhado
- Consultar o CONTEXT-PROJETO.md específico do projeto
- Confirmar diretório de trabalho antes de alterações

### 2. **Desenvolvimento**
- Seguir padrões estabelecidos no contexto específico
- Manter consistência visual entre projetos
- Reutilizar componentes quando apropriado

### 3. **Versionamento**
- Commits específicos por projeto
- Logs organizados por contexto
- Documentação atualizada

## 📋 Protocolo de Segurança

### Para Evitar Confusões
1. **Sempre especificar** o projeto alvo
2. **Confirmar** antes de alterações
3. **Usar caminhos completos** nos comandos
4. **Verificar** contexto específico do projeto

### Exemplos de Comunicação
```
"No projeto polkadot-wallet, crie um componente..."
"No Advanced-Knowledge-Base-Management, modifique..."
"Vou trabalhar no diretório polkadot-wallet/src/..."
```

## 🎨 Sistema de Design Compartilhado

### Cores Polkadot (Padrão Global)
```css
--polkadot-pink: #E6007A
--polkadot-black: #000000
--polkadot-white: #FFFFFF
--polkadot-lime: #E2FF3F
--polkadot-violet: #6C5CE7
```

### Componentes Reutilizáveis
- **Boxes**: Containers com fundo e sombra
- **Botões**: Padrão consistente
- **Formulários**: Inputs e validações
- **Navegação**: Header e sidebar

## 🔧 Configurações do Ambiente

### Padrão de Automação de Comandos
**Todos os comandos de automação** devem ser executados **um a um**, nunca utilizando `&&` ou comandos compostos, para garantir máxima compatibilidade no ambiente Windows (PowerShell/CMD).

### Exemplo do Padrão:
```powershell
git add caminho/do/arquivo
git commit -m "tipo: descrição da alteração"
node projeto/log-assistant.js "Descrição" "Contexto"
```

## 📝 Orientação para Comentários em CSS

**Nunca use comentários de linha `//` em arquivos CSS.**
- Sempre utilize o padrão de comentários de bloco: `/* ... */`
- Comentários de linha causam erro de build e travam o parser CSS

## 🔗 Integração entre Projetos

### Polkadot Wallet → Advanced Knowledge Base Management
- **Base de referência**: Padrão visual e componentes
- **Automação**: Scripts reutilizáveis
- **Documentação**: Templates consistentes

### Advanced Knowledge Base Management → Polkadot Wallet
- **Integração futura**: Autenticação e pagamentos
- **APIs compartilhadas**: Dados Polkadot
- **Experiência unificada**: Interface consistente

## 📊 Status Geral dos Projetos

| Projeto | Status | Versão | Última Atualização |
|---------|--------|--------|-------------------|
| Polkadot Wallet | 🟢 Ativo | 1.0.0 | 29/06/2025 |
| Advanced Knowledge Base Management | 🟡 Inicial | 0.1.0 | 29/06/2025 |

## 🎯 Próximos Passos

### Curto Prazo
1. **Finalizar estrutura** do Advanced Knowledge Base Management
2. **Criar componentes base** compartilhados
3. **Implementar pipeline RAG** básico

### Médio Prazo
1. **Integração** entre projetos
2. **Sistema de autenticação** unificado
3. **APIs compartilhadas**

### Longo Prazo
1. **SaaS completo** funcional
2. **Integração Polkadot** avançada
3. **Ecosistema unificado**

---

## 📚 Referências por Projeto

### Para trabalhar no Polkadot Wallet:
- **Contexto**: `polkadot-wallet/CONTEXT-PROJETO.md`
- **Documentação**: `polkadot-wallet/README.md`
- **Tecnologias**: Next.js, React, TypeScript, Tailwind

### Para trabalhar no Advanced Knowledge Base Management:
- **Contexto**: `Advanced-Knowledge-Base-Management/CONTEXT-PROJETO.md`
- **Documentação**: `Advanced-Knowledge-Base-Management/README.md`
- **Tecnologias**: Next.js, React, TypeScript, Tailwind, RAG

---

**Este documento deve ser consultado sempre que trabalhar com múltiplos projetos.**
**Última Atualização**: 29/06/2025
**Versão**: 2.0.0

## Procedimento Padrão para Execução de Tarefas em Bloco

Sempre que executar tarefas em bloco, utilize uma tabela de acompanhamento com os campos:
- **Tarefa** (use '>>' para subtarefas)
- **Status** (🟢 Concluído, 🟡 Pendente, 🔴 Não iniciado)
- **Projeto** (Wallet, SaaS, Raiz, etc.)

Exemplo:
| Tarefa | Status | Projeto |
|--------|--------|---------|
| 2.1. Topo (Header) | 🟡 Pendente | SaaS |
| >> 2.1.1. Ajustar links | 🔴 Não iniciado | SaaS |

**Sempre que uma tarefa for concluída, a tabela de status deve ser atualizada e impressa antes de prosseguir para a próxima ação.**

**Toda melhoria de processo ou ajuste de protocolo que surgir durante a execução deve ser registrada na tabela e incorporada à documentação de contexto.**

--- 