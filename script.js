const piadas = [
    "O que o pato disse para a pata? Vem Quá!",
    "Qual é o peixe que anda de boné? O peixe-capitão.",
    "Por que o jacaré tirou o filho da escola? Porque ele réptil de ano.",
    "Onde o Tom Jobim esconde as notas? No bolso, é claro!",
    "Por que o corvo é o melhor amigo do gato? Porque ele miado.",
    "Qual é o cúmulo da sorte? Nascer em berço de ouro, e virar um peixe-dourado.",
    "O que o pneu disse para o seu amigo? Estou cansado de tanto rodar.",
    "O que a impressora disse para a outra? Essa folha é para mim, eu sou a xerife.",
    "O que o tomate disse para a tomate? Você me deu um molho!",
    "Qual é a cidade que não tem pão? Não sei, eu não sou padeiro.",
    "O que o caderno de matemática disse para o de geografia? Tenho mil problemas para resolver.",
    "Por que o louco não é um animal? Porque ele é um ser-humano."
];

const botaoGerarPiada = document.getElementById('joke-button');
const containerPiada = document.getElementById('joke-container');

function gerarPiadaAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * piadas.length);
    const piadaAleatoria = piadas[indiceAleatorio];
    containerPiada.innerHTML = `<p>${piadaAleatoria}</p>`;
}

botaoGerarPiada.addEventListener('click', gerarPiadaAleatoria);

// Gera uma piada inicial ao carregar a página
gerarPiadaAleatoria();
