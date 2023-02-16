/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese la clave.");

	while(claveIngresada != "utn750")
	{
		alert ("clave incorrecta \nla clave es : utn750");
		claveIngresada = prompt("ingrese la clave.");
	}
	
	/*do{
		claveIngresada = prompt("ingrese la clave.");
		
	}
	while(claveIngresada != "utn750");*/
	
}//FIN DE LA FUNCIÓN
