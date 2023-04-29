let nome = [];
let idade = [];


function calcular() {
   nome = document.getElementById("nome").value;
   idade = parseInt.getElementById("idade").value;
  
   

    if (idade<= 11 ) {
        alert("O "+nome+" é uma Criança");
    }
    
    else if(resultado >=12 && resultado <20) {
            alert("O "+nome+" é um Adolescente");
    }
    
    else if(resultado >=21 && resultado <65) {
        alert("O "+nome+" é um Adulto");
    }

    else if(resultado >65) {
        alert("O "+nome+" é um Idoso");
    }

}
