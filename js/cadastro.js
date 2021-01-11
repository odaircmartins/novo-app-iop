const slidepagina = document.querySelector(".slide-pagina");
const botaoProximo1 = document.querySelector(".primeiroProximo");
const botaoAnterior2 = document.querySelector(".anterior-1");
const botaoProximo2 = document.querySelector(".proximo-1");
const botaoAnterior3 = document.querySelector(".anterior-2");
const botaoProximo3 = document.querySelector(".proximo-2");
const botaoAnterior4 = document.querySelector(".anterior-3");
const botaoEnviar = document.querySelector(".enviar");
const progressoTexto = document.querySelectorAll(".etapa p");
const progressoCheck = document.querySelectorAll(".etapa .check");
const ponto = document.querySelectorAll(".etapa .ponto");
let posicaoAtual = 1;

botaoProximo1.addEventListener("click", (e) => {
    e.preventDefault();
    slidepagina.style.marginLeft = "-25%";
    ponto[posicaoAtual - 1].classList.add("ativo");
    progressoCheck[posicaoAtual - 1].classList.add("ativo");
    progressoTexto[posicaoAtual - 1].classList.add("ativo");
    posicaoAtual += 1;
});

botaoAnterior2.addEventListener("click", (e) => {
    e.preventDefault();
    slidepagina.style.marginLeft = "0%";
    ponto[posicaoAtual - 2].classList.remove("ativo");
    progressoCheck[posicaoAtual - 2].classList.remove("ativo");
    progressoTexto[posicaoAtual - 2].classList.remove("ativo");
    posicaoAtual -= 1;
});

botaoProximo2.addEventListener("click", (e) => {
    e.preventDefault();
    slidepagina.style.marginLeft = "-50%";
    ponto[posicaoAtual - 1].classList.add("ativo");
    progressoCheck[posicaoAtual - 1].classList.add("ativo");
    progressoTexto[posicaoAtual - 1].classList.add("ativo");
    posicaoAtual += 1;
});


botaoAnterior3.addEventListener("click", (e) => {
    e.preventDefault();
    slidepagina.style.marginLeft = "-25%";
    ponto[posicaoAtual - 2].classList.remove("ativo");
    progressoCheck[posicaoAtual - 2].classList.remove("ativo");
    progressoTexto[posicaoAtual - 2].classList.remove("ativo");
    posicaoAtual -= 1;
});

botaoProximo3.addEventListener("click", (e) => {
    e.preventDefault();
    slidepagina.style.marginLeft = "-75%";
    ponto[posicaoAtual - 1].classList.add("ativo");
    progressoCheck[posicaoAtual - 1].classList.add("ativo");
    progressoTexto[posicaoAtual - 1].classList.add("ativo");
    posicaoAtual += 1;
});


botaoAnterior4.addEventListener("click", (e) => {
    e.preventDefault();
    slidepagina.style.marginLeft = "-50%";
    ponto[posicaoAtual - 2].classList.remove("ativo");
    progressoCheck[posicaoAtual - 2].classList.remove("ativo");
    progressoTexto[posicaoAtual - 2].classList.remove("ativo");
    posicaoAtual -= 1;
});

botaoEnviar.addEventListener("click", () => {
    ponto[posicaoAtual - 1].classList.add("ativo");
    progressoCheck[posicaoAtual - 1].classList.add("ativo");
    progressoTexto[posicaoAtual - 1].classList.add("ativo");
    posicaoAtual += 1;
});






