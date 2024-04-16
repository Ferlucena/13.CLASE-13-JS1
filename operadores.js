/* Operadores en JS */
 /* Utilizaremos los operadores en JS 
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
document.write("<h2>Operadores de autoasignación</h2>");
document.write("<h3>Operadores de autoasignación +</h3>");
document.write(`La variable a vale: ${a}</br>`);
a += 2;
document.write(`Valor de a después de hacer a+=2: ${a}`);

document.write("<h3>Operador de autoasignación -</h3>");
document.write(`La variable b vale: ${b}</br>`);
b -= 1; // Equivalente a: b = b - 1;
document.write(`Valor de b después de autoasignación: ${b}`);

// Ejemplo de operadores incrementales
document.write("<h2>Operadores incrementales</h2>");
document.write("<h3>Operador de incremento unitario ++</h3>");
document.write(`La variable c vale: ${c}</br>`);
c++; // Incrementa c en 1
document.write(`Valor de c después del incremento: ${c}`);

document.write("<h2>Operador decremental</h2>");
document.write("<h3>Operador de decremento unitario --</h3>");
document.write(`La variable d vale: ${d}</br>`);
d--; // Decrementa d en 1
document.write(`Valor de d después del decremento: ${d}`);

// Ejemplo de operadores relacionales
document.write("<h2>Operadores relacionales</h2>");
document.write(`¿a > b? = ${a > b}</br>`);
document.write(`¿c <= d? = ${c <= d}</br>`);
document.write(`¿a === c? (comparando tipo y valor) = ${a === c}`);

// Ejemplo de operadores lógicos
// Declaración de las variables
let v = true;
let f = false;

document.write("<h2>Operadores lógicos</h2>");
document.write(`La variable v vale: ${v}</br>`);
document.write(`La variable f vale: ${f}</br>`);
document.write(`v AND f: ${v && f}</br>`);
document.write(`v OR f : ${v || f}</br>`);
document.write(`NOT v : ${!v}</br></br></br>`);