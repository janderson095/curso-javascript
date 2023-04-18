
bomDia()
function bomDia() {
    alert("Bom Dia, Mundoooo !!!");
  }


function calcularCubo() {
    var num = document.getElementById("num").value;
    var cubo = num*num*num;
    document.getElementById("resultado2").innerHTML = ("O cubo de " + num + " é " + cubo);
  }


function converterTemperatura() {
    var tempF = document.getElementById("tempF").value;
    var tempC = (tempF - 32) * 0.5556;
    document.getElementById("resultado3").innerHTML = (tempF + "°F é equivalente a " + tempC + "°C");
  }


  function calcularArea() {
    var base = document.getElementById("base").value;
    var altura = document.getElementById("altura").value;
    var area = (base * altura) / 2;
    document.getElementById("resultado4").innerHTML = ("A área do triângulo é " + area);
  }


function calcularCirculo() {
    var raio = document.getElementById("raio").value;
    var area = (3.1415 * raio * raio ).toFixed(2);
    var perimetro = (2 * 3.1415 * raio).toFixed(2);
    document.getElementById("resultado5").innerHTML = ("A área do círculo é " + area + " e o perímetro é " + perimetro);
  }


function calcularDesconto() {
    var preco = document.getElementById("preco").value;
    var desconto = preco * 0.05;
    document.getElementById("resultado6").innerHTML = ("O desconto de 5% será de R$ " + desconto);
  }


function calcularIdade() {
  var ano = document.getElementById("ano").value;
  var conta = 2023-ano;

  if (conta<=17){
    document.getElementById("resultado7").innerHTML = ("Você tem " + conta + " anos, portanto é menor de idade.")
  }

  if (conta>17) {
    document.getElementById("resultado7").innerHTML = ("Você tem " + conta + " anos, portanto é maior de idade.")
    }
}


  function calcularLitros() {
    var dinheiro = parseFloat(document.getElementById("dinheiro").value);
    var litros = dinheiro / 5;
    var quilometros = litros * 20;
    document.getElementById("litros").innerHTML = ("Você pode comprar " + litros + " litros de combustível.");
    document.getElementById("quilometros").innerHTML = ("Com esse combustível, o carro pode percorrer " + quilometros + " quilômetros.");
  }
