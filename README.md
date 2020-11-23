# Teste para candidatos à vaga de Desenvolvedor Backend.

Olá caro desenvolvedor, nesse teste analisaremos seu conhecimento geral e inclusive velocidade de desenvolvimento. Abaixo explicaremos tudo o que será necessário.

## Instruções

Você deve desenvolver uma API, utilizando Node.JS.

A escolha das bibliotecas, banco de dados, arquitetura, etc, fica a seu critério.

O código precisa rodar em Linux (preferencialmente como container Docker).

Altere o arquivo README explicando o que é preciso para rodar sua aplicação.

## API

Precisamos desenvolver uma API para registrar likes.

1. Logar com um usuário
2. Obter um perfil de usuário
3. Dar um like no perfil obtido

Os dados estão em uma base Firebase Firestore com as configurações

```
{
    apiKey: "AIzaSyBQ_lmAHI5kUnOaHUlWMf6VritUZy4elEI",
    authDomain: "g2gdevtest.firebaseapp.com",
    databaseURL: "https://g2gdevtest.firebaseio.com",
    projectId: "g2gdevtest",
    storageBucket: "g2gdevtest.appspot.com",
    messagingSenderId: "604223302864",
    appId: "1:604223302864:web:c9e2845d799d09bf4902d5"
};
```
  
### Segue descrição das features:

#### 1) Login

Precisamos autenticar um usuario através de um POST
com o JSON { "email": "email@usuario.com.br", "pwd": "123456@" } e receber um token JWT confirmando a autenticação. Esse token precisa ter encodado nele o email, um id e o papel do usuário (ROLE). Suponha que o ID do usuário é "2020" e o ROLE = "common".

Sua tarefa como backender é criar um endpoint em node JS para o serviço de autenticação da aplicação. Vamos lá?

Para o teste esse password é apenas um texto plano, sem nenhum tipo de criptografia.

#### 2) Supondo que o modelo de perfil é retornado por um GET em /profiles/123

```
{
    "id": 123
    "name": "Nome perfil",
    "likes": 1
}
```

Deve fazer um GET e obter o perfil de ID 123.

#### 3) Dar um like no perfil obtido

Fazendo um POST /like/123

**Body**

```
{
    "from": 2020,
    "to": 123
}
```

**Response**

Deve retornar o perfil dado like com incremento no campo "likes"

```
{
    "id": 123
    "name": "Nome perfil",
    "likes": 2
}
```

## Entrega

Para iniciar o teste, faça um fork deste repositório, crie uma branch com o seu nome completo e depois envie-nos o pull request. Se você apenas clonar o repositório não vai conseguir fazer push e depois vai ser mais complicado fazer o pull request.

## Nossa análise

- Organização do código, separação de módulos, legibilidade e comentários.
- Histórico de commits.

## Dúvidas?

Quaisquer dúvidas que você venha a ter, consulte as issues para ver se alguém já não a fez e caso você não ache sua resposta, abra você mesmo uma nova issue!

### Boa sorte!



