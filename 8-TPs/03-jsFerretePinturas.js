/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//Bosco Mascaro Massimo Ariel Div X
function FahrenheitCentigrados () 
{
	let Fahrenheit
    let cuenta

    Fahrenheit=parseInt(document.getElementById("txtIdTemperatura").value);

    cuenta= ((Fahrenheit - 32)* 5/9).toFixed(1);

    alert("la tempreratura es " + cuenta);
    
}

function CentigradosFahrenheit () 
{
	let centígrados
    let cuenta

    centígrados=parseInt(document.getElementById("txtIdTemperatura").value);

    cuenta= ((centígrados * 9/5) + 32).toFixed(1);

    alert("la tempreratura es " + cuenta);
    
}
