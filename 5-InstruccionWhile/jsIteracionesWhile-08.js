/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let numeroIngresado;
	let contador;
	let seguir;
	let sumaPositivos;
	let multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	seguir='si';



	while(seguir !='no')
    {
        numeroIngresado=parseInt(prompt("Ingrese un número"));
        if(numeroIngresado>0)
        {
            sumaPositivos=sumaPositivos+numeroIngresado;
            contador++;
        }
        else
        {
            multiplicacionNegativos=multiplicacionNegativos*(-1);
            contador++;
        }
        seguir=prompt("¿Desea continuar?");
    }

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos*contador;

}//FIN DE LA FUNCIÓN
