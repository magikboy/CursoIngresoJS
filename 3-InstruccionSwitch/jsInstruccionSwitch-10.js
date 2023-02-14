//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	//declaro las variables
	let destino;
	let estacion;
	let mensaje = "se viaja";

	//tomo su id del html
	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	switch(estacion)
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				mensaje;
			}
		    else 
			{
				alert("no se viaja");
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas")
			{
				mensaje;
			}
			else 
			{
				alert("no se viaja");
			}
			break;
		case "Primavera":
			if (destino == "Bariloche")
			{
				alert("no se viaja");
			}
			else 
			{
				mensaje;
			}
			break
		case "Otoño":	
			mensaje
			break;
	}
	alert (mensaje);
}//FIN DE LA FUNCIÓN