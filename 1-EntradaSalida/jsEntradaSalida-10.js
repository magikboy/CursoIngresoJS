/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
//Bosco Mascaro Massimo Ariel Div X
function mostrarAumento()
{
	let num1

    num1 =parseFloat(document.getElementById("txtIdImporte").value);

	resultado= (num1 * 25 / 100 );

	resultado2= (num1 - resultado);

	document.getElementById("txtIdResultado").value=resultado2;
}
