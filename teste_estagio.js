// RESPOSTAS
// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isIncludedFibonacci(input) {
    let values = [];
    for (let i = 0; i < input; i++) {
        let len = values.length;
        if (len < 2) {
            values.push(i);
        } else {
            const sum = values[len - 1] + values[len - 2];
            if (sum <= input) values.push(sum);
        }
    }
    const hasNumber = values.includes(input);
    const message = hasNumber
        ? `O número '${input}' faz parte da sequência de Fibonacci`
        : `O número '${input}' NÃO faz parte da sequência de Fibonacci`;
    console.log(message);
    return message
}
isIncludedFibonacci(34);
isIncludedFibonacci(100);

// 5) Escreva um programa que inverta os caracteres de um string.
function reverseString(string) {
    let newString = ""
    for(i in string){
        newString += string[string.length - i - 1]
    }
    console.log("Sua string ao contrário: " + newString);
    return newString
}
reverseString("Estágio Ribeirão Preto - 2024")