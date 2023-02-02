/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//asigno la variable
	let nombre 

    //lo que hay que escribir con el teclado a la variable
	nombre=prompt("decime tu nombre"); 

    //le asigno a la variable que lo escrito aparesca en la caja  
	document.getElementById("txtIdNombre").value=nombre; 
	
}

