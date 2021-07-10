function mostrar()
{
  var nombreUno;
  var nombreDos;
  var pesoUno;
  var pesoDos;
  var sumaPeso;
  var promedioPeso;

  nombreUno=prompt("Ingrese su nombre: ");
  pesoUno=prompt("Ingrese su peso: ");

  pesoUno=parseInt(pesoUno);

  nombreDos=prompt("Ingrese su nombre: ");
  pesoDos=prompt("Ingrese su peso: ");

  pesoDos=parseInt(pesoDos);

  sumaPeso=pesoUno+pesoDos;

  promedioPeso=sumaPeso/2;
  /*mensaje="Ustedes se llamam ";
	mensaje=mensaje+nombreUno;
	mensaje=mensaje+" y  ";
	mensaje=mensaje+nombreDos;
	mensaje=mensaje+" pesan ";
	mensaje=mensaje+pesoUno;
	mensaje=mensaje+" y ";
  mensaje=mensaje+pesoDos;
  mensaje=mensaje+" kilos que sumados da ";
  mensaje=mensaje+sumaPeso;
  mensaje=mensaje+" y el promedio de peso total es ";
  mensaje=mensaje+promedioPeso;
  */
  //cuando tenemos una oracion larga en el alert puede ser mejor mostrarlo asi 
  //o tambien ponerlo todo en un mensaje y luego mostralo en alert 
  
  mensaje="Ustedes se llamam "+nombreUno+" y "+nombreDos;
  mensaje+=" pesan "+pesoUno+" y "+pesoDos;
  mensaje+=" kilos que sumados da "+sumaPeso+" y el promedio del peso es "+promedioPeso;

  alert(mensaje);

  //alert("Ustedes se llaman "+nombreUno+" y "+nombreDos+" pesan "+pesoUno+" y "+pesoDos+" kilos que sumados son "+sumaPeso+" kilos y el promedio de peso es "+promedioPeso);
}
