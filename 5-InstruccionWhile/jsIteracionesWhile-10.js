/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let numeroIngresado;
	let seguir;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferenciaPositivosNegativos;


	contadorPositivos=0;	
	contadorNegativos=0;
	contadorCeros=0;
	contadorPares=0;	
	sumaNegativos=0;
	sumaPositivos=0;
	promedioPositivos=0;
	promedioNegativos=0;
	diferenciaPositivosNegativos=0;
	seguir='si';

	while(seguir !='no')
	{
		numeroIngresado=parseInt(prompt("Ingrese un número"));
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos+numeroIngresado;
			contadorPositivos++;
		}
		else
		{
			if(numeroIngresado<0)
			{
				sumaNegativos=sumaNegativos+numeroIngresado;
				contadorNegativos++;
			}
			else
			{
				contadorCeros++;
			}
		}
		if(numeroIngresado%2==0)
		{
			contadorPares++;
		}
		seguir=prompt("¿Desea continuar?");
	}

	promedioPositivos=sumaPositivos/contadorPositivos;

	promedioNegativos=sumaNegativos/contadorNegativos;
	diferenciaPositivosNegativos=sumaPositivos+sumaNegativos;

	document.write("1-Suma de los negativos: "+sumaNegativos+"<br>");
	document.write("2-Suma de los positivos: "+sumaPositivos+"<br>");
	document.write("3-Cantidad de positivos: "+contadorPositivos+"<br>");
	document.write("4-Cantidad de negativos: "+contadorNegativos+"<br>");
	document.write("5-Cantidad de ceros: "+contadorCeros+"<br>");
	document.write("6-Cantidad de números pares: "+contadorPares+"<br>");
	document.write("7-Promedio de positivos: "+promedioPositivos+"<br>");
	if(!isNaN(promedioNegativos))
	{
		document.write("8-Promedios de negativos: "+promedioNegativos+"<br>");
	}
	document.write("9-Diferencia entre positivos y negativos: "+diferenciaPositivosNegativos+"<br>");
}//FIN DE LA FUNCIÓN