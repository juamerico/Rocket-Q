### Sobre o projeto
O objetivo da aplicação é a interação entre os usuários através de perguntas, que podem ser marcadas como lidas e excluídas por um adminstrador da sala.\
A aplicação foi desenvolvida utilizando um banco de dados SQLite que armazena informações referentes às informações da pergunta, o número da sala e também às senhas criadas pelo usuário.

#### Instalação das dependências
É preciso instalar os seguintes módulos para que a aplicação funcione:
- Express:\
`npm install express`
- EJS:\
`npm install ejs`
- SQLite:\
`npm install sqlite`
e também:\
`npm install sqlite3`


#### Inicialização da aplicação
Para inicializar o banco de dados execute o comando:\
`npm run init-db`

Em seguida, para inicializar o servidor execute o comando:\
`npm start`

#### Layout
O layout inicial do projeto foi baseado [neste projeto](https://www.figma.com/file/vp3iFfd1ohCbHyDX9jCiQi/Roquet.q-%2302?node-id=0%3A1).\
Para alternar entre o modo noturno e o original, basta clicar no ícone de lua no canto superior direito.\
O projeto conta com versões mobile e tablet, adequeadas para telas de diferentes tamanhos.

#### Tecnologias utilizadas
- HTML
- CSS
- JavaScript
- NodeJS
- Express
- EJS
- SQLite
