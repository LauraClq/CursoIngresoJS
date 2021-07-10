/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var  nombre;
	//var  apellido;
	var  mensaje;

	//
	nombre = prompt("Ingrese su Nombre", "Look Paul");
	//apellido = prompt("Ingrese su Apellido");
	
	mensaje="Su nombre es: "+nombre; //+" y su apellido es: "+apellido;
	//
	document.getElementById('txtIdNombre').value=mensaje;
}
/*
function mostrar()
{
	var nombre;
	var mensaje;

	nombre=prompt("ing su bombnre ");
	mensaje="su nombre es "+nombre;

	document.getElementById('txtIdNombre').value=mensaje;
}
*/
