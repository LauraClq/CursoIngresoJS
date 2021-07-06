/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var apellido;
	var edad;
	var mensaje;

	apellido=prompt("Ingrese su apellido");

	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;

	//mensaje="Usted se llama "+nombre+" y su apellido es "+apellido+" y tiene "+edad+" años";
	
	
	mensaje="Usted se llama ";
	mensaje=mensaje+nombre;
	mensaje=mensaje+" y su apellido es ";
	mensaje=mensaje+apellido;
	mensaje=mensaje+" y tiene ";
	mensaje=mensaje+edad;
	mensaje=mensaje+" años";


	alert(mensaje);

}

