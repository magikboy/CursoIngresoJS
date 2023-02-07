//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	//declaro edad
    let edad

	//tomo edad
	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad <= 12 )
	{
	alert("usted es un niño");
	}
	
	else
	{
		if(edad >= 13 && edad <= 17 )
	{
		alert("usted es un adolecente");
	}

	    else 
		{
          alert("usted es mayor");
		}
	}
	
}//FIN DE LA FUNCIÓN		