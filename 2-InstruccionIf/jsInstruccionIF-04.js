function mostrar()
{
	var edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad >=13 && edad <=17)
	{
		alert("Usted es adolecente");
	}

	/*if (edad>=13) 
	{
		if(edad<=17)
		{
			alert("Usted es adolecente");
		}
	}*/

}//FIN DE LA FUNCIÓN