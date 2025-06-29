# Contexto Geral do Projeto - Polkadot Wallet

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

## Padrão de Automação de Comandos (Atualização)

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

# (Demais conteúdos do contexto do projeto seguem abaixo) 