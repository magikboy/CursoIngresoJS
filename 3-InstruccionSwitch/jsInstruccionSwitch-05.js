//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	//tomo la hora
	let horaDelDia =txtIdHora.value;

	horaDelDia=parseInt(document.getElementById("txtIdHora").value);

	switch(horaDelDia)
	{
		case(7):
		case(8):
		case(9):
		case(10):
		case(11):
		{
			alert("es de mañana");
			break
		}	
	}
}//FIN DE LA FUNCIÓN