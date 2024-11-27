
// Seleciona os elementos
const caixa = document.getElementById("caixa");
const botao = document.getElementById("botao");

// Adiciona um evento de clique no botão
botao.addEventListener("click", () => {
    // Verifica se a caixa tem a classe "visivel"
    if (caixa.classList.contains("visivel")) {
        // Troca a classe para "oculto"
        caixa.classList.replace("visivel", "oculto");
    } else {
        // Troca a classe para "visivel"
        caixa.classList.replace("oculto", "visivel");
    }
});

botao.addEventListener("mouseout", () => {
    
    if (caixa.classList.contains("visivel")) {
        
        caixa.classList.replace("visivel", "oculto");
    } else {
      
        caixa.classList.replace("oculto", "visivel");
    }
});

botao.addEventListener("mouseover", () => {

    if (caixa.classList.contains("visivel")) {
        
        caixa.classList.replace("visivel", "oculto");
    } else {

        caixa.classList.replace("oculto", "visivel");
    }
});


