// Lista de fatos curiosos sobre o produtor rural
const fatos = [
    "O algodão da sua roupa, o couro do seu sapato e a matéria-prima de vários remédios nascem no campo.",
    "A agricultura familiar produz cerca de 80% do alimento mundial, segundo a ONU.",
    "Muitas tecnologias urbanas, como o GPS e drones, são amplamente utilizadas para melhorar a eficiência das colheitas.",
    "Sem a matéria-prima do campo, grandes indústrias da cidade (como têxtil, alimentícia e de biocombustíveis) parariam.",
    "A preservação de florestas nativas dentro de propriedades rurais ajuda a regular o clima e as chuvas que abastecem as cidades."
];

// Seleção dos elementos do HTML
const botao = document.getElementById('btn-curiosidade');
const textoCuriosidade = document.getElementById('texto-curiosidade');

// Função para sortear e mostrar um fato
botao.addEventListener('click', () => {
    // Sorteia um índice aleatório do array de fatos
    const indiceAleatorio = Math.floor(Math.random() * fatos.length);
    
    // Exibe o fato na tela com um efeito simples
    textoCuriosidade.textContent = fatos[indiceAleatorio];
});