
function inverter(string) {
    let novaString = ''
    for (let i = string.length - 1; i >= 0; i--) {
        novaString += string[i]  
    }
    return novaString
}


string = prompt("Digite a string a ser invertida")
if (string !== null) { 
    let invertida = inverter(string);
    console.log("String invertida (usuário):", invertidaUsuario);
}