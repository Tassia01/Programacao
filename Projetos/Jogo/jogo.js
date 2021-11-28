var largura = 0;
var altura = 0;
var vidas = 1;
var t = 30;
var PandaTempo = 1500;

//Ajustando o tamanho da tela
function ajustaTela() {
    altura = window.innerHeight; //altura da tela
    largura = window.innerWidth; //largura da tela
    console.log(largura, altura); //executando
}
ajustaTela();

var cronometro = setInterval(function(){
    t -= 1;
    if (t < 0) {
        clearInterval(cronometro);
        clearInterval(criaPanda);
        window.location.href = 'vitoria.html';
    }
    else{
    document.getElementById('tempo').innerHTML = t;
    }   
}, 1000);

//tratativa para não aparecer a ?, apenas o nível
window.location.search
var nivel = nivel.replace('?', '');
if (nivel === 'facil') {
    //1500
    PandaTempo = 1500;
}else if(nivel === 'normal'){
    //1000
    PandaTempo = 1000;
}else if(nivel === 'dificil'){
    //750
    PandaTempo = 550;
}

function posicaoR(){
    //remove bicho anterior da tela (caso exista)
    if (document.getElementById('bicho')) {
        document.getElementById('bicho').remove();
        //alterando a imagem de coração cheio para vazio
        console.log(vidas)
        if (vidas > 3) {
            //alert('Game Over');
            window.location.href = 'GameOver.html';
        }else{
            document.getElementById('c' + vidas).src='img/coracao-vazio.png';
            vidas ++;
        }
    }

    //posição do panda para não sair da tela 
    var positionX = Math.floor(Math.random() * largura) - 100;
    var positionY = Math.floor(Math.random() * altura) - 100;
    positionX = positionX < 1 ? 1: positionX;
    positionY = positionY < 1 ? 1: positionY;
    console.log(positionX, positionY);

    //criando um elemento HTML
    var bicho = document.createElement('img');
    bicho.src = 'img/panda1.png';
    bicho.className = tamanhoDiferente() + ' ' + ladoDiferente();
    bicho.style.left = positionX + 'px';
    bicho.style.top = positionY + 'px';
    bicho.style.position = 'absolute';
    bicho.id = 'bicho';

    //função para clicar no panda
    bicho.onclick = function() {
        this.remove();
    }

    document.body.appendChild(bicho);
    console.log(tamanhoDiferente());
}
function tamanhoDiferente() {
    var classe = Math.floor(Math.random() * 3);//de 0 até 3 (não chega no 3 - 2.999999)
    console.log(classe);
    switch (classe) {
        case 0:
            return 'bicho1';
        case 1:
            return 'bicho2';
        case 2:
            return 'bicho3';           
    }
}
function ladoDiferente() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB';
    }
}