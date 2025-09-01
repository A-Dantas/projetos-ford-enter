function verificarIsNumber(a, mensagemPersonalizada){
    while (isNaN(a)){
        alert(`Valor incorreto. Insira um número\n`);
        a = parseFloat(prompt(mensagemPersonalizada));
    }
    return a;
}

// O consumo necessário em litros para o descolamento da casa para o trabalho
let distancia_Percorrida = parseFloat(prompt("Qual a distância percorrida da sua casa até seu trabalho (em km)?"));
distancia_Percorrida = verificarIsNumber(distancia_Percorrida, "Qual a distância percorrida da sua casa até seu trabalho (em km)?");

let consumo_Medio = parseFloat(prompt("Qual o consumo médio do seu veículo (em km/L)"));
consumo_Medio = verificarIsNumber(consumo_Medio, "Qual o consumo médio do seu veículo (em km/L)");

let consumo_Necessario_Litros = distancia_Percorrida/consumo_Medio;
alert(`O consumo necessário é de ${parseFloat(consumo_Necessario_Litros.toFixed(0))} litros`);

// O local mais acessível para abastecimento de combustível
let quantidade_Postos = parseInt(prompt("Em quantos postos você pesquisou?"));
quantidade_Postos = verificarIsNumber(quantidade_Postos, "Em quantos postos você pesquisou?");

let menor_Valor_Pesquisado;
let soma_Valores_Pesquisados = 0;
for (let i = 1; i <= quantidade_Postos; i++) {
    let preco_Posto = parseFloat(prompt(`Digite o valor encontrado (em R$) no posto ${i}`));
    preco_Posto = verificarIsNumber(preco_Posto, `Digite o valor encontrado (em R$) no posto ${i}`);
    if (i === 1 || preco_Posto < menor_Valor_Pesquisado) {
        menor_Valor_Pesquisado = preco_Posto;
    }
    soma_Valores_Pesquisados += preco_Posto;
}

// A média de valores de preços de combustíveis na região pesquisada
let media = soma_Valores_Pesquisados/quantidade_Postos;

// O gasto diário com combustível
let gasto_Diario = 2*(consumo_Necessario_Litros*menor_Valor_Pesquisado);

document.writeln(`<br>O consumo necessário é ${consumo_Necessario_Litros} litros`);
document.writeln(`<br>O menor valor pesquisado é R$ ${menor_Valor_Pesquisado}`);
document.writeln(`<br>A média dos valores pesquisados é R$ ${media.toFixed(2)}`);
document.writeln(`<br>O gasto diário (ida e volta) é R$ ${gasto_Diario.toFixed(2)}`);