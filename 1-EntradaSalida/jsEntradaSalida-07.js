/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno); //parsear convertir en algo tipo cadena en numero
	
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos); //castear converit de un dato numero a otro tipo de numerico
	//podemos tambien capturar el dato convertilo en una sola linea
	
	suma=numeroUno+numeroDos;

	mensaje="El resultado de la suma es "+suma;

	alert(mensaje);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	resta=numeroUno-numeroDos;

	mensaje="El resultado de la resta es: "+resta;

	alert(mensaje);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicar;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	multiplicar=numeroUno*numeroDos;

	mensaje="El resultado de la multiplicación es: "+multiplicar;

	alert(mensaje);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var dividir;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos);

	dividir=numeroUno/numeroDos;

	mensaje="El resultado del cociente es "+dividir;

	alert(mensaje);	
}

