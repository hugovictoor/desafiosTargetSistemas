function callFibonacci(numberAsked){
let fibonacciSequence = [0, 1];
let n1 = 0, n2 =1, nextTerm;

for (let i = 0; i <= numberAsked; i+= n1) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

    fibonacciSequence.push(nextTerm) ;
};

if(fibonacciSequence.includes(numberAsked)){
    console.log("Pertence a sequência!");
} else {
    console.log("Não pertence a sequência ):");
};

console.log("Sequência fibo = " + fibonacciSequence)

};
callFibonacci(2584);