// var i = 0;
// document.write("Este numero é = "+i+"<br>");
// i = 1;
// document.write("Este numero é = "+i+"<br>");
// i = 2;
// document.write("Este numero é = "+i+"<br>");
// i = 3;
// document.write("Este numero é = "+i+"<br>");
// i = 4;
// document.write("Este numero é = "+i+"<br>");
// i = 5;
// document.write("Este numero é = "+i+"<br>");
// i = 6;
// document.write("Este numero é = "+i+"<br>");
// i = 7;
// document.write("Este numero é = "+i+"<br>");
// i = 8;
// document.write("Este numero é = "+i+"<br>");
// i = 9;


// for (let i = 0; i <=100; i++) {
//     // console.log(i)
//     document.write("Este numero é = "+i+"<br>");
// }

// for (let i = 15; i <=200; i++) {
//     document.write(" O quadrado de "+i+" é = "+i*i+"<br>");
// }


let soma = 0;
for (i = 0; i <= 500; i++) {
  let verifica = i % 2;
  if (verifica == 0) {
    soma = soma + i;
  }
}
document.write("A somatório dos valores pares de 1 até 500 é: ", +soma + "<br>");
