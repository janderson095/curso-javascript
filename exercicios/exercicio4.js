function resultadoInvertido() {

    let arrayA = new Array(20);
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
    arrayA[10] = parseInt(document.getElementById("numero11").value);
    arrayA[11] = parseInt(document.getElementById("numero12").value);
    arrayA[12] = parseInt(document.getElementById("numero13").value);
    arrayA[13] = parseInt(document.getElementById("numero14").value);
    arrayA[14] = parseInt(document.getElementById("numero15").value);
    arrayA[15] = parseInt(document.getElementById("numero16").value);
    arrayA[16] = parseInt(document.getElementById("numero17").value);
    arrayA[17] = parseInt(document.getElementById("numero18").value);
    arrayA[18] = parseInt(document.getElementById("numero19").value);
    arrayA[19] = parseInt(document.getElementById("numero20").value);
    console.log(arrayA);

    let arrayB = new Array(20);
    arrayB[0] = arrayA[19];
    arrayB[1] = arrayA[18];
    arrayB[2] = arrayA[17];
    arrayB[3] = arrayA[16];
    arrayB[4] = arrayA[15];
    arrayB[5] = arrayA[14];
    arrayB[6] = arrayA[13];
    arrayB[7] = arrayA[12];
    arrayB[8] = arrayA[11];
    arrayB[9] = arrayA[10];
    arrayB[10] = arrayA[9];
    arrayB[11] = arrayA[8];
    arrayB[12] = arrayA[7];
    arrayB[13] = arrayA[6];
    arrayB[14] = arrayA[5];
    arrayB[15] = arrayA[4];
    arrayB[16] = arrayA[3];
    arrayB[17] = arrayA[2];
    arrayB[18] = arrayA[1];
    arrayB[19] = arrayA[0];

    document.getElementById("resultado1").value = arrayB[0];
    document.getElementById("resultado2").value = arrayB[1];
    document.getElementById("resultado3").value = arrayB[2];
    document.getElementById("resultado4").value = arrayB[3];
    document.getElementById("resultado5").value = arrayB[4];
    document.getElementById("resultado6").value = arrayB[5];
    document.getElementById("resultado7").value = arrayB[6];
    document.getElementById("resultado8").value = arrayB[7];
    document.getElementById("resultado9").value = arrayB[8];
    document.getElementById("resultado10").value = arrayB[9];
    document.getElementById("resultado11").value = arrayB[10];
    document.getElementById("resultado12").value = arrayB[11];
    document.getElementById("resultado13").value = arrayB[12];
    document.getElementById("resultado14").value = arrayB[13];
    document.getElementById("resultado15").value = arrayB[14];
    document.getElementById("resultado16").value = arrayB[15];
    document.getElementById("resultado17").value = arrayB[16];
    document.getElementById("resultado18").value = arrayB[17];
    document.getElementById("resultado19").value = arrayB[18];
    document.getElementById("resultado20").value = arrayB[19];
    
}