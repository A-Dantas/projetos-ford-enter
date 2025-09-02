function checkIsNumber(a, mensagemPersonalizada){
    while (isNaN(a) || a < 0){
        alert(`Valor incorreto. Insira um número\n`);
        a = parseFloat(prompt(mensagemPersonalizada));
    }
    return a;
}


// Dados de entrada da distancia percorrida (Valor de deslocamento de casa até o trabalho)
let distancia_Percorrida = parseFloat(prompt("Qual a distância percorrida da sua casa até seu trabalho (em km)?"));
distancia_Percorrida = checkIsNumber(distancia_Percorrida, "Qual a distância percorrida da sua casa até seu trabalho (em km)?");

// Dados de entrada do consumo médio (Valor de consumo de combustível)
let consumo_Medio = parseFloat(prompt("Qual o consumo médio do seu veículo (em km/L)"));
consumo_Medio = checkIsNumber(consumo_Medio, "Qual o consumo médio do seu veículo (em km/L)");

// Cálculo de consumo necessário para o desclocamento.
let consumo_Necessario_Litros = distancia_Percorrida/consumo_Medio;
alert(`O consumo necessário é de ${parseFloat(consumo_Necessario_Litros.toFixed(0))} litros`);

// Dados de entrada da quantidade de postos (Saber quantos postos foram analisados e o valor do combustível em cada um)
let quantidade_Postos = parseInt(prompt("Em quantos postos você pesquisou?"));
quantidade_Postos = checkIsNumber(quantidade_Postos, "Em quantos postos você pesquisou?");

// Estrutura de repetição para verificar o menor valor do combustível e realizar a soma de todos os valores digitados.
let menor_Valor_Pesquisado;
let soma_Valores_Pesquisados = 0;
for (let i = 1; i <= quantidade_Postos; i++) {
    let preco_Posto = parseFloat(prompt(`Digite o valor encontrado (em R$) no posto ${i}`));
    preco_Posto = checkIsNumber(preco_Posto, `Digite o valor encontrado (em R$) no posto ${i}`);
    if (i === 1 || preco_Posto < menor_Valor_Pesquisado) {
        menor_Valor_Pesquisado = preco_Posto;
    }
    soma_Valores_Pesquisados += preco_Posto;
}

// A média de valores de preços de combustíveis na região pesquisada
let media = soma_Valores_Pesquisados/quantidade_Postos;

// O gasto diário com combustível para realizar o trajeto
let gasto_Diario = 2*(consumo_Necessario_Litros*menor_Valor_Pesquisado);

document.writeln(
    `<br>O consumo necessário é ${consumo_Necessario_Litros} litros
    <br>O menor valor pesquisado é R$ ${menor_Valor_Pesquisado}
    <br>A média dos valores pesquisados é R$ ${media.toFixed(2)}
    <br>O gasto diário (ida e volta) é R$ ${gasto_Diario.toFixed(2)}`); 