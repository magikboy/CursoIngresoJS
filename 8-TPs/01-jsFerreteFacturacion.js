//Bosco Mascaro Massimo Ariel Div X
function Sumar () 
{
    let precio1;
    let precio2;
    let precio3;
    let suma;

    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio3=parseInt(document.getElementById("txtIdPrecioUno").value);

    suma=(precio1 + precio2 + precio3);

	alert (suma)
}
function Promedio () 
{
	let precio1;
    let precio2;
    let precio3;
    let Promedio;

    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio3=parseInt(document.getElementById("txtIdPrecioUno").value);

    Promedio=(precio1 + precio2 + precio3) / 3;

	alert (Promedio)
}
function PrecioFinal () 
{
	let precio1;
    let precio2;
    let precio3;
    let suma;
    let PrecioFinal;
    let iva;

    precio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio2=parseInt(document.getElementById("txtIdPrecioUno").value);
    precio3=parseInt(document.getElementById("txtIdPrecioUno").value);

    suma=(precio1 + precio2 + precio3);

    iva = (suma * 21 / 100)

    PrecioFinal= (suma + iva )

	alert (preciof)
}