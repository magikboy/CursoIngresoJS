//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;

	contador = 0;

	acumulador = 0;

	while(contador < 5)
	{
		numeroIngresado=parseInt(prompt("ingrese un numero"));
		acumulador =numeroIngresado + acumulador;
		contador = contador + 1;
	}

	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador / 5;
}//FIN DE LA FUNCIÓN

/*
let suma;
    let promedio;
	let numeroIngresado = 0;
	let numero1;
	let numero2;
	let numero3;
	let numero4;
	let numero5;

	numeroIngresado=parseInt(numeroIngresado);

	numero1=parseInt(prompt("ingrese un número"));
	numero2=parseInt(prompt("ingrese un número"));
	numero3=parseInt(prompt("ingrese un número"));
	numero4=parseInt(prompt("ingrese un número"));
	numero5=parseInt(prompt("ingrese un número"));

	do
	{
		numeroIngresado=prompt("ingrese un número");
	}
	while(numeroIngresado < 5);

	suma = numero1 + numero2 + numero3 + numero4 + numero5;

	promedio = suma / 5;

	document.getElementById("txtIdSuma").value=suma;
	document.getElementById("txtIdPromedio").value=promedio; */