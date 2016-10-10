/*Ejercicio 1: Haz el juego de piedra papel o tijera con 3 turnos
	1. Jugador1 debe ingresar su eleccion
	2.Jugador2 debe ingresar su eleccion
	3. si (jugador1 === 'piedra' || jugador1 === "Piedra" && jugador2 === 'papel' || jugador2==='Papel') {
		Jugador2 es el ganador
	} si (jugador2 === 'piedra' || jugador2 === "Piedra" && jugador1 === 'papel' || jugador1==='Papel') {
		Jugador1 es el ganador
	} si (jugador1 === 'papel' || jugador1 === "Papel" && jugador2 === 'tijera' || jugador2==='Tijera') {
		Jugador2 es el ganador
	} si (jugador2 === 'papel' || jugador2 === "Papel" && jugador1 === 'tijera' || jugador1==='Tijera') {
		Jugador1 es el ganador
	} si (jugador1 === 'tijera' || jugador1 === "Tijera" && jugador2 === 'piedra' || jugador2==='Piedra') {
		Jugador2 es el ganador
	} si (jugador2 === 'tijera' || jugador2 === "Tijera" && jugador1 === 'piedra' || jugador1==='Piedra') {
		Jugador1 es el ganador
	} si (jugador1 === 'tijera' || jugador1 === "Tijera" && jugador2 === 'tijera' || jugador2 === "Tijera") {
		Fue empate
	} si (jugador2 === 'papel' || jugador2 === "Papel" && jugador1 === 'papel' || jugador1 === "Papel") { 
			Fue empate
	} Fue empate
	4. El juego ha terminado
	5.Fin del programa
	*/
	var puntajeFinalJugador1 = 0;
	var puntajeFinalJugador2 = 0;
for (var i=1;i<=3;i++) {
	var jugador1 = prompt("Este es el " + i + "° turno, del juagador 1. Ingresa tu jugada","Piedra=1,Papel=2,Tijera=3");
		jugador1 = Number(jugador1);
	var jugador2 = prompt("Este es el " + i + "° turno, del juagador 2. Ingresa tu jugada","Piedra=1,Papel=2,Tijera=3");
		jugador2 = Number(jugador2);
	if (jugador1 === 1 && jugador2 === 2) {
		alert("Jugador2 es el ganador");
		puntajeFinalJugador2 = puntajeFinalJugador2 + 1;
	} else if (jugador1 === 2 && jugador2 === 1) {
		alert("Jugador1 es el ganador");
		puntajeFinalJugador1 = puntajeFinalJugador1 + 1;
	} else if (jugador1 === 2 && jugador2 === 3) {
		alert("Jugador2 es el ganador");
		puntajeFinalJugador2 = puntajeFinalJugador2 + 1;
	} else if (jugador1 === 3 && jugador2 === 2) {
		alert("Jugador1 es el ganador");
		puntajeFinalJugador1 = puntajeFinalJugador1 + 1;
	} else if (jugador1 === 3 && jugador2 === 1) {
		alert("Jugador2 es el ganador");
		puntajeFinalJugador2 = puntajeFinalJugador2 + 1;
	} else if (jugador1 === 1 && jugador2 === 3) {
		alert("Jugador1 es el ganador");
		puntajeFinalJugador1 = puntajeFinalJugador1 + 1;
	}  else {
		alert("Fue empate");
	}
}
alert("El puntaje final fue jugador1: " + puntajeFinalJugador1 + " puntos, y jugador2: " + puntajeFinalJugador2 + " puntos.");