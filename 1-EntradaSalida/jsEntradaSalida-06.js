/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroUno=parseInt(numeroUno); //parsear convertir en algo tipo cadena en numero
	//lo transforma y lo devuelve de nuevo.
	
	numeroDos=document.getElementById('txtIdNumeroDos').value;
	numeroDos=parseInt(numeroDos); //castear converit de un dato numero a otro tipo de numerico
	//podemos tambien capturar el dato convertilo en una sola linea
	
	suma=numeroUno+numeroDos;

	mensaje="El resultado de la suma es "+suma;

	alert(mensaje);
	
}