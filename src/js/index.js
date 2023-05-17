const botaoAlterarTema = document.getElementById("botao-alterar-tema");
("botao-alterar-tema")
const imagemBotaotrocaDoTema = document.querySelector(".imagen-botao")
const body = document.querySelector("body")
botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")
    
    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaotrocaDoTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        imagemBotaotrocaDoTema.setAttribute("src", "./src/imagens/moon.png")
    }
})
