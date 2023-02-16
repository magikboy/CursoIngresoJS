/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let sexo

	sexo=parseInt(sexo);

	do
	{
		sexo=prompt("ingrese F de femenino ó M de masculino.");
	}
	while(!(sexo == "F" || sexo == "M" )); // para letras poner "" comillas

	document.getElementById("txtIdSexo").value=sexo;
	
	
}//FIN DE LA FUNCIÓN


/*let sexo;

	sexo = prompt("ingrese f ó m .");

	txtIdSexo.value=sexo;

	while(!(sexo == f || sexo == m))
	{
		sexo =prompt("ingrese f ó m .");
	}
	document.getElementById("txtIdSexo").value=sexo; */
