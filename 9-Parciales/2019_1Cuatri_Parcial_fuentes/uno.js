
function mostrar()
{
	var tresLados;
	var perimetro;

	/*var ladoDos;
	var ladoTres;
	var perimetro;

	ladoUno=prompt("Ingrese el primer lado del equilatero ");
	ladoUno=parseInt(ladoUno);

	ladoDos=prompt("Ingrese el segundo lado del equilatero ");
	ladoDos=parseInt(ladoDos);

	ladoTres=prompt("Ingrese el terccer lado del equilatero ");
	ladoTres=parseInt(ladoTres);

	perimetro=ladoUno+ladoDos+ladoTres;*/

	tresLados=prompt("Ingrese un lado del equilatero ");
	tresLados=parseFloat(tresLados);

	perimetro=tresLados*3;

	alert("El perimetro del equilatero es: "+perimetro.toFixed(1));
}
