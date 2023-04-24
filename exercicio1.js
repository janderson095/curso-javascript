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

var area = document.getElementById("area");
function entrar(){
    var nome = prompt("Digite seu nome:");
    if(nome==""|| nome== null){
        alert("Por favor preencher todos os campos!");
        area.innerHTML = "Clique no botão para acessar...";
    }else{
        area.innerHTML = "Bem-vindo "+nome
    }
}

function somar(arrayNumero){
    let resultado = arrayNumero[0] + arrayNumero[1];
    document.getElementById("resultado").value=resultado;
}

function subtrair(arrayNumero){
    let resultado = arrayNumero[0] - arrayNumero[1];
    document.getElementById("resultado").value=resultado;
}

function multiplicar(arrayNumero){
    let resultado = arrayNumero[0] * arrayNumero[1];
    document.getElementById("resultado").value=resultado;
}

function dividir(arrayNumero){
    let resultado = arrayNumero[0] / arrayNumero[1];
    document.getElementById("resultado").value=resultado;
}

function calcular(qualquerNome){
    let arrayNumero = new Array(2);
     arrayNumero[0] = parseInt(document.getElementById("num01").value);
     arrayNumero[1] = parseInt(document.getElementById("num02").value);
    if(qualquerNome=="somar"){
        somar(arrayNumero);
    }

    if(qualquerNome=="subtrair"){
        subtrair(arrayNumero);
    }

    if(qualquerNome=="multiplicar"){
        multiplicar(arrayNumero);
    }
    if(qualquerNome=="dividir"){
        dividir(arrayNumero);
    }
}

