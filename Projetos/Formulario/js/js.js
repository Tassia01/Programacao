function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var ano1 = document.getElementById("ano");
    var res = document.getElementById("res");
    if (ano1.value.length == 0 || ano1.value > ano) {
        window.alert("ERRO: Verifique os dados e tente novamente!");  
    }else{
        var fsexo = document.getElementsByName("opcao");
        var idade = ano - Number(ano1.value);
        var genero = "";
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'img/img04-crianca-menino.jpg');
            }
            else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'img/img06-jovem-menino.jpg');
            }
            else if (idade <= 55) {
                //adulto
                img.setAttribute('src', 'img/img02-homem.jpg');
            }
            else{
                //idoso
                img.setAttribute('src', 'img/img07-idoso.jpg');
            }
        }
        else if (fsexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'img/img03-crianca-menina.jpg');
            }
            else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'img/img05-jovem-menina.jpg');
            }
            else if (idade <= 55) {
                //adulto
                img.setAttribute('src', 'img/img01-mulher.jpg');
            }
            else{
                //idoso
                img.setAttribute('src', 'img/img08-idosa.jpg');
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = "<br> Você é: " + genero + " e tem " + idade + " anos <br><br>";
        res.appendChild(img);
    }
}