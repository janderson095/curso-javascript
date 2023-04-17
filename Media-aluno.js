var resultado

function media() {
    let nome = document.getElementById("Nome").value;
    let nota1 = parseFloat (document.getElementById("nota1").value);
    let nota2 = parseFloat (document.getElementById("nota2").value);
    resultado= (nota1 + nota2)/2;
    document.getElementById("resultado").value = resultado;
//     se()
// }

// function se() {
    if (resultado > 7 ) {
    alert("O aluno; "+Nome+" Aprovado");
}

    if (resultado >=5 && resultado <7) {
        alert("Recuperação");
    }

    if (resultado <5) {
        alert("Reprovado");
    }

}



// function calcular(qualquerNome) {
   
//     if (qualquerNome=="media") {
//         media();
//     }
// }



// aluno digita o nome
// nota 1 e nota 2
// fazer uma função p/ calculcar a média 
// fazer uma função p/ verificar se o aluno esta aprovado, nota maior que 7, recuperação 5 e 6 e reprovado abaixo de 5
// app deve informar os resultados com nome dele
