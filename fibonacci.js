function fibonacci(numero) {
    let array = [0,1]
    for (let index = 0; index < numero; index++) {
        const element = array[index] + array[index+1];
        array.push(element);
    }
    if (array.includes(numero)) {
        return "O valor pertence a sequência de Fibonacci!";
    } else {
        return "O valor não pertence a sequência de Fibonacci!";
    }
}

let teste = Number(prompt("Digite um número para ser verificado:"));
alert (fibonacci(teste))