/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{	// declarar variables
	let numeroIngresado;
	let contador;
	let seguir;
	let numeroMaximo;
	let numeroMinimo;
	contador=0;
	seguir='si';
	numeroMaximo=0;
	numeroMinimo=0;
    // recorrer el array
	while(seguir !='no')
	{
		numeroIngresado=parseInt(prompt("Ingrese un número"));
		if(contador==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
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
		contador++;
		seguir=prompt("¿Desea continuar?");
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN