//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	
	let edad

	let estado

	estado=document.getElementById("estadoCivil").value;
	
	edad=parseInt(document.getElementById("txtIdEdad").value);
	
    if(edad >= 18 && estado != "Casado" && estado != "Divorciado")
	{
		alert("usted es soltero y no es menor");
	}
  

}//FIN DE LA FUNCIÓN