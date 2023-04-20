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
// const form = document.getElementById("calculadora");
// const resultadoDiv = document.getElementById("resultado");

// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Evita o envio padrão do formulário
//   var num1 = parseFloat(form.num1.value); // Obtém o valor do primeiro número
//   var num2 = parseFloat(form.num2.value); // Obtém o valor do segundo número

//   // Realiza os cálculos
//   var soma = num1 + num2;
//   var subtracao = num1 - num2;
//   var multiplicacao = num1 * num2;
//   var divisao = num1 / num2;

//   // Exibe os resultados na tela
//   resultadoDiv.innerHTML = `
//     <p>Soma: ${soma}</p>
//     <p>Subtração: ${subtracao}</p>
//     <p>Multiplicação: ${multiplicacao}</p>
//     <p>Divisão: ${divisao}</p>
//   `;
// });

