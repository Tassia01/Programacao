var num;
var result;
/*Função para aparecer na tela do input -- o número que o usuário 
clicar (o value do html) vai ser n */
function botao(n){
    num = document.cal.tela.value += n;
}
/*Função para deixar sem nada na tela*/
function limpar(){
    document.cal.tela.value = '';
}
function resultado(){
    result = eval(num);
    document.cal.tela.value = result;
}
