/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

//%sirve para sacar el resto de una división o los numeros primeros 
//o multiplos - la criptomonedas se una esto para encontra nuemross primos qeu se saca del modulo
//resto=uno%dos

function SacarResto()
{
	var numeroUno;
	var numeroDos;
	var resto;
	var mensaje;

	numeroUno=document.getElementById('txtIdNumeroDividendo').value;
	numeroUno=parseInt(numeroUno);

	numeroDos=document.getElementById('txtIdNumeroDivisor').value;
	numeroDos=parseInt(numeroDos);      

	resto=numeroUno%numeroDos;

	mensaje="El resto es: "+resto;       

	alert(mensaje);
}
