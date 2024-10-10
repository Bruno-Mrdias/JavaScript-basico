// Exercicio 2 --- Estrutura de Decisão 

// Percorrer uma lista de cidades contendo São Paulo', 'Passa-Quatro', 'Cruzeiro', 'Itanhandu', 'São Lourenço
// Para cada item, verificar se a cidade Cruzeiro está presente na lista
// Caso esteja, Avisar
//Caso não seja o elemento procurado, avisar
// Número da execução


// Exucução: 1
//Cidade: Sao paulo
//Encontrado ou NÂO Encontrado
// ------------------------

const cidades = ['São Paulo', 'Passa-Quatro', 'Cruzeiro', 'Itanhandu', 'São Lourenço'];

cidades.forEach((element, index) => {
    
    console.log("Execução: " + (index + 1));
    console.log('Cidade: ' + element);

    if (element == 'Cruzeiro') {
        console.log('Cidade Encontrada');
        
    }else{
        console.log('Cidade não encontrada');
    }

    console.log('------------------------');
    
    
});