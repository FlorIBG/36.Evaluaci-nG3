/* EJERCICIO 4
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de
JavaScript:
● Objeto Persona con las propiedades nombre, edad y género, y el
método obtDetalles(), que muestra por pantalla las propiedades
de la persona.
● Objeto Estudiante, que hereda de Persona, e incluye las
propiedades curso y grupo y el método registrar().
● Objeto Profesor, que hereda de Persona, e incluye las
propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el
correcto funcionamiento de la jerarquía.
*/

function persona (nombre,edad,genero) {
	this.obtDetalles = function () {
		this.nombre = nombre,
		this.edad = edad,
		this.genero = genero
	}
	this.Estudiante = function (curso,grupo) {
		this.curso = curso,
		this.grupo = grupo
		this.registrar = function () {

		}
	}
	this.Profesor = function (asignatura,nivel) {
		this.asignatura = asignatura,
		this.nivel = nivel
		this.asignar = function () {

		}
	}
} 

var prueba = persona("flor",2,femenino);
var prueba1 = persona.Estudiante("Septimo",3);
var prueba2 = persona.Profesor("matematicas",3);

new 
new 

