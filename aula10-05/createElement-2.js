function adicionaElemento(){
    for (let i=0;i<=4;i++){
        var caixaLabel = document.createElement("label");
        caixaLabel.innerText = "Digite um número"
        document.body.appendChild(caixaLabel);
    
        var caixaInput = document.createElement("input");
        document.body.appendChild(caixaInput);
        document.body.appendChild(document.createElement("br"));
    }
}