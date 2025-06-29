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

---

**Status do Projeto**: 🟡 Em desenvolvimento inicial
**Última Atualização**: 29/06/2025
**Versão**: 0.1.0

**Este documento deve ser consultado sempre que trabalhar neste projeto específico.** 