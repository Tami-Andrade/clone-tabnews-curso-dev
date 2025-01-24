# clone-tabnews-curso-dev

Repo para estudo no [curso.dev](https://curso.dev/) do [Filipe Deschamps](https://github.com/filipedeschamps).

## Projeto

O projeto é a construção de uma réplica do [TabNews](https://www.tabnews.com.br/)

## Dependências

- `nodejs` `lts/hydrogen`
- `next@13.1.6`
- `react@18.2.0`
- `react-dom@18.2.0`

## Variáveis de ambiente

Crie o arquivo de variáveis de ambiente na raiz do repositório para subir o banco de dados localmente.
`POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=local_user
POSTGRES_DB=local_db
POSTGRES_PASSWORD=local_password`

### Breve descrição

- Node.js: Coração do servidor, executando o JavaScript.
- Next.js: Construindo a aplicação web com recursos avançados.
- React e React DOM: Criando a interface do usuário.

### Como funcionam juntos:

- Node.js: Inicia o servidor e executa o código Next.js.
- Next.js: Gerencia as requisições, renderiza as páginas e fornece um ambiente para o React funcionar.
- React: Cria componentes reutilizáveis que são renderizados pelo React DOM no navegador.

## Links

- Repo do [LuizBarel](https://github.com/LuizBarel/clone-tabnews) que vem documentando a explicação detalhada para cada arquivo do projeto.
