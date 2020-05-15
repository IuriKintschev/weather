# WeatherApp

### Preview

<img src="https://raw.githubusercontent.com/IuriKintschev/weather/master/src/assets/gifs/weather.gif" width="250" />

## Objetivo

O intuito do App é consumir uma API que retorna informações climáticas. Nele é possível visualizar a <br> previsão do tempo no período de 7 dias. Ao entrar no App, irá aparecer uma tela de loading, após caregar as <br> informações, será trocado para a tela principal. Caso ocorra algum erro nas consultas ou se não possuir <br> permissão para acessar a localização, uma tela de error sera apresentada.

## Tecnologias

- React Native
- Lottie
- Axios
- Styled Components
  <br><br><br>
- Context API
- Animações After Efects

### O que ocorreu ?

A ideia do App é simples, consumir uma API e apresentar os dados, o maior desafio foi encontrar uma <br>
API de dados climáticos que estaria com um plano gratuito que suprisse a ideia do App. A primeira <br> opção foi o advisor, mas a plataforma estava com problemas no login, outras opções foram averiguadas <br> até que cheguei na HGWeather, desde o começo do desenvolvimento estava suprindo, mas se repararmos <br> não esta trazendo o as informções da minha localidade!, por que? haha tambem não sei, rodando a aplicaçào no android ele trazia para mim as informações de minha cidade, mas em algum momento parou, <br> se repararmos no código está sendo recuperado a localização do usuário e sendo realizado o parse na URL <br> da consulta, mas mesmo assim nào esta retornando mais da API por localidade (provavelmento pode ser a <br> minha chave que expirou, não sei ao certo), infelizmete a API não esta trazendo mais a <br> partir da localidade.

A como a aplicação é simples não faria sentido utilizar redux, redux-saga, ou redux-persist. A context APi <br> do próprio react supriu sem problemas, para persistência foi utilizado o AsyncStorage.

## Como Consigo rodar ?

### Gere a chave para a API

> <b>No site https://hgbrasil.com/status/weather realise o cadastro e gere uma chave gratis, e crie um arquivo .env <br> na raiz do projeto e insira o seguinte conteudo</b>

````
KEY_API=chave-aqui
````
- possue um aquivo .exemple.env se preferir!

<b> Clone o repositório e instale as dependências rodando os seguintes comandos! </b>

> Instale as dependências do node

```
yarn install
```

<br><br>

> Após instale as dependêcias do IOS

```
cd /ios && pod install && cd ..
```
<b>Para o android o link é feito automaticamente!</b>

<br><br>
<b>Certifique-se que esta habilitado o GPS no emulador!</b>
<br>

> Agora bastar subir o servidor bundler e instalar o app

```
yarn run ios
```

- ou se estiver no android

> Certifique-se que o AVD esteja aberto

```
yarn run android
```
