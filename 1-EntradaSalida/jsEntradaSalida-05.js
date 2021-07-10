/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*
function mostrar()
{	
	var nombre;
	var apellido;
	var edad;
	var mensaje;

	//el promp simepre tiene igual y tiene una vventada emerggente para ingresar datos||
	apellido=prompt("Ingrese su apellido");

	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	//mensaje="Usted se llama "+nombre+" y su apellido es "+apellido+" y tiene "+edad+" años";
	//docuemnt.getElementById('idExistente').value="la altura es " + altura;
	//otra forma de mostrar
	
	mensaje="Usted se llama ";
	mensaje=mensaje+nombre;
	mensaje=mensaje+" y su apellido es ";
	mensaje=mensaje+apellido;
	mensaje=mensaje+" y tiene ";
	mensaje=mensaje+edad;
	mensaje=mensaje+" años";

	//salida de datos - ventana emergente
	alert(mensaje);
}*/

function mostrar()
{
	var nombre;
	var apellido;
	var edad;
	var mensaje;

	apellido=prompt("inng su apellido ");

	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	mensaje="Usted se llama "+nombre+" y su apellido ";
	mensaje+=apellido+" y tiene "+edad+" añios";

	alert(mensaje);
}

