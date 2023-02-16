/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let seguir;
	let contador;
	let acumulador;
	let numeroIngresado;

	contador = 0;

	acumulador = 0;

	seguir = "si"

	while(seguir != "no")
	{
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		acumulador = numeroIngresado + acumulador;
		contador = contador + 1;
		seguir = prompt("quiere seguir?");
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador / contador;

}//FIN DE LA FUNCIÓN