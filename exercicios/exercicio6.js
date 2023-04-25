function executar() {
    var arrayA = new Array(10);
    var numero = parseInt(document.getElementById("num01").value);

    var arrayT = new Array(10);
    arrayT[0] = numero * 0;
    arrayT[1] = numero * 1;
    arrayT[2] = numero * 2;
    arrayT[3] = numero * 3;
    arrayT[4] = numero * 4;
    arrayT[5] = numero * 5;
    arrayT[6] = numero * 6;
    arrayT[7] = numero * 7;
    arrayT[8] = numero * 8;
    arrayT[9] = numero * 9;
    arrayT[10] = numero * 10;

    document.getElementById("lbl00").innerHTML = numero + " x 0 ="
    document.getElementById("res00").value = arrayT[0];
    document.getElementById("lbl01").innerHTML = numero + " x 1 ="
    document.getElementById("res01").value = arrayT[1];
    document.getElementById("lbl02").innerHTML = numero + " x 2 ="
    document.getElementById("res02").value = arrayT[2];
    document.getElementById("lbl03").innerHTML = numero + " x 3 ="
    document.getElementById("res03").value = arrayT[3];
    document.getElementById("lbl04").innerHTML = numero + " x 4 ="
    document.getElementById("res04").value = arrayT[4];
    document.getElementById("lbl05").innerHTML = numero + " x 5 ="
    document.getElementById("res05").value = arrayT[5];
    document.getElementById("lbl06").innerHTML = numero + " x 6 ="
    document.getElementById("res06").value = arrayT[6];
    document.getElementById("lbl07").innerHTML = numero + " x 7 ="
    document.getElementById("res07").value = arrayT[7];
    document.getElementById("lbl08").innerHTML = numero + " x 8 ="
    document.getElementById("res08").value = arrayT[8];
    document.getElementById("lbl09").innerHTML = numero + " x 9 ="
    document.getElementById("res09").value = arrayT[9];
    document.getElementById("lbl10").innerHTML = numero + " x 10 ="
    document.getElementById("res10").value = arrayT[10]; 
}

// function tabuada(){
//     var num = parseInt(document.getElementById("num").value);
//     var resposta = document.getElementById('resposta');
//     var tabuada='';
  
//     for(var count=1; count<=10 ; count++)
//      tabuada += num+" x "+count+" = "+
//                  num*count+"<br />";
    
//     resposta.innerHTML = tabuada;
//   }