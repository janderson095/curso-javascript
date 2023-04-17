/*exerciocio 1

function bomDia() {
    alert("Bom dia, Mundo!!!");
  }
*/

/*exercicio 2

function calcularCubo() {
    var num = document.getElementById("num").value;
    var cubo = num*num*num;
    document.getElementById("resultado").innerHTML = ("O cubo de " + num + " é " + cubo);
  }
  */

/*exerciocio 3

function converterTemperatura() {
    var tempF = document.getElementById("tempF").value;
    var tempC = (tempF - 32) * 0.5556;
    document.getElementById("resultado").innerHTML = (tempF + "°F é equivalente a " + tempC + "°C");
  }
  */

/*exercicio 4

  function calcularArea() {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = (base * altura) / 2;
    document.getElementById("resultado").innerHTML = ("A área do triângulo é " + area);
  }
*/

/*exercicio 5

function calcular() {
    var raio = document.getElementById("raio").value;
    var area = 3.1415 * raio * raio;
    var perimetro = 2 * 3.1415 * raio;
    document.getElementById("resultado").innerHTML = ("A área do círculo é " + area + " e o perímetro é " + perimetro);
  }
*/

/*exerciocio 6

function calcularDesconto() {
    var preco = document.getElementById("preco").value;
    var desconto = preco * 0.05;
    document.getElementById("resultado").innerHTML = ("O desconto de 5% será de R$ " + desconto);
  }
*/


//exerciocio 8

  function calcular() {
    var dinheiro = parseFloat(document.getElementById("dinheiro").value);
    var litros = dinheiro / 5;
    var quilometros = litros * 20;
    document.getElementById("litros").innerHTML = ("Você pode comprar " + litros + " litros de combustível.");
    document.getElementById("quilometros").innerHTML = ("Com esse combustível, o carro pode percorrer " + quilometros + " quilômetros.");
  }
 