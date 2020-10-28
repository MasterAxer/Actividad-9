document.getElementById('sumar').onclick=function(){operaciones(1)};
document.getElementById('restar').onclick=function(){operaciones(2)};
document.getElementById('multiplicar').onclick=function(){operaciones(3)};
document.getElementById('dividir').onclick=function(){operaciones(4)};

function operaciones(option)
{
  var resultado = document.getElementById('res');
  var resultado2 = document.getElementById('res2');
  var num1=prompt("Dame el 1er número:");
  var num2=prompt("Dame el 2do número:");

	switch(option)
	{
		case 1:
			var suma = parseInt(num1) + parseInt(num2);
			resultado.innerHTML="La suma de "+ num1 + " + " + num2 + " es igual a: " + suma;
			resultado2.innerHTML="";
			break;
		case 2:
			var resta = parseInt(num1) - parseInt(num2);
			resultado.innerHTML="La resta de "+ num1 + " - " + num2 + " es igual a: " + resta;
			resultado2.innerHTML="";
			break;
		case 3:
			var mult = parseInt(num1) * parseInt(num2);
			resultado.innerHTML="La multiplicación de "+ num1 + " x " + num2 + " es igual a: " + mult;
			resultado2.innerHTML="";
			break;
		case 4:
			var divtion = parseInt(num1) / parseInt(num2);
			resultado.innerHTML="La división de "+ num1 + " ÷ " + num2 + " es igual a: " + divtion;
			resultado2.innerHTML="El sobrante es: " + (parseInt(num1)%parseInt(num2));
			break;
	}
}
