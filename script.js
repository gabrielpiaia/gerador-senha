let sliderElement  = document.querySelector("#slider")
let buttonElement  = document.querySelector("#button") 

let sizePassowrd = document.querySelector("#tamanhoCaracteres")
let password = document.querySelector("#password")

let containerPasword  = document.querySelector("#container-password")

let charset = "1234567890zxcvbnmasghjklqwertyuiop";

let novasenha = "";

tamanhoCaracteres.innerHTML = sliderElement.value;

slider.oninput = function(){
    tamanhoCaracteres.innerHTML = this.value
}

function criarSenha(){
    
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    containerPasword.classList.remove("hide");
    password.innerHTML = pass;
    novasenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!");
    navigator.clipboard.writeText(novasenha);
        
    }





