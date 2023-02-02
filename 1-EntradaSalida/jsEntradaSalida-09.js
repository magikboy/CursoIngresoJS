/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
//Bosco Mascaro Massimo Ariel Div X
function mostrarAumento()
{
    let num1

    num1 =parseFloat(document.getElementById("txtIdSueldo").value);

	resultado= (num1 * 10 / 100 );

	resultado2= (num1 + resultado);

	document.getElementById("txtIdResultado").value=resultado2; //.tofixed(2) para las decimas
}
