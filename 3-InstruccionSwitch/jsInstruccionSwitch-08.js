function mostrar()
{
	let destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case("Ushuaia"):
		case("Bariloche"):
		{
			alert("Hace Frio");
			break
		}
		case("Cataratas"):
		case("Mar del plata"):
		{
			alert("Hace Calor");
		}
	}
}//FIN DE LA FUNCIÓN