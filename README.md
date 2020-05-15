# WeatherApp

## Objetivo

O intuito do App é consumir uma API que retorna informacoes climaticas. Nele é possivel visualizar a <br> previsão do tempo no periodo de 7 dias. Ao entrar no App, ira aparecer uma tela de loading, após caregar as <br> informações sera trocado para a tela principal. Caso ocorra algum erro nas consultas ou nao se não possuir <br> permissão para acessar a localização, uma tela de error sera apresentada.

## Tecnologias

- React Native
- Lottie
- Axios
- Styled Components
  <br><br><br>
- Context API
- Animações After Efects

### O que ocorreu ?

A ideia do App é simples, condumir uma API e apreentar os dados, o maior desafio foi encontrar uma <br>
API de dados climaticos que estaria com um plano gratuito que supreice a ideia do App. A primeira <br> opção foi o advisor, mas a plataforma estava com problemas no login, outras opções foram averiguadas <br> ate que cheguei na HGWeather, desde o começo do desenvolvimento estava suprindo, mas se repararmos <br> nao esta trazendo o as informçoes da minha localidae!, porque ? haha tambem não sei, rodando a aplicaçao no android ele trazia para mim as informções de minha cidade, mas apartir de um tempo parou, <br> se repararmos no codigo esta sendo recuperado a localizaçao do usuario e sendo realizado o parse na URL <br> daconsulta, mas mesmo assim nao esta retornando mais da API por localidade(provavelmento pode ser a <br> minha chave que expirou, não sei ao certo), infelizmete a API não esta trazendo mais a <br>partir da localidade.

A como a aplicação é simples não faria sentido utilizar redux, redux-saga, ou redux-persist. A context APi <br> do proprio react supriu sem problemas, para persistencia foi utilizado o AsyncStorage.

## Como Consigo rodar ?

<b> Clone o repositorio e intale as dependencias rodan os seguintes comandos! </b>

> Instale as dependencias do node

```
yarn install
```

<br><br>

> Apos instale as dependecias do IOS

```
cd /ios && pod install && cd ..
```

<br><br>

<b>Para o android o link é feito automaticamente!</b>

> Agora bastar subir o servidor bundler e instalar o app

```
yarn run ios
```

- ou se estiver no android
> Certifiquece que o AVD esteja aberto

```
yarn run android
```
