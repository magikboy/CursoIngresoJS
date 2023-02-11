//Bosco Mascaro Massimo Ariel Div X
function mostrar()
{
  let edad
  let altura
  let precioMin 
  let precioMax

  precioMin=200
  precioMax=400
  
	altura=parseInt(prompt("ingrese su altura"));

  if(altura < 120)
  {
    alert("usted no puede subirse");
  }
  else
  {
      edad=parseInt(prompt("ingrese su edad"));
    
    
      if(edad <= 18 || edad >= 80)
      {
        alert ("\n usted tiene que pagar " + precioMin);
      }
      else
      {
        alert("\n usted tiene que pagar " + precioMax);
      }
  }
}//FIN DE LA FUNCIÓN		

