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

    while(seguir=='si')
    {
        numeroIngresado=prompt("Ingrese un numero");
        numeroIngresado=parseInt(numeroIngresado);
        if(numeroIngresado>0)
        {
            sumaPositivos=sumaPositivos+numeroIngresado;
        }
        else
        {
            multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
        }
        contador=contador+1;
        seguir=prompt("Quiere ingresar otro numero?");
    }
    document.getElementById("txtIdSuma").value=sumaPositivos;
    document.getElementById("txtIdProducto").value=multiplicacionNegativos;
    document.getElementById("txtIdContador").value=contador;
}//FIN DE LA FUNCIÓN
