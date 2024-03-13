function imprimirMsg(texto){
    alert('Você clicou no botão ' + texto);
}
function login(){
    const emailCorreto = "luciano@gmail.com"
    const senhaCorreta = "senha"
    var email = document.getElementById("email").value;
    var senha = document.getElementById("pwd").value;

    if( email == emailCorreto){
        
        if(senha == senhaCorreta){
            window.open("../index.html");
        } else{
            alert("Senha Incorreta")
        }
    } else {
        alert("Email incorreto");
    }
    
/*
    if( email == emailCorreto){
        alert("email correto")
    } else {
        alert("Email incorreto")
    }

    if( senha == senhaCorreta){
        alert("senha correto")
    } else {
        alert("senha incorreto")
    }

    alert("E-mail Digitado: " + email);
    alert("Senha Digitado: " + pwd);
*/
}