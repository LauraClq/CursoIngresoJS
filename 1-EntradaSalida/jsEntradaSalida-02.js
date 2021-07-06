/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	var  nombre; 
	var  mensaje;
	//ingreso 
	nombre = prompt("Ingrese su Nombre", "Harry Paul");
	
	//nombre="alguien";
	//alert("nombre");
	//alert(nombre);
	//alert("Su nombre es:"+nombre); //concatenamos y muestro 
	
	//proceso 
	mensaje="Su nombre es: "+nombre;

	//salida 
	alert(mensaje);
}


