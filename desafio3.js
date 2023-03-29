let faturamentoMensal = 
[
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]

function obterDadosFaturamento(faturamentoMensal){
let faturamentoTotal = 0;
let diasDeFaturamento = 0;
let valorMaior = 0;
let diaMaiorFaturamento;
let diaMenorFaturamento;

for (let i = 0; i < faturamentoMensal.length; i++) {
    if (faturamentoMensal[i].valor > 0){
        faturamentoTotal += faturamentoMensal[i].valor;
        diasDeFaturamento++;
    };

    if(faturamentoMensal[i].valor > valorMaior){
        valorMaior = faturamentoMensal[i].valor;
        diaMaiorFaturamento = faturamentoMensal[i].dia;
    };    
};

let valorMenor = valorMaior;

for (let i = 0; i < faturamentoMensal.length; i++) {
    if(faturamentoMensal[i].valor > 0){
        if(faturamentoMensal[i].valor < valorMenor){
        valorMenor = faturamentoMensal[i].valor;
        diaMenorFaturamento = faturamentoMensal[i].dia;
    }; 
};
};

let mediaMensal = faturamentoTotal / diasDeFaturamento;
let diasMaioresQueMedia = 0;

for (let i = 0; i < faturamentoMensal.length; i++) {
    if(faturamentoMensal[i].valor > mediaMensal){
        diasMaioresQueMedia++;
    };
};


console.log("O dia de maior faturamento foi: " + diaMaiorFaturamento + " com um faturamento de: " + faturamentoMensal[diaMaiorFaturamento - 1].valor + " reais.");
console.log("O dia de menor faturamento foi: " + diaMenorFaturamento + " com um faturamento de: " + faturamentoMensal[diaMenorFaturamento - 1].valor + " reais.");
console.log(diasMaioresQueMedia + " dias em que o faturamento foi maior do que a média.");
    
};

obterDadosFaturamento(faturamentoMensal);