# Movie Night - Node.JS Workshop

Hacking Websites with Node.js. Taller por el equipo de tecnología de  © [Reservamos.mx](https://www.reservamos.mx). Para efectos de este workshop cuando hablamos de Javascript nos referimos a [EcmaScript 6 o ES6 6](https://github.com/lukehoban/es6features).

## Requisitos

* [Git](https://git-scm.com/downloads)
* [Node.JS](https://nodejs.org/en/download/) ~ 8.0

## Instalar

1. Clonar o bajar el repositorio
2. Dentro del folder del repositorio correr: `npm install`

## Correr el servidor

`npm run start`

## Hackear código

`npm run hack`

## Antes de empezar

Algunas cosas que hay servirán durante el workshop:

```javascript
// 1. Javascript is a dynamic language. So no types
const name = "Adrian Cuadros"
let age = 32

// 2. Short function declaration
const saySomething = (something) => {
  console.log(`You said: ${something}`);
}

saySomething("Hi!")

// 3. Javascript Objects
const fruit = {
  name: 'Apple',
  color: 'red'
};
console.log(`${fruit.name} (${fruit.color})`);

// 4. Arrays and array functions
const fruits = [
  { name: 'Apple', color: 'red' },
  { name: 'Orange', color: 'orange' },
  { name: 'Lemon', color: 'green' }
];

fruits.forEach((fruit) => {
  console.log(fruit.name);
});

let firstGreenFruit = fruits.find((fruit) => {
  return fruit.color === 'green';
});
console.log(firstGreenFruit.name);

// 5. Promises
let promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

promise.then(() => {
  saySomething("Ready!");
}, () => {
  saySomething("Oh no!");
});
```

## Herramientas y conceptos

* Servidor Web con [Express](https://expressjs.com/)
* Templates Html/Javascript con [Handlebars](https://handlebarsjs.com/)
* Requests HTTP con [Axios](https://github.com/axios/axios)
* Pruebas de Requests HTTP con [Postman](https://www.getpostman.com/)
* Uso de ES6 a través de [Babel](https://babeljs.io/)

## Bonus

* [Curso de Reservamos en ES6](https://github.com/reservamos/training)
* [Más acerca de promesas](https://codeburst.io/javascript-promises-explained-with-simple-real-life-analogies-dd6908092138)

## Prácticas en Reservamos ?

Escríbenos a hola@reservamos.mx con cualquier información que tengas para compartirnos (Sobre ti, código, un intro, etc.).
