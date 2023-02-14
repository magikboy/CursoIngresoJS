//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	//declaro las variables
	let destino
	let estacion 
	let precioFinal
	let descuento = 0;
	let aumento = 0;
	const precio = 15000	

	//tomo su id del html
	estacion = document.getElementById("txtIdEstacion").value
	destino = document.getElementById("txtIdDestino").value

	switch(estacion)
	{
		case "Invierno":
			if (destino == "Bariloche") //creo el caso de invierno bariloche tiene un aumento 
			{
				aumento = 20;
			}
			else if (destino == "Mar del plata")//mardelplata posee un descuento
			{
				descuento = 20;
			}
			else //el resto un descuento del 10%
			{
				descuento = 10;
			}
			break;
		case "Verano":
			if (destino == "Bariloche")//bariloche posee un descuento
			{
				descuento = 20;
			}
			else if (destino == "Mar del plata")//mar del plata tiene un aumento 
			{
				aumento = 20;
			}
			else 
			{
				aumento = 10;
			}
			break;
		case "Primavera":
		case "Otoño":
			if (destino == "Cordoba") //ponemos que tome a cordoba solo por el precio normal
			{
				precioFinal = precio;
			}
			else //el resto con un aumento del 10%
			{
				aumento = 10;
			}
			break;
	}

	if (aumento !=0) //hago las sumas por el aumento para tener el preciofinal
	{
		precioFinal = precio + precio * aumento / 100;
	}
	else if (descuento != 0 ) //hago el resto para tener en cuenta el descuento y asi el preciofinal
	{
		precioFinal = precio - precio * descuento / 100;
	}
	else 
	{
		precioFinal = precio;
	}

	alert ("precio final $" + precioFinal);
}//FIN DE LA FUNCIÓN