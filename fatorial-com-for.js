function fatorial() {
    let numero = parseInt(document.getElementById('numero').value);
    let fat = 1;
    for (i = numero; i > 0; i--) {
        fat = fat * i;
    }
    document.getElementById('resultado').innerHTML = fat;

}