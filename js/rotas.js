// Define as referências do documento HTML
paginas = {};

// Página 'Cadastro"
paginas.cadastro = {};
paginas.cadastro.pagina = document.querySelector("#cadastro"); 

// Página 'Login'
paginas.login = {};
paginas.login.pagina = document.querySelector("#login");
//paginas.login.conteudo = document.querySelector("#credenciaisStations");

// Página 'Principal'
paginas.principal = {};
paginas.principal.pagina = document.querySelector("#principal");

// Página 'Principal'
paginas.boasvindas = {};
paginas.boasvindas.pagina = document.querySelector("#boasvindas");

// Página 'Política de privacidade'
paginas.politica = {};
paginas.politica.pagina = document.querySelector("#politica");

// Página 'Termo de utilização do aplicativo'
paginas.termo = {};
paginas.termo.pagina = document.querySelector("#termo");

// Página não encontrada - Erro 404
paginas.pagina404 = {};
paginas.pagina404.pagina = document.querySelector("#pagina404");
paginas.pagina404.erro = document.querySelector("#pagina404-erro");

// Código para rodar função customizada de cada página ao carregar
funcoesDaPagina = {};

// Código customizado que roda quando há página não encontrada
funcoesDaPagina.pagina404 = function () {
    pagina.pagina404.erro.innerHTML = `Page ${location.hash.substr(1)} not found!`;
};

funcoesDaPagina.comprar = function () {
    //verificarSeEstaCadastrado();
};

function verificarSeEstaCadastrado() {
    let credenciais = localStorage.getItem('nome');

    if (credenciais === null) {
        paginas.comprar.pagina.classList.remove("ativa");
        paginas.credenciais.pagina.classList.add("ativa");
    } else {
        if (localStorage.getItem('idRevendedor') != '') {
            let tokenUsuario = localStorage.getItem('token');
            let tabelaRevendedores = "Revendedores/" + localStorage.getItem('idRevendedor') + "/UsuariosQueCompraram";
            let referencia = obterDadosDoBanco(tabelaRevendedores, tokenUsuario);

            referencia.once("value", snap => {
                try {
                    if (snap.val().statusDoPagamento === 'quitado') {
                        localStorage.setItem('valorDaUltimaCompra', formatarMoeda(0.00));
                        localStorage.setItem('valorTotalComprado', formatarMoeda(0.00));
                        localStorage.setItem('volumeTotalComprado', formatarEmLitros(0));

                        rotuloValorTotalComprado.innerHTML = formatarMoeda(0.0);
                        rotuloVolumeTotalComprado.innerHTML = formatarEmLitros(0.0);
                    }
                } catch {
                    localStorage.setItem('valorDaUltimaCompra', formatarMoeda(0.00));
                    localStorage.setItem('valorTotalComprado', formatarMoeda(0.00));
                    localStorage.setItem('volumeTotalComprado', formatarEmLitros(0));
                    localStorage.setItem('idRevendedor', '');
                    localStorage.setItem('token', '');
                }
            });
        }
    }
}

var path;

// Navegação
function navegacao() {
    // Acessa a URL
    path = location.hash
        .substr(1)
        .toLowerCase()
        .split("/");

    // Procura a página que deve ser mostrada
    let paginaAtual = path[0];
    if (!paginas.hasOwnProperty(paginaAtual)) {
        if (path[0] === "") {
            paginaAtual = "boasvindas";
        } else {
            paginaAtual = "pagina404";
        }
    }

    // Esconde a página que estava ativa
    for (let pagina in paginas) {
        if (paginas.hasOwnProperty(pagina)) {
            paginas[pagina].pagina.classList.remove("ativa");
        }
    }

    // Mostra a página e roda os scripts customizados
    paginas[paginaAtual].pagina.classList.add("ativa");

    //Roda a página caso exista
    if (funcoesDaPagina.hasOwnProperty(paginaAtual)) {
        funcoesDaPagina[paginaAtual]();
    }
}

// Carrega a primeira navegação da página
navegacao();
window.onhashchange = navegacao;