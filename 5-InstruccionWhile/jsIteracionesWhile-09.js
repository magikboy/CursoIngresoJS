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
	let bandera;
	bandera=true;;
	seguir="si";
	
	while(seguir=="si")
	{
		numeroIngresado=parseFloat(prompt("Ingrese un numero"));

		if(bandera== true || numeroIngresado>numeroMaximo)
		{
			numeroMaximo=numeroIngresado;
		}
		else(bandera== true || numeroIngresado<numeroMinimo)
		{
			numeroMinimo=numeroIngresado;
			bandera=false;
		}
		seguir=prompt("Quiere ingresar otro numero?");
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN