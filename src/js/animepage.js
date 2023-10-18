//OBJ 1 + OBJ 2 passo 1 - pegar os botões(botao) e personagens(indice) no JS pra poder verificar quando o usuário clicar em cima de um deles.//
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
const videos = document.querySelectorAll(".video");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //OBJ 1 passo 2 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele.//
        desselecionarBotao();

        // OBJ 1 passo 3 - adicionar a classe "selecionado" no botão que o usuário clicou.//
        botao.classList.add("selecionado");

        //OBJ 2 passo 2 - verificar se já existe um botão selecionado, se sim, devemos remover a seleção da div equivalente ao índice desse botão.//
        desselecionarPersonagem();

        //OBJ 2 passo 3 - adicionar a classe "selecionado" no botão que vai casar com a div do personagem que o usuário clicou.//
        personagens[indice].classList.add("selecionado");         

        videos[indice].play();
    })
});


const audio = document.getElementById('musica');
const playButton = document.getElementById('playButton');

playButton.addEventListener("click", () =>{
    if(audio.paused) {
        audio.play();
        playButton.textContent = "🔊"
    } else {
        audio.pause();
        playButton.textContent = "🔈"
    }
})

function desselecionarPersonagem() {
    const removerPSelecionado = document.querySelector(".personagem.selecionado");
    removerPSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const removerBSelecionado = document.querySelector(".botao.selecionado");
    removerBSelecionado.classList.remove("selecionado");
}

    


