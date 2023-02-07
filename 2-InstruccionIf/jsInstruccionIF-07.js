//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	
	let edad

	let estado

	estado=document.getElementById("estadoCivil").value;
	
	edad=parseInt(document.getElementById("txtIdEdad").value);
	
    if(edad < 18 && estado != "Soltero")
	{
		alert("usted es muy chico para NO ser soltero");
	}
  

}//FIN DE LA FUNCIÓN