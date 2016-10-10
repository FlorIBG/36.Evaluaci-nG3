/*EJERCICIO 3
Definir una función que determine si la cadena de texto que se le pasa
como parámetro es un palíndromo, es decir, si se lee de la misma forma
desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
"La ruta nos aporto otro paso natural". */

function darPalindromo (oracion) {
	for (var i=1;i<=oracion.length;i++) {
		if (oracion.length === oracion.length) {
			return alert("Es un palindromo");
		} return alert('No es un palindromo');
	}
}

oracion("La ruta nos aporto otro paso natural");