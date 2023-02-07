function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;

	mesDelAño=document.getElementById("txtIdMes").value;

	
	if(mesDelAño ="Enero" && mesDelAño !="Marzo" && mesDelAño !="Julio" && mesDelAño !="Diciembre")
	{
		alert("que comiences bien el año!!!.")
	}

	else
	{
		if(mesDelAño ="Marzo" && mesDelAño !="Julio" && mesDelAño !="Diciembre")
	{
		alert("a clases..");
	}

	    else 
		{
          if(mesDelAño = "Julio" )
		  {
			alert("se vienen las vacaciones!!!.")
		  }
		}
	}




}//FIN DE LA FUNCIÓN