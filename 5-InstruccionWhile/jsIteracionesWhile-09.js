/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let numeroIngresado;
	let seguir;
	let numeroMaximo;
	let numeroMinimo;
	let banderaDelPrimero;
	banderaDelPrimero=0;
	seguir='si';
	
	while(seguir=='si')
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);
		if(banderaDelPrimero==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			banderaDelPrimero=1;
		}
		else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		seguir=prompt("Quiere ingresar otro numero?");
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN