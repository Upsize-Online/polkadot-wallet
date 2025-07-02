# ⚠️ ATENÇÃO: PowerShell/CMD NÃO SUPORTA '&&' ⚠️

**Nunca use '&&' ou comandos compostos no PowerShell/CMD!**
- Sempre execute **um comando por vez**.
- Isso evita erros e garante compatibilidade total no Windows.

---

# Contexto do Projeto - Polkadot Wallet

## 🎯 Objetivo Principal
Desenvolver uma interface de wallet Polkadot intuitiva e acessível para usuários não técnicos, com foco em simplicidade e boa experiência do usuário.

## 🏗️ Arquitetura e Tecnologias
- **Framework**: Next.js 15 com React 19
- **Estilização**: Tailwind CSS 4
- **Linguagem**: TypeScript
- **Wallet**: Integração com Polkadot Extension
- **UI Components**: Radix UI + Lucide React

## 📋 Padrões de Desenvolvimento
- **Componentes**: React funcionais com hooks
- **Estilização**: Tailwind CSS com classes utilitárias
- **Estrutura**: Organização por funcionalidade
- **Responsividade**: Mobile-first design
- **Acessibilidade**: Seguir padrões WCAG

## 🎨 Diretrizes de Design
- **Interface**: Limpa e minimalista
- **Cores**: Paleta consistente com identidade Polkadot
- **Tipografia**: Legível e hierárquica
- **Interações**: Feedback visual claro
- **Loading**: Estados de carregamento informativos

## 🔧 Configurações do Ambiente
- **Salvamento**: Automático a cada 5 segundos
- **Versionamento**: Git com commits frequentes
- **Log**: Registro de interações e decisões
- **Linting**: ESLint configurado

## 📁 Estrutura do Projeto
```
polkadot-wallet/
├── src/
│   ├── app/          # Páginas Next.js
│   ├── components/   # Componentes reutilizáveis
│   └── ...
├── public/           # Assets estáticos
└── ...
```

## 🚀 Fluxo de Trabalho
1. **Contexto**: Sempre verificar este arquivo antes de começar
2. **Tarefa**: Consultar arquivo de tarefa específica
3. **Desenvolvimento**: Seguir padrões estabelecidos
4. **Log**: Registrar decisões importantes
5. **Commit**: Salvar alterações no Git

## 📝 Notas Importantes
- Usuário final: Pessoas não técnicas
- Foco: Simplicidade e usabilidade
- Performance: Carregamento rápido
- Segurança: Integração segura com wallet

## Padrão de Automação de Comandos

A partir de agora, **todos os comandos de automação** (como `git add`, `git commit`, execução de scripts de log, etc.) devem ser executados **um a um**, nunca utilizando `&&` ou comandos compostos, para garantir máxima compatibilidade no ambiente Windows (PowerShell/CMD).

### Motivo
- O operador `&&` não é nativo do PowerShell/CMD e pode causar falhas silenciosas ou execução parcial dos comandos.
- Executar cada comando separadamente garante que cada etapa seja concluída corretamente e facilita a identificação de erros.

### Exemplo do novo padrão:
```powershell
git add polkadot-wallet/src/app/globals.css
git commit -m "style: indexação e documentação do esquema de cores Polkadot em variáveis CSS globais"
node polkadot-wallet/log-assistant.js "Indexação e documentação do esquema de cores Polkadot no globals.css (variáveis CSS, nomes e hex)" "Automação: cores Polkadot para uso global e manutenção"
```

Sempre siga este padrão para todas as automações do projeto.

## Orientação para Comentários em CSS

**Nunca use comentários de linha `//` em arquivos CSS.**
- Sempre utilize o padrão de comentários de bloco: `/* ... */`.
- Comentários de linha (`//`) causam erro de build e travam o parser CSS.
- Essa regra vale para todos os arquivos de estilos do projeto.

## 🔗 Integração com Outros Projetos

Este projeto serve como **base de referência** para outros projetos similares:
- **Padrão visual**: Cores e componentes reutilizáveis
- **Automação**: Scripts de log e commit
- **Estrutura**: Organização de arquivos e pastas
- **Documentação**: Templates e procedimentos

## 📊 Status do Projeto
- **Versão**: 1.0.0
- **Status**: 🟢 Em desenvolvimento ativo
- **Última atualização**: 29/06/2025
- **Próxima fase**: Integração com Advanced Knowledge Base Management

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

**Este documento deve ser consultado sempre que trabalhar neste projeto específico.**

## 🚫 Diretriz de Integridade das Dependências Externas

**Nunca modifique diretamente o código-fonte de dependências externas como Radix UI, TailwindCSS, Lucide React, etc.**

- Todas as customizações de UI/UX devem ser feitas via:
  - Classes utilitárias do TailwindCSS
  - Arquivos próprios do projeto (ex: `globals.css`)
  - Configuração do Tailwind (`tailwind.config.ts`)
  - Composição e wrappers de componentes React
- Alterações em dependências externas podem causar problemas de atualização, conflitos e dificultar a manutenção.
- Se for absolutamente necessário um comportamento diferente, utilize wrappers, hooks personalizados ou configuração avançada, mas **nunca altere arquivos dentro de `node_modules`**.
- Em caso de dúvida, consulte este documento ou peça orientação antes de tentar customizações profundas.

--- 