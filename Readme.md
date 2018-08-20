# Movie Night - Node.JS Workshop

Hacking Websites with Node.js. Taller por el equipo de tecnología de  © [Reservamos.mx](https://www.reservamos.mx).

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
const name = "Adrian Cuadros";
let age = 32;

// 2. Short function declaration
const saySomething = (something) => {
  console.log(`You said: ${something}`);
}

saySomething("Hi!");

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
var promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000);
});

promise.then(() => {
  saySomething("Ready!");
}, () => {
  saySomething("Oh no!");
});
```
