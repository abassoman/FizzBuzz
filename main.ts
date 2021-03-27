import logica = require('./fizzbuzz');

console.log('Inicia la aplicacion....');

let programa = new logica.Logica.FizzBuzz(undefined, 20);
programa.Proceso();
console.log('El numero inicial es : ' + programa.inicio);
console.log('El numero final es : ' + programa.final);
console.log('El total de casos fue: ' + programa.total);
console.log('El total de FizzBuzz fue: ' + programa.totalFizzBuzz);
console.log('El total de Fizz fue: ' + programa.totalFizz);
console.log('El total de Buzz fue: ' + programa.totalBuzz);
console.log('La suma de los numeros que no muestran nada fue: ' + programa.totalnumeros);

console.log('termina la aplicacion....');