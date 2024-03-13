/*
var nome = prompt('Qual o seu nome ?');

var resposta = confirm(nome + ", você gostaria de continuar?");

if(resposta){
    alert("bem vindo...");
} else{
    window.location.href = "..//index.html";

}

var preco = prompt("Qual o preco do produto?");

if(preco <= 20){
    alert("Barato...");
} else{
    alert("Caro...");
}

var preco = prompt("Qual o preco do produto?");
var mensagem = (preco <= 20) ? "Barato..." : "caro...";
    alert(mensagem);
*/

var mes = prompt("Digite o mês: \n 1- Janeiro \n 2- fevereiro \n 3- Março");

if( mes == 1){
    alert("Janeiro");
} else if(mes == 2){
    alert("Fevereiro");
} else if(mes == 3){
    alert("Março");
} else {
    alert("Mês Invalido");
}