/* Ejercicio 2: Declara un arreglo vacío denominado nombres. 
Pide al usuario tres nombres y almacena esos nombres como elementos arreglo.
 A continuación muestra el contenido en un mensaje.

 1. Ingresa el primer nombre
 2. Ingresa el segundo nombre
 3. Ingresa el tercer nombre
 4. Los nombres que ingresaste fueron:
 5. Fin del programa
 */
 var nombres = [];
 for (var i=0;i<=2;i++) {
 	var nombre = prompt("Ingresa un nombre");
 	nombres.push(nombre);
 }
 alert("Los nombres que ingresaste fueron: " + nombres);