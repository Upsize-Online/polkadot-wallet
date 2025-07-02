# ⚠️ ATENÇÃO: PowerShell/CMD NÃO SUPORTA '&&' ⚠️

**Nunca use '&&' ou comandos compostos no PowerShell/CMD!**
- Sempre execute **um comando por vez**.
- Isso evita erros e garante compatibilidade total no Windows.

# CONTEXTO DO PROJETO: Advanced Knowledge Base Management

## VISÃO GERAL
SaaS de gestão avançada de base de conhecimento com conexão de wallet embutida, baseado na arquitetura do polkadot-wallet mas com funcionalidades específicas para gestão de conhecimento.

## ARQUITETURA BASE
- **Framework**: Next.js 14 com TypeScript
- **Styling**: Tailwind CSS
- **Wallet Integration**: Polkadot.js (similar ao polkadot-wallet)
- **Logging**: Sistema de logs compartilhado com polkadot-wallet

## COMPONENTES COMPARTILHADOS COM POLKADOT-WALLET
- Sistema de conexão de wallet (WalletConnect.tsx)
- Header e Footer base
- Estrutura de logging (log-assistant.js)
- Configurações de build (next.config.ts, tailwind.config.ts)
- Estilos globais (globals.css)

## FUNCIONALIDADES ESPECÍFICAS DO SAAS
- Gestão de bases de conhecimento
- Sistema de busca avançada
- Organização de documentos
- Colaboração em tempo real
- Integração com blockchain para verificação de autenticidade

## ESTRUTURA DE DIRETÓRIOS
```
Advanced-Knowledge-Base-Management/
├── src/
│   ├── app/                    # Páginas Next.js
│   ├── components/             # Componentes React
│   │   ├── WalletConnect.tsx   # Herdado do polkadot-wallet
│   │   ├── Header.tsx          # Adaptado
│   │   ├── Footer.tsx          # Adaptado
│   │   └── [novos componentes específicos do SaaS]
│   ├── utils/                  # Utilitários
│   └── styles/                 # Estilos específicos
├── docs/                       # Documentação técnica
├── scripts/                    # Scripts de automação
└── public/                     # Assets estáticos
```

## PROTOCOLO DE DESENVOLVIMENTO
1. **Sempre especificar o projeto**: "Advanced Knowledge Base Management"
2. **Confirmar antes de mudanças**: Especialmente em componentes compartilhados
3. **Usar caminhos completos**: Para evitar confusão entre projetos
4. **Logging obrigatório**: Todas as mudanças devem ser registradas

## DEPENDÊNCIAS COMPARTILHADAS
- next: ^14.0.0
- react: ^18.0.0
- typescript: ^5.0.0
- tailwindcss: ^3.3.0
- @polkadot/api: ^10.0.0 (para wallet integration)

## ESTADO ATUAL
- ✅ Estrutura base criada
- ✅ Configurações de build configuradas
- ✅ Sistema de logging implementado
- 🔄 Componentes de wallet sendo adaptados
- ⏳ Funcionalidades específicas do SaaS em desenvolvimento

## PRÓXIMOS PASSOS
1. Adaptar WalletConnect.tsx para o contexto do SaaS
2. Criar componentes específicos de gestão de conhecimento
3. Implementar sistema de busca e organização
4. Desenvolver interface de colaboração

## NOTAS IMPORTANTES
- Este projeto herda a arquitetura de wallet do polkadot-wallet
- Grandes divergências são esperadas nas funcionalidades específicas
- Manter compatibilidade com sistema de logging compartilhado
- Documentar todas as adaptações feitas nos componentes herdados

# Contexto do Projeto - Advanced Knowledge Base Management (SaaS)

## 🎯 Objetivo Principal
Desenvolver uma plataforma SaaS para gestão avançada de base de conhecimento, integrando RAG (Retrieval-Augmented Generation) com consulta direta, focada no ecossistema Polkadot e com potencial para integração com carteiras digitais.

## 🏗️ Arquitetura e Tecnologias
- **Framework**: Next.js 15 com React 19
- **Estilização**: Tailwind CSS 4 (padronizado com polkadot-wallet)
- **Linguagem**: TypeScript
- **Integração**: Polkadot Ecosystem
- **UI Components**: Radix UI + Lucide React
- **Pipeline**: RAG + MCP para dados híbridos

## 📋 Padrões de Desenvolvimento
- **Componentes**: React funcionais com hooks
- **Estilização**: Tailwind CSS com classes utilitárias padronizadas
- **Estrutura**: Organização por funcionalidade SaaS
- **Responsividade**: Mobile-first design
- **Acessibilidade**: Seguir padrões WCAG
- **Automação**: Logs, commits e documentação automática

## 🎨 Diretrizes de Design
- **Interface**: Limpa e minimalista (padrão polkadot-wallet)
- **Cores**: Paleta consistente com identidade Polkadot
- **Tipografia**: Legível e hierárquica
- **Interações**: Feedback visual claro
- **Loading**: Estados de carregamento informativos

## 🔧 Configurações do Ambiente
- **Salvamento**: Automático a cada 5 segundos
- **Versionamento**: Git com commits frequentes
- **Log**: Registro de interações e decisões
- **Linting**: ESLint configurado
- **Automação**: Scripts de log e commit padronizados

## 📁 Estrutura do Projeto
```
Advanced-Knowledge-Base-Management/
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/         # Páginas do SaaS
│   ├── styles/        # CSS padronizado
│   └── utils/         # Utilitários (log, commit, etc.)
├── docs/              # Documentação técnica
├── scripts/           # Scripts de automação
├── public/            # Assets estáticos
└── README.md          # Este arquivo
```

## 🚀 Fluxo de Trabalho
1. **Contexto**: Sempre verificar este arquivo antes de começar
2. **Tarefa**: Consultar arquivo de tarefa específica
3. **Desenvolvimento**: Seguir padrões estabelecidos
4. **Log**: Registrar decisões importantes
5. **Commit**: Salvar alterações no Git

## 📝 Notas Importantes
- **Usuário final**: Desenvolvedores e empresas do ecossistema Polkadot
- **Foco**: Simplicidade e usabilidade para gestão de conhecimento
- **Performance**: Carregamento rápido e processamento eficiente
- **Segurança**: Integração segura com APIs e blockchains
- **Escalabilidade**: Arquitetura preparada para crescimento

## 🔗 Integração com Polkadot Wallet
- **Padronização visual**: Mesmo sistema de cores e componentes
- **Autenticação**: Via carteiras Polkadot
- **Cobrança**: Sistema de pagamento em DOT
- **API**: Endpoints para integração futura

## 🛠️ Componentes Reutilizáveis
- **Sistema de Log**: Baseado no log-assistant.js
- **Automação de Commits**: Scripts padronizados
- **Documentação**: Templates e procedimentos
- **UI/UX**: Componentes baseados no polkadot-wallet

## 📊 Métricas de Sucesso
- **Performance**: Tempo de resposta < 2s
- **Usabilidade**: Interface intuitiva
- **Escalabilidade**: Suporte a múltiplos usuários
- **Integração**: Compatibilidade com ecossistema Polkadot

## 🎯 Roadmap
1. **Fase 1**: Estrutura base e componentes
2. **Fase 2**: Pipeline RAG básico
3. **Fase 3**: Integração com APIs Polkadot
4. **Fase 4**: Sistema de autenticação e cobrança
5. **Fase 5**: Integração com polkadot-wallet

## 🚀 Pipeline RAG - Especificações Técnicas

### Fluxo de Processamento
1. **Fork do Repositório**: Clone do diretório alvo
2. **Limpeza**: Filtro de arquivos .md
3. **Classificação**: Estático vs Dinâmico
4. **Quebra**: Fragmentação inteligente
5. **Enriquecimento**: Captioning de imagens
6. **Validação**: Verificação de tamanho
7. **Indexação**: RAG + Referências diretas

### Estrutura JSON Esperada
```json
{
  "metadata": {
    "title": "Título do fragmento",
    "tags": ["tag1", "tag2"],
    "type": "static|dynamic",
    "location": "caminho/arquivo.md"
  },
  "content": "Conteúdo do fragmento",
  "images": [
    {
      "url": "caminho/imagem.png",
      "caption": "Descrição gerada por LLM",
      "position": "contexto"
    }
  ],
  "links": ["link1", "link2"],
  "dynamic_reference": "endpoint/para/dados/dinamicos"
}
```

## Padrão de Automação de Comandos

A partir de agora, **todos os comandos de automação** devem ser executados **um a um**, nunca utilizando `&&` ou comandos compostos, para garantir máxima compatibilidade no ambiente Windows (PowerShell/CMD).

### Exemplo do padrão:
```powershell
git add arquivo.md
git commit -m "feat: descrição da alteração"
node scripts/log-assistant.js "Descrição" "Contexto"
```

## Orientação para Comentários em CSS

**Nunca use comentários de linha `//` em arquivos CSS.**
- Sempre utilize o padrão de comentários de bloco: `/* ... */`
- Comentários de linha causam erro de build e travam o parser CSS

## 🔄 Integração com Projetos Relacionados

### Base de Referência: polkadot-wallet
- **Padrão visual**: Cores e componentes reutilizáveis
- **Automação**: Scripts de log e commit
- **Estrutura**: Organização de arquivos e pastas
- **Documentação**: Templates e procedimentos

### Futuras Integrações
- **Polkadot Wallet**: Autenticação e pagamentos
- **APIs Polkadot**: Dados em tempo real
- **Smart Contracts**: Cobrança descentralizada

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

**Status do Projeto**: 🟡 Em desenvolvimento inicial
**Última Atualização**: 29/06/2025
**Versão**: 0.1.0

**Este documento deve ser consultado sempre que trabalhar neste projeto específico.**

## Observação importante

Para garantir consistência visual e evitar bugs de CSS, mantenha a configuração de Tailwind, PostCSS e fontes idêntica ao projeto polkadot-wallet, exceto pelos links do topo. 