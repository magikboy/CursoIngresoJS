/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let numeroIngresado

	numeroIngresado=parseInt(numeroIngresado);

	do
	{
		numeroIngresado=prompt("ingrese un número entre 0 y 9.");
	}
	while(numeroIngresado <0 || numeroIngresado > 9);

	document.getElementById("txtIdNumero").value=numeroIngresado;



	/*let numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));

	
	while(!(numeroIngresado >= 0 || numeroIngresado <= 9))
	{
		numeroIngresado =parseInt(prompt("ingrese un número entre 0 y 9."));
	}
	document.getElementById("txtIdNumero").value=numeroIngresado;*/
}//FIN DE LA FUNCIÓN