
/* DIAGNÓSTICO DE ILUMINAÇÃO */

const formularioDiagnostico = document.getElementById("formDiagnostico");

formularioDiagnostico.addEventListener("submit", function(event) {
    event.preventDefault();

    const ambiente = document.getElementById("tipoAmbiente").value;
    const luzPraia = document.getElementById("luzPraia").value;
    const luzForte = document.getElementById("luzForte").value;

    const resultado = document.getElementById("resultadoDiagnostico");

    let mensagem = "";

    if (luzPraia === "sim" || luzForte === "sim") {
        mensagem = "Atenção! Sua iluminação pode causar impactos na vida marinha. Procure utilizar luzes direcionadas para baixo e evitar iluminação desnecessária.";
    } 
    else if (luzPraia === "nao" && luzForte === "nao") {
        mensagem = "Ótimo! Suas respostas indicam práticas mais adequadas. Continue evitando luzes direcionadas para a praia.";
    } 
    else {
        mensagem = "Não foi possível identificar todas as condições. Observe sua iluminação e procure evitar luzes voltadas para a praia.";
    }

    if (ambiente === "comercio") {
        mensagem += " Em comércios e hotéis, também é importante orientar funcionários e clientes.";
    }

    resultado.textContent = mensagem;
});


/* SIMULADOR DE ILUMINAÇÃO */

const botaoInadequado = document.getElementById("botaoInadequado");
const botaoAdequado = document.getElementById("botaoAdequado");
const textoSimulador = document.getElementById("textoSimulador");

botaoInadequado.addEventListener("click", function() {
    textoSimulador.textContent = "A iluminação direcionada para a praia pode confundir as tartarugas e prejudicar a orientação dos filhotes.";
});

botaoAdequado.addEventListener("click", function() {
    textoSimulador.textContent = "A iluminação direcionada para baixo e utilizada somente quando necessário ajuda a reduzir os impactos sobre as tartarugas marinhas.";
});


/* CHECKLIST DE PROTEÇÃO */

const itensProtecao = document.querySelectorAll(".itemProtecao");
const progressoProtecao = document.getElementById("progressoProtecao");

function atualizarProgresso() {
    let marcados = 0;

    itensProtecao.forEach(function(item) {
        if (item.checked) {
            marcados++;
        }
    });

    if (marcados === 0) {
        progressoProtecao.textContent = "Você ainda não marcou nenhuma atitude.";
    } 
    else {
        progressoProtecao.textContent = "Você marcou " + marcados + " de " + itensProtecao.length + " atitudes de proteção.";
    }

    if (marcados === itensProtecao.length) {
        progressoProtecao.textContent = "Parabéns! Você marcou todas as atitudes de proteção!";
    }
}

itensProtecao.forEach(function(item) {
    item.addEventListener("change", atualizarProgresso);
});


/* QUIZ AMBIENTAL */

const formularioQuiz = document.getElementById("formQuiz");

formularioQuiz.addEventListener("submit", function(event) {
    event.preventDefault();

    const pergunta1 = document.querySelector('input[name="pergunta1"]:checked');
    const pergunta2 = document.querySelector('input[name="pergunta2"]:checked');
    const pergunta3 = document.querySelector('input[name="pergunta3"]:checked');

    const resultadoQuiz = document.getElementById("resultadoQuiz");

    if (!pergunta1 || !pergunta2 || !pergunta3) {
        resultadoQuiz.textContent = "Responda todas as perguntas antes de finalizar o quiz.";
        return;
    }

    let pontos = 0;

    if (pergunta1.value === "a") {
        pontos++;
    }

    if (pergunta2.value === "b") {
        pontos++;
    }

    if (pergunta3.value === "c") {
        pontos++;
    }

    if (pontos === 3) {
        resultadoQuiz.textContent = "Parabéns! Você acertou todas as perguntas e conhece bem o tema!";
    } 
    else if (pontos === 2) {
        resultadoQuiz.textContent = "Muito bem! Você acertou " + pontos + " de 3 perguntas. Continue aprendendo!";
    } 
    else {
        resultadoQuiz.textContent = "Você acertou " + pontos + " de 3 perguntas. Que tal conhecer mais sobre a proteção das tartarugas?";
    }
});


/* ACESSIBILIDADE - TAMANHO DA FONTE */

let tamanhoFonte = 16;

const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");

aumentarFonte.addEventListener("click", function() {
    if (tamanhoFonte < 22) {
        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});

diminuirFonte.addEventListener("click", function() {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});


/* ACESSIBILIDADE - ALTO CONTRASTE */

const botaoContraste = document.getElementById("contraste");

botaoContraste.addEventListener("click", function() {
    document.body.classList.toggle("alto-contraste");
});
