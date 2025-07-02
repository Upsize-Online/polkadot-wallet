# CMS Criador de Papéis (Roles)

## Objetivo do Produto e Diferencial
Um Headless CMS que permite:

- SaaS = Software como Serviço: Serviço local ou em nuvem que oferece um serviço digital aos usuários.
- O que é um CMS Headless: uma plataforma de gestão de conteúdo para redes sociais, blogs, plataformas de vídeo:
  - YouTube
  - LinkedIn
  - X (Twitter)
  - TikTok
  - Instagram
- WEB3 = Autenticação via Web3

---

## Fluxo de Usuário

### Papéis (Roles):
- **Super Administrador:** Pode modificar permissões de administradores de organizações ou clientes. Exemplo: quando o usuário não pagou, pode desativar o serviço manualmente.
- **Administrador de Organização**
- **Editor**
- **Coder**
- **KOL**
- **Designer**

---

## User Stories

### User Story Organização
Um usuário cria uma página web (instância) e a publica na internet, pertencendo a uma empresa com papéis claros para a gestão do conteúdo dessa página.

**Características:**
- Plataforma no-code, pode modificar sua página com conteúdo multimídia, imagens.
- Uma instância de organização pode ter múltiplos administradores.
- Uma organização pode ter múltiplas instâncias (projetos).
- Cada instância tem papéis definidos, onde o administrador pode atribuir usuários relacionados à sua organização.

### User Story Freelancer
Um usuário cria uma página web (instância), publica na internet e pode administrar ou compartilhar o papel.

**Características:**
- Plataforma no-code, pode modificar sua página com conteúdo multimídia, imagens.
- Pode transferir a instância (projeto) para uma organização, ou continuar administrando enquanto os termos de serviço forem cumpridos.

---

## Diagramas Mermaid

### Diagrama Geral (Front + Backend)
```mermaid
graph TD
    USUARIO["USUÁRIO"] --> SUPERADMIN{Super ADMIN?}
    SUPERADMIN -->|Sim| ADMIN["admin"]
    SUPERADMIN -->|Não| ROLES["editor, coder, designer, content-KOL"]
    ADMIN --> ROLES
    ROLES --> CONTENTKOL["content-KOL"]
    
    subgraph FRONT
        COMPONENTS["components (UI)\n- No code HTML modal\n- Menu de Navegação\n- Aba de Status do Usuário"]
        APPS["apps / todas as páginas\ndashboards exibidos para usuários ou papéis (UI)"]
        MIDDLEWARES["middlewares (APIs, rotas, desafios, bibliotecas Polkadot API)"]
    end
    
    subgraph BACKEND
        USER["USER\n- UUID\n- conta polkadot ou substrate\n- outros campos relacionados"]
        ROLE["ROLE"]
        SCHEMAS["Schemas para sistemas CMS?"]
        API["API/rotas"]
        CHALLENGES["challenges / JWT"]
        OUTRO["falta algo?"]
    end
    
    COMPONENTS --> APPS --> MIDDLEWARES
    MIDDLEWARES --> API
    MIDDLEWARES --> CHALLENGES
    API --> USER
    API --> ROLE
    API --> SCHEMAS
    CHALLENGES --> USER
    CHALLENGES --> ROLE
    CHALLENGES --> SCHEMAS
    OUTRO
```

### Diagrama FRONT
```mermaid
graph TD
    USUARIO["USUÁRIO"] --> SUPERADMIN{Super ADMIN?}
    SUPERADMIN -->|Sim| ADMIN["admin"]
    SUPERADMIN -->|Não| ROLES["editor, coder, designer, content-KOL"]
    ADMIN --> ROLES
    ROLES --> CONTENTKOL["content-KOL"]
    COMPONENTS["components (UI)\n- No code HTML modal\n- Menu de Navegação\n- Aba de Status do Usuário"]
    APPS["apps / todas as páginas\ndashboards exibidos para usuários ou papéis (UI)"]
    MIDDLEWARES["middlewares (APIs, rotas, desafios, bibliotecas Polkadot API)"]
    COMPONENTS --> APPS --> MIDDLEWARES
```

### Diagrama BACKEND
```mermaid
graph TD
    USER["USER\n- UUID\n- conta polkadot ou substrate\n- outros campos relacionados"]
    ROLE["ROLE"]
    SCHEMAS["Schemas para sistemas CMS?"]
    API["API/rotas"]
    CHALLENGES["challenges / JWT"]
    OUTRO["falta algo?"]
    API --> USER
    API --> ROLE
    API --> SCHEMAS
    CHALLENGES --> USER
    CHALLENGES --> ROLE
    CHALLENGES --> SCHEMAS
    OUTRO
```

---

## Tecnologias Propostas
- PostgreSQL
- ORM (Prisma)

## Autenticação
- JWT
- Polkadot API - desafios

---

## Próximos Passos
- Estabelecer o diagrama Mermaid de conexões do sistema
- Definir o banco de dados com PostgreSQL e Prisma
- Definir sistema de papéis e funções protegidas
- Configurar qual endereço de wallet (o do Eduardo) será o super administrador, e só esse endereço terá acesso a todas as funções
- Conectar a wallet e criar usuários com JWT
- Criar dashboards necessários para os user stories e direcionar os usuários para seus papéis correspondentes 