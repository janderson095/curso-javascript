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



// var notas = new Array(5);
// notas[0] = 8.5;
// notas[1] = 5.0;
// notas[2] = 10.0;
// notas[3] = 9.0;
// notas[4] = 4.5;
// document.write("Notas: "+ notas[0] +", "+ notas [1] +" e "+notas[2] +" <br>");


// // media = notas[0]+notas[1]+notas[2]+notas[3]+notas[4]/4

// var diaSemana = new Array(7);
// diaSemana[0] = "Domingo";
// diaSemana[1] = "Segunda-Feira";
// diaSemana[2] = "Terça-Feira";
// diaSemana[3] = "Quarta-Feira";
// diaSemana[4] = "Quinta-Feira";
// diaSemana[5] = "Sexta-Feira";
// diaSemana[6] = "Sábado";
// document.write("Hoje é: "+ diaSemana[1] +" ou "+ diaSemana[2] +" ou "+ diaSemana[3] +" ?? <br>");


// var diaSemana1 = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado");
// document.write("Na semana seguinte teremos aula da Google na "+diaSemana1[3]+" e "+diaSemana1[4]+" ");




// Ler 5 elementos de um array, chama-lo de arrayA. Construir um array chamado arrayB de mesmo tipo, observando a seguintes lei de formação: “Todo elemento de B deverá ser o quadrado do elemento de A correspondente”. Apresentar os dois arrays A e B.

// Ler dois arrays A e B com 5 elementos cada. Construir um  arrayC, sendo esta a junção dos dois outros arrays. Desta forma, C deverá ter o dobro de elementos, ou seja, 10.Apresentar o array C.

// Ler duas matrizes do tipo vetor, sendo A com 5 elementos e B com 6 elementos. Construir uma matriz C, sendo esta a junção das duas outras matrizes. Desta forma, C deverá ter a capacidade de armazenar 11 elementos. Apresentar a matriz C.

// var arrayA = new Array(5);
// arrayA[0] = parseInt(prompt("Digite o item 1"));
// arrayA[1] = parseInt(prompt("Digite o item 2"));
// arrayA[2] = parseInt(prompt("Digite o item 3"));
// arrayA[3] = parseInt(prompt("Digite o item 4"));
// arrayA[4] = parseInt(prompt("Digite o item 5"));
// console.log(arrayA);

// var arrayB = new Array(5);
// arrayB[0] = Math.pow(arrayA[0], 2);
// arrayB[1] = Math.pow(arrayA[1], 2); 
// arrayB[2] = Math.pow(arrayA[2], 2);
// arrayB[3] = Math.pow(arrayA[3], 2);
// arrayB[4] = Math.pow(arrayA[4], 2);
// document.write(" "+arrayB[0]+" "+arrayB[1]+" "+arrayB[2]+" "+arrayB[3]+" "+arrayB[4] );





// var arrayC = new Array(5);
// arrayC[0] = parseInt(prompt("Digite o item 1 de C"));
// arrayC[1] = parseInt(prompt("Digite o item 2 de C"));
// arrayC[2] = parseInt(prompt("Digite o item 3 de C"));
// arrayC[3] = parseInt(prompt("Digite o item 4 de C"));
// arrayC[4] = parseInt(prompt("Digite o item 5 de C"));
// console.log(arrayC);

// var arrayD = new Array(5);
// arrayD[0] = parseInt(prompt("Digite o item 1 de D"));
// arrayD[1] = parseInt(prompt("Digite o item 2 de D"));
// arrayD[2] = parseInt(prompt("Digite o item 3 de D"));
// arrayD[3] = parseInt(prompt("Digite o item 4 de D"));
// arrayD[4] = parseInt(prompt("Digite o item 5 de D"));
// console.log(arrayD);

// var arrayF = new Array(10)
// arrayF[0] = arrayC[0];
// arrayF[1] = arrayC[1];
// arrayF[2] = arrayC[2];
// arrayF[3] = arrayC[3];
// arrayF[4] = arrayC[4];
// arrayF[5] = arrayD[0];
// arrayF[6] = arrayD[1];
// arrayF[7] = arrayD[2];
// arrayF[8] = arrayD[3];
// arrayF[9] = arrayD[4];

// document.write(arrayF[0] +"<br>")
// document.write(arrayF[1] +"<br>")
// document.write(arrayF[2] +"<br>")
// document.write(arrayF[3] +"<br>")
// document.write(arrayF[4] +"<br>")
// document.write(arrayF[5] +"<br>")
// document.write(arrayF[6] +"<br>")
// document.write(arrayF[7] +"<br>")
// document.write(arrayF[8] +"<br>")
// document.write(arrayF[9] +"<br>")









function mostrarNumeros() {

    var arrayC = new Array(5);
    arrayC[0] = parseInt(document.getElementById("numero1").value);
    arrayC[1] = parseInt(document.getElementById("numero2").value);
    arrayC[2] = parseInt(document.getElementById("numero3").value);
    arrayC[3] = parseInt(document.getElementById("numero4").value);
    arrayC[4] = parseInt(document.getElementById("numero5").value);


    var arrayD = new Array(6);
    arrayD[0] = parseInt(document.getElementById("numero11").value);
    arrayD[1] = parseInt(document.getElementById("numero22").value);
    arrayD[2] = parseInt(document.getElementById("numero33").value);
    arrayD[3] = parseInt(document.getElementById("numero44").value);
    arrayD[4] = parseInt(document.getElementById("numero55").value);
    arrayD[5] = parseInt(document.getElementById("numero66").value);

    var arrayE = new Array(11)
    arrayE[0] = arrayC[0];
    arrayE[1] = arrayC[1];
    arrayE[2] = arrayC[2];
    arrayE[3] = arrayC[3];
    arrayE[4] = arrayC[4];
    arrayE[5] = arrayD[0];
    arrayE[6] = arrayD[1];
    arrayE[7] = arrayD[2];
    arrayE[8] = arrayD[3];
    arrayE[9] = arrayD[4];
    arrayE[10] = arrayD[5];

    document.getElementById("resultado1").value = arrayE[0];
    document.getElementById("resultado2").value = arrayE[1];
    document.getElementById("resultado3").value = arrayE[2];
    document.getElementById("resultado4").value = arrayE[3];
    document.getElementById("resultado5").value = arrayE[4];
    document.getElementById("resultado11").value = arrayE[5];
    document.getElementById("resultado22").value = arrayE[6];
    document.getElementById("resultado33").value = arrayE[7];
    document.getElementById("resultado44").value = arrayE[8];
    document.getElementById("resultado55").value = arrayE[9];
    document.getElementById("resultado66").value = arrayE[10];
}

// Lista para reforço do aprendizado de array, fazer no mesmo arquivo (array.html e array.js), se possível acrescentar estilização. Este exercício não precisa ser entregue, é somente para aprendizado!
// Ler 5 elementos de um array, chama-lo de arrayA. Construir um array chamado arrayB de mesmo tipo, observando a seguintes lei de formação: “Todo elemento de B deverá ser o quadrado do elemento de A correspondente”. Apresentar os dois arrays A e B.
// Ler dois arrays D e E com 5 elementos cada. Construir um  arrayF, sendo esta a junção dos dois outros arrays. Desta forma, F deverá ter o dobro de elementos, ou seja, 10.Apresentar o arrayF.
// Ler duas matrizes do tipo vetor, sendo G com 5 elementos e H com 6 elementos. Construir uma matriz I, sendo esta a junção das duas outras matrizes. Desta forma, I deverá ter a capacidade de armazenar 11 elementos. Apresentar a matriz I.

// aula do dia 18-abril








