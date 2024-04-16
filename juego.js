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
let numero1, numero2, nombre;

// Solicitar al usuario que ingrese el nombre
nombre = prompt("Por favor, ingresa tu nombre:");

// Solicitar al usuario que ingrese los números
numero1 = parseFloat(prompt("Ingresa el primer número:"));
numero2 = parseFloat(prompt("Ingresa el segundo número:"));

// Calcular la suma de los números
let suma = numero1 + numero2;

// Mostrar saludo, números ingresados y suma en el navegador
alert("¡Hola, " + nombre + "! Bienvenido/a.");
alert("Los números que ingresaste son: " + numero1 + " y " + numero2);
alert("La suma de los números es: " + suma);
