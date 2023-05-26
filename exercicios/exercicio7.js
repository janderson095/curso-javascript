var area = document.getElementById("area");

function entrar() {
  var nome = prompt("Digite o seu nome");
  if (nome == "" || nome == null) {
    alert("Por favor Preencher todos os Campos!");
    area.innerHTML = "Clique no botão para acessar..."
  }

  else {
    area.innerHTML = "Bem-Vindo " + nome
  }
}

function verificarFase() {
  //obtém os valores dos campos de entrada
  let nome = document.getElementById("nome").value;
  let idade = parseInt(document.getElementById("idade").value);

  //verifica a fase da vida baseado na idade informada
  let fase = "";

  if (idade <= 11) {
    fase = "Criança";
  }

  else if (idade >= 12 && idade <= 20) {
    fase = "Adolescente";
  }

  else if (idade >= 21 && idade <= 65) {
    fase = "Adulto";
  }

  else if (idade >= 65) {
    fase = "Idoso";
  }

  //exibe o resultado na div
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `${nome} tem ${idade} anos, e está na fase da vida: ${fase}.`;
}


      //(idade >= 65)