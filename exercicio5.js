function resultadoD() {
    let arrayA = new Array(5)
    arrayA[0] = parseInt(document.getElementById("numero1").value);
    arrayA[1] = parseInt(document.getElementById("numero2").value);
    arrayA[2] = parseInt(document.getElementById("numero3").value);
    arrayA[3] = parseInt(document.getElementById("numero4").value);
    arrayA[4] = parseInt(document.getElementById("numero5").value);
    console.log(arrayA)

    let arrayB = new Array(5);
    arrayB[0] = parseInt(document.getElementById("numero6").value);
    arrayB[1] = parseInt(document.getElementById("numero7").value);
    arrayB[2] = parseInt(document.getElementById("numero8").value);
    arrayB[3] = parseInt(document.getElementById("numero9").value);
    arrayB[4] = parseInt(document.getElementById("numero10").value);
    console.log(arrayB)

    let arrayC = new Array(5);
    arrayC[0] = parseInt(document.getElementById("numero11").value);
    arrayC[1] = parseInt(document.getElementById("numero12").value);
    arrayC[2] = parseInt(document.getElementById("numero13").value);
    arrayC[3] = parseInt(document.getElementById("numero14").value);
    arrayC[4] = parseInt(document.getElementById("numero15").value);
    console.log(arrayC)


    let arrayD = new Array(15);
    arrayD[0] = arrayA[0];
    arrayD[1] = arrayA[1];
    arrayD[2] = arrayA[2];
    arrayD[3] = arrayA[3];
    arrayD[4] = arrayA[4];
    arrayD[5] = arrayB[0];
    arrayD[6] = arrayB[1];
    arrayD[7] = arrayB[2];
    arrayD[8] = arrayB[3];
    arrayD[9] = arrayB[4];
    arrayD[10] = arrayC[0];
    arrayD[11] = arrayC[1];
    arrayD[12] = arrayC[2];
    arrayD[13] = arrayC[3];
    arrayD[14] = arrayC[4];

    document.getElementById("resultado1").value = arrayA[0];
    document.getElementById("resultado2").value = arrayA[1];
    document.getElementById("resultado3").value = arrayA[2];
    document.getElementById("resultado4").value = arrayA[3];
    document.getElementById("resultado5").value = arrayA[4];
    document.getElementById("resultado6").value = arrayB[0];
    document.getElementById("resultado7").value = arrayB[1];
    document.getElementById("resultado8").value = arrayB[2];
    document.getElementById("resultado9").value = arrayB[3];
    document.getElementById("resultado10").value = arrayB[4];
    document.getElementById("resultado11").value = arrayC[0];
    document.getElementById("resultado12").value = arrayC[1];
    document.getElementById("resultado13").value = arrayC[2];
    document.getElementById("resultado14").value = arrayC[3];
    document.getElementById("resultado15").value = arrayC[4];



}