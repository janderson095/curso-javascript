var area = document.getElementById("area");
function entrar(){
    var nome = prompt("Digite o seu nome");
    if(nome=="" || nome==null){
        alert("Por favor Preencher todos os Campos!");
        area.innerHTML = "Clique no botão para acessar..."
    }

    else{
        area.innerHTML = "Bem-Vindo " +nome
    }
}

// exercicio 1
const form = document.getElementById("calculadora");
const resultadoDiv = document.getElementById("resultado");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o envio padrão do formulário
  var num1 = parseFloat(form.num1.value); // Obtém o valor do primeiro número
  var num2 = parseFloat(form.num2.value); // Obtém o valor do segundo número

  // Realiza os cálculos
  var soma = num1 + num2;
  var subtracao = num1 - num2;
  var multiplicacao = num1 * num2;
  var divisao = num1 / num2;

  // Exibe os resultados na tela
  resultadoDiv.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
});

// exercicio 2

var arrayA = new Array (20);
arrayA[0] = 52465346;
arrayA[1] = 654;
arrayA[2] = 34534;
arrayA[3] = 734;
arrayA[4] = 23467;
arrayA[5] = 09865679;
arrayA[6] = 9879567;
arrayA[7] = 43567654;
arrayA[8] = 31345;
arrayA[9] = 657658;
arrayA[10] = 123;
arrayA[11] = 415135;
arrayA[12] = 6161;
arrayA[13] = 36453;
arrayA[14] = 54367;
arrayA[15] = 3467345;
arrayA[16] = 324234;
arrayA[17] = 234623325;
arrayA[18] = 62365;
arrayA[19] = 12345356;

var arrayB = new Array (20);
arrayB[0] = 5246;
arrayB[1] = 65;
arrayB[2] = 344;
arrayB[3] = 74;
arrayB[4] = 237;
arrayB[5] = 679;
arrayB[6] = 9867;
arrayB[7] = 43567;
arrayB[8] = 315;
arrayB[9] = 5758;
arrayB[10] = 13;
arrayB[11] = 135;
arrayB[12] = 611;
arrayB[13] = 353;
arrayB[14] = 567;
arrayB[15] = 3445;
arrayB[16] = 3234;
arrayB[17] = 2623325;
arrayB[18] = 665;
arrayB[19] = 123453;

var arrayC = new Array(20);
arrayC = arrayA[0]-arrayB[0]