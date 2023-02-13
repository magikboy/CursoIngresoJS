//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let mes =txtIdMes.value;

	mes=document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Febrero":
			{
				alert ("si tiene 28 dias");
				break;
			}
			case "Enero":
			case "Marzo":
			case "Mayo":
			case "Octubre":
			case "Julio":
			case "Agosto":	
			case "Diciembre":
			{
				alert ("si tiene 31 dias");
				break;
			}	
			default :
			case "Junio":
			case "Noviembre":
			case "Septiembre":
			case "Abril":
			{
				alert ("si tiene 30 dias");
				break;
			}	
				
	}
}//FIN DE LA FUNCIÓN