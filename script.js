/** Organización del código:
 * El código en JS se puede estructurar en las secciones generales:
 * 1. Comentarios de la cabecera.
 * 2. Importación de librerías externas.
 * 3. Importación de módulos locales.
 * 4. Definición de variables globales.
 * 5. Declaración de funciones.
 * 6. Ejecución principal del código, procesos.
 * 7. Resultados. 
 */

// Declaración de variables
// Declaración de variables con var
console.log("Valor de x antes de la declaración:", x); // Salida: undefined
var x = 10;
var x = 20;
console.log("Valor de x después de la declaración:", x); // Salida: 10

// Declaración de variables con let
// console.log("Valor de y antes de la declaración:", y); // Error: y is not defined
let y = 20;
//let y = 30; // Error: y has already been declared
console.log("Valor de y después de la declaración:", y); // Salida: 20

// Declaración de variables con const
console.log("Valor de z antes de la declaración:", z); // Error: z is not defined
const z = 30;
console.log("Valor de z después de la declaración:", z); // Salida: 30

// Elevación de variables con var
console.log("Valor de a antes de la declaración:", a); // Salida: undefined
var a;
a = 40;
console.log("Valor de a después de la declaración:", a); // Salida: 40

// Elevación de variables con let y const
//console.log("Valor de b antes de la declaración:", b); // Error: b is not defined
let b;
b = 50;
console.log("Valor de b después de la declaración:", b); // Salida: 50

//console.log("Valor de c antes de la declaración:", c); // Error: c is not defined
const c = 60;
console.log("Valor de c después de la declaración:", c); // Salida: 60

//TODO
// Ejemplo de operaciones aritmeticas
// Ejemplo de operadores de autoasignación
// Ejemplo de operadores incrementales
// Ejemplo de operadores relacionales
// Ejemplo de operadores lógicos