//array com sistema de length para contar os elementos

notas = new Array(6);
notas[0] = 8.5;
notas[1] = 5.0;
notas[2] = 10.0;
notas[3] = 9.0;
notas[4] = 4.5;
notas[5] = 4.5;
document.write(`Notas: ${notas[0]}, ${notas[1]}, ${notas[2]}`);
document.write(`<br> O tamanho do Array é = ${notas.length}<br>`);



nome = 'Guilherme Henrique Santos';
partes = nome.split(' '); //split é um separador do conteudo no exemplo ele esta pegando apenas o indice 0.
document.write(`<br> Indice 0 = ${partes[0]}<br>`);
inteiro = partes.join(' ');
alert(inteiro); // join faz o inverso do split no caso, criou uma array com inteiro e deu o valor de partes.

//sort para colocar as arrays em ordem afalbetica

let nomes = new Array('Rafael', 'Joaquim', 'João', 'Ana');
let nomesClassificados = nomes.sort();
document.write(`<br>${nomesClassificados[0]}`);
document.write(`<br>${nomesClassificados[1]}`);
document.write(`<br>${nomesClassificados[2]}`);
document.write(`<br>${nomesClassificados[3]}<br>`);

//while 

valor = new Array(3, 2, 4, 1, 5);
i = 0;
total = 0;
while (total < 10) {  //enquanto/while total for menor que 10 faça o que esta dentro do escopo- entra no loop
    total += valor[i];
    i++;
}
document.write(`<br> O total é =  ${total}<br>`);

//sistema de colocar uma opcao de entrada ou ficar no loop e o uppercase para ajustar as letras do sim

let opcao = "sim";
while (opcao == "sim") {
    document.write(`<br> Vocês são engraçadinhos<br>`);
    opcao = prompt('Deseja continuar?');
    opcao = opcao.toUpperCase();
}

//loop do while

valor = new Array(3, 2, 4, 1, 5);
cont = 0;
total = 20;
do {
    total += valor[cont];
    cont++;
}
while (total < 10)
document.write(`<br>Total = ${total} <br>`);

// loop for I 

listaNomes = new Array("Jonas", "Ana", "Ruth", "Tiago", "Marcos");
listaNomes.sort();
document.write(`<br>`);
document.write("<ol>");
for (nome in listaNomes) { //in sintaxe para 
    document.write("<li>" + listaNomes[nome] + "<br>");
}
document.write("</ol>");