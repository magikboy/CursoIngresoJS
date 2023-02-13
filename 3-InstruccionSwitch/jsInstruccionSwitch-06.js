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
		case(12):
		case(13):
		case(14):
		case(15):
		case(16):
		case(17):
		case(18):
		case(19):
		{
			alert("es de tarde");
			break
		}
		case(20):
		case(21):
		case(22):
		case(23):
		case(24):
		case(1):
		case(2):
		case(3):
		case(4):
		case(5):
		case(6):
			{
				alert("es de noche");
				break
			}
	    default:
			alert("no es una hora valida")
	}

	//forma alterna
/*
	if (horaDelDia >= 7 && horaDelDia <= 11)
	{
		alert ("es de mañana");
	}
	if(horaDelDia >= 12 && horaDelDia <= 19 )
	{
	alert("es de tarde");
	}
	else
	{
		if(horaDelDia >= 20 && horaDelDia <= 24 )
	{
		alert("es de noche");
	}

	    else 
		{
         if(horaDelDia >= 1 && horaDelDia <= 6)
		 {
			alert("es de noche")
		 }
		}
		if(horaDelDia >= 25)
		{
			alert ("hora no valida")
		}
	}
*/
	
    

}//FIN DE LA FUNCIÓN