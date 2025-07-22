const botao = document.getElementById("tema");//ta selecionando o botao com o id "tema" e guardando na variavel botao
const body = document.body; // ta selecionando o body dos html e guardando na variavel body
let escuro = false;//criei uma variavel escuro e coloquei o valor false, que significa que o modo escuro esta desativado e criei pra pode manipular

  botao.addEventListener("click", function() {//um evento de click no botao, quando clicar vai executar a funcao
    escuro = !escuro;//ta invertendo o valor da variavel escuro, se for true vira false e se for false vira true
    body.classList.toggle("escuro", escuro);// ta adicionando ou removendo a classe escuro do body, dependendo do valor da variavel escuro
    botao.textContent = escuro ? "Modo claro" : "Modo escuro";// ta mudando o texto do botao dependendo do valor da variavel escuro
  });// o class list.toggle adiciona ou remove a classe escuro do body dependendo do valor q estiver na variavel escuro, se for true adiciona a classe escuro e se for false remove a classe escuro
  //o textContent ta mudando o texto do botao dependendo do valor que estiver na varavel escuro, se for true muda o texto para "Modo claro" e se for false muda o texto para "Modo escuro"