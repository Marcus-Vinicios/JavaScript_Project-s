function cadastro(){

    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;

    if(age < 18){
        alert("Acesso negado, usuario menor de idade!");
        document.location.reload();
    }if(age >= 18){
        alert("Acesso permitido, usuario maior de idade");
    }
        if(password.length < 8){
            alert("Senha invalida.");
            document.location.reload();
            var password = document.getElementById('password').value;
        }if(password.length >= 8){
            alert("Senha casdastrada com sucesso");
        }
    if(repassword != password){
        alert("Senha invalida.");
        document.location.reload();
    }
    alert("Bem vindo " + username + " ao meu site.")
    alert("Seu nome é " + name);
    alert("e você possui " + age + " anos");
}

/*
alert ("bem vindos ao meu primeiro site com JS (java script kkkk)");
var nome = "Marcus";
var idade = 19;
var idade2 = idade + 5;
alert ("Meu nome é " + nome + " e tenho " + idade + " anos.");
alert (idade2);

    
    var n1 = prompt("Digite um valor");
    var n2 = prompt("Digite outro valor");
    var soma = n1 + n2;    
    alert (soma);
*/

console.log();