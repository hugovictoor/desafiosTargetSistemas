let faturamentoMensal= [
{"Estado": "SP", "valor": 67836.43},
{"Estado": "RJ", "valor": 36678.66},
{"Estado": "MG", "valor": 29229.88},
{"Estado": "ES", "valor":27165.48},
{"Estado": "Outros", "valor": 19849.53}
]


function obterParticipaçãoEstados(faturamentoMensal){
    let faturamentoTotal = 0;

    for (let i = 0; i < faturamentoMensal.length; i++) {
    faturamentoTotal += faturamentoMensal[i].valor;
    };

    let porcentagemDeFaturamento;

    for (let i = 0; i < faturamentoMensal.length; i++) {
    porcentagemDeFaturamento = Math.round((faturamentoMensal[i].valor / faturamentoTotal) * 100);
    console.log("A porcentagem de faturamento de " + faturamentoMensal[i].Estado + " foi de " + porcentagemDeFaturamento + "%.");
    };
};

obterParticipaçãoEstados(faturamentoMensal);