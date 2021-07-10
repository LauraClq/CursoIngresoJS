/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
function mostrarAumento()
{
	var sueldo;
	var porcentajeSueldo;
	var aumento;
	var nuevoSueldo;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseInt(sueldo);

	porcentajeSueldo=prompt("Ingrese el porcentaje ");
	porcentajeSueldo=parseInt(porcentajeSueldo);

	aumento=sueldo*porcentajeSueldo/100;

	nuevoSueldo=sueldo+aumento;

	document.getElementById('txtIdResultado').value=nuevoSueldo;		
}
*/

function mostrarAumento()
{
	var sueldo;
	var aumento;
	var porcentaje;
	var nuevoSueldo;

	sueldo=document.getElementById('txtIdSueldo').value;
	sueldo=parseFloat(sueldo);

	porcentaje=prompt("ingrese su porcentaje");
	porcentaje=parseInt(porcentaje);

	aumento=sueldo*porcentaje/100;
	nuevoSueldo=sueldo+aumento;

	document.getElementById('txtIdResultado').value=nuevoSueldo.toFixed(2);
}