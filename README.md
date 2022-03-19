## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Como Instalar](#instalar)
- [Contribuições](#contribuir)

<a id="sobre"></a>

## Sobre

Este é um teste para dev fullstack na Probono, onde é possivel buscar o clima de uma cidade, e de acordo com o clima sugerir atividades 
disponibilzando fotos de exemplo.

<a id="tecnologias"></a>

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias.

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)

<a id="instalar"></a>

## Como Instalar

- ### **Pré-requisitos**

  - Primeiro você **precisa** ter o **[Node.js](https://nodejs.org/en/)** instalado em sua  máquina.
  - Também é **preciso** ter um gerenciador de pacotes: **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça o clone do projeto :

```sh
  $ git clone https://github.com/IdenilsonSantos/probonodev.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ npm install

  ## Banco de dados
  Para o banco de dados utilizei o mongoDB, atráves do mongoose 
  podendo ser editado no seguinte diretório.
  $ cd backend/src/config/database.js

  # Inicie a API
  $ npm run dev

  Para fins de deploy utilize
  $ npm start

  # Endpoints
  Os seguintes endpointes são referentes ao backend:
  
  POST - /login, para logar o usuario, padrao:
  email: test45@gmail.com
  senha: 123456
  POST - /register, para criar um usuario

  GET - /activity/city, para buscar atividades de acordo com o tempo
  enviando na query pelo campo city_name.
  GET - /activity/user/save, para buscar atividades de acordo com o tempo e salvar no banco de dados 
  atrelando ao usuario logado enviando na query pelo campo city_name.
  GET - /activities/last, para buscar as atividades salvas do usuario logado.

  $ npm start
```

<a id="contribuir"></a>

## Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## License

Esse projeto está sob a licença MIT.
