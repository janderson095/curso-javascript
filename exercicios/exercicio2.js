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

function subtrairAB(){

    let arrayA = new Array(10);
    arrayA[0] = parseInt(document.getElementById("numero1").value);
    arrayA[1] = parseInt(document.getElementById("numero2").value);
    arrayA[2] = parseInt(document.getElementById("numero3").value);
    arrayA[3] = parseInt(document.getElementById("numero4").value);
    arrayA[4] = parseInt(document.getElementById("numero5").value);
    arrayA[5] = parseInt(document.getElementById("numero6").value);
    arrayA[6] = parseInt(document.getElementById("numero7").value);
    arrayA[7] = parseInt(document.getElementById("numero8").value);
    arrayA[8] = parseInt(document.getElementById("numero9").value);
    arrayA[9] = parseInt(document.getElementById("numero10").value);
    console.log(arrayA);
    
    
    let arrayB = new Array(10);
    arrayB[0] = parseInt(document.getElementById("numero11").value);
    arrayB[1] = parseInt(document.getElementById("numero12").value);
    arrayB[2] = parseInt(document.getElementById("numero13").value);
    arrayB[3] = parseInt(document.getElementById("numero14").value);
    arrayB[4] = parseInt(document.getElementById("numero15").value);
    arrayB[5] = parseInt(document.getElementById("numero16").value);
    arrayB[6] = parseInt(document.getElementById("numero17").value);
    arrayB[7] = parseInt(document.getElementById("numero18").value);
    arrayB[8] = parseInt(document.getElementById("numero19").value);
    arrayB[9] = parseInt(document.getElementById("numero20").value);
    console.log(arrayB);
    
    let arrayC = new Array(10)
    arrayC[0] = (arrayA[0] - arrayB[0]);
    arrayC[1] = (arrayA[1] - arrayB[1]);
    arrayC[2] = (arrayA[2] - arrayB[2]);
    arrayC[3] = (arrayA[3] - arrayB[3]);
    arrayC[4] = (arrayA[4] - arrayB[4]);
    arrayC[5] = (arrayA[5] - arrayB[5]);
    arrayC[6] = (arrayA[6] - arrayB[6]);
    arrayC[7] = (arrayA[7] - arrayB[7]);
    arrayC[8] = (arrayA[8] - arrayB[8]);
    arrayC[9] = (arrayA[9] - arrayB[9]);



    document.getElementById("resultado1").value = arrayC[0];
    document.getElementById("resultado2").value = arrayC[1];
    document.getElementById("resultado3").value = arrayC[2];
    document.getElementById("resultado4").value = arrayC[3];
    document.getElementById("resultado5").value = arrayC[4];
    document.getElementById("resultado6").value = arrayC[5];
    document.getElementById("resultado7").value = arrayC[6];
    document.getElementById("resultado8").value = arrayC[7];
    document.getElementById("resultado9").value = arrayC[8];
    document.getElementById("resultado10").value = arrayC[9];

}