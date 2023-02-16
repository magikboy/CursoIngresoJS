/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");	
	let i = 0
	
	while(i >= 0 || i <= 9)
	{
		document.getElementById("txtIdNumero").value=numeroIngresado;
		break;	
	}
}//FIN DE LA FUNCIÓN