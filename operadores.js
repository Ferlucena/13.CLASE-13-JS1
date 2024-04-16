/** Operadores en JS 
 * Utilizaremos los operadores en JS 
 * desarrollando los siguientes ejemplos:
 * Ejemplo de operaciones aritmeticas
 * Ejemplo de operadores de autoasignación
 * Ejemplo de operadores incrementales
 * Ejemplo de operadores relacionales
 * Ejemplo de operadores lógicos
*/

// Declaración de variables
let a = 5;
let b = 3;
let c = 10;
let d = 2;

// Ejemplo de operaciones aritméticas
document.write("<h3>Operadores artiméticos</h3>");
document.write(`Suma: ${a + b}</br>`);
document.write(`Resta: ${c - a}</br>`);
document.write(`Multiplicación: ${b * d}</br>`);
document.write(`División: ${c / d}</br>`);
document.write(`Módulo: ${c % a}</br>`);

// Ejemplo de operadores de autoasignación
 // Equivalente a: a = a + 2;
document.write("<h3>Operadores de autoasignación</h3>");
document.write(`la variable a vale: ${a}</br>`);
a += 2;
document.write(`Valor de a después de hacer a+=2: ${a}`);

b -= 1; // Equivalente a: b = b - 1;
console.log(`Valor de b después de autoasignación: ${b}`);

// Ejemplo de operadores incrementales
c++; // Incrementa c en 1
console.log(`Valor de c después del incremento: ${c}`);

d--; // Decrementa d en 1
console.log(`Valor de d después del decremento: ${d}`);

// Ejemplo de operadores relacionales
console.log(`¿a es mayor que b? ${a > b}`);
console.log(`¿c es menor o igual que d? ${c <= d}`);
console.log(`¿a es igual a c? ${a === c}`);

// Ejemplo de operadores lógicos
let verdadero = true;
let falso = false;

console.log(`AND lógico: ${verdadero && falso}`);
console.log(`OR lógico: ${verdadero || falso}`);
console.log(`NOT lógico: ${!verdadero}`);s