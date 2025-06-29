# Sistema de Tarefas - Polkadot Wallet

## 📋 Como Usar Este Sistema

### 1. **Criar Nova Tarefa**
Quando iniciar uma nova funcionalidade ou objetivo específico:

1. Crie um arquivo `TAREFA-[nome].md` nesta pasta
2. Use o template abaixo
3. Consulte este arquivo durante o desenvolvimento

### 2. **Template de Tarefa**
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
- [ ] [Item 3]

## 🎨 Diretrizes Específicas
[Regras ou preferências específicas para esta tarefa]

## 📝 Notas de Desenvolvimento
[Anotações durante o desenvolvimento]

## ✅ Critérios de Conclusão
[Como saber que a tarefa está completa]
```

### 3. **Fluxo de Trabalho**
1. **Iniciar**: Criar arquivo de tarefa
2. **Desenvolver**: Consultar contexto geral + tarefa específica
3. **Registrar**: Atualizar notas de desenvolvimento
4. **Finalizar**: Marcar como concluída

### 4. **Integração com Log**
- Use o script de log para registrar progresso
- Referencie a tarefa atual nas mensagens
- Exemplo: `node log-assistente.js "Iniciei implementação do header" "TAREFA: Layout Header"`

## 📁 Tarefas Ativas
[Lista de tarefas em andamento será adicionada aqui] 