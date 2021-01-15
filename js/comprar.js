let ativarCompra = document.querySelector(".ativar-compra");
let cancelarCompra = document.querySelector(".cancelar-compra");
let opcaoSelecionada = document.querySelector(".opcao-selecionada");
let painelSemAcao = document.querySelector(".painel-sem-acao");
let painelComprar = document.querySelector(".painel-comprar");
let painelCompraEmExecucao = document.querySelector(".compra-em-execucao");

ativarCompra.addEventListener('click',()=>{
    painelSemAcao.classList.remove("ativo");
    painelComprar.classList.add("ativo");

    ativarCompra.classList.remove("ativo");
    cancelarCompra.classList.add("ativo");
})

cancelarCompra.addEventListener('click',()=>{
    painelSemAcao.classList.add("ativo");
    painelComprar.classList.remove("ativo");
    painelCompraEmExecucao.classList.remove("ativo");

    ativarCompra.classList.add("ativo");
    cancelarCompra.classList.remove("ativo");
})

opcaoSelecionada.addEventListener('click',()=>{
    painelComprar.classList.remove("ativo");
    painelCompraEmExecucao.classList.add("ativo");

    ativarCompra.classList.add("ativo");
    cancelarCompra.classList.remove("ativo");

    // setTimeout(()=>{
    //     painelCompraEmExecucao.classList.remove("ativo");
    //     painelSemAcao.classList.add("ativo");
    // },5000)
})