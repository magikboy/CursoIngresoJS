//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let mes=txtIdMes.value;

	mes=document.getElementById("txtIdMes").value;

	switch (mes)
	{
		case "Febrero":
			{
				alert (" Este mes no tiene más de 29 días.");
				break;
			}
			default:
			{
				alert ("Este mes tiene 30 o más días");
				break;
			}
	}
}//FIN DE LA FUNCIÓN