//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	mesDelAño=document.getElementById("txtIdMes").value;

	switch (mesDelAño)
	{
		case "Enero":
			{
				alert ("que comiences bien el año!!!.");
				break;
			}
			case "Marzo":
			{
				alert ("a clases!!!.");
				break;
			}
			case "Julio":
			{
				alert ("se vienen las vacaciones!!!.");
				break;
			}
			case "Diciembre":
			{
				alert ("Felices fiestas!!!.");
				break;
			}		
	}
}//FIN DE LA FUNCIÓN