function calcular(faturamento, total) {
    let percentuais = {}
    
    for  (let i = 0; i < faturamento.length; i++) {
        let percentual = (faturamento[i].valor / total) * 100
        percentuais[faturamento[i].estado] = percentual.toFixed(2)
    }
    
    return percentuais;
}
const faturamento = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];

let total = 0;
for (let i = 0; i < faturamento.length; i++) {
    total += faturamento[i].valor   
}
    

const percentuais = calcular(faturamento, total)
console.log("Percentual por estado:")
for (let i = 0; i < faturamento.length; i++) {
    console.log(`${faturamento[i].estado}: ${percentuais[faturamento[i].estado]}%`)  
} 
    

