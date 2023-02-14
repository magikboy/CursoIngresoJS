//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	//declaro las variables
	let destino
	let estacion 

	//tomo su id del html
	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value

	switch(estacion)
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				alert("se viaja");
			}
			else 
			{
				alert("no se viaja");
			}
			break;
		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas")
			{
				alert("se viaja");
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
				alert("se viaja");
			}
			break
		case "Otoño":	
			if (destino == "Cordoba" || destino == "Cataratas" || destino == "Mar del plata" || destino == "Bariloche")
			{
				alert ("se viaja");
			}
			break;
	}
}//FIN DE LA FUNCIÓN