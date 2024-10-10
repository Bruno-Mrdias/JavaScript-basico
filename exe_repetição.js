//Exercicio 1 - Estrutura de repetição

//Percorrer uma lista de nomes contendo os nomes: Eduardo, Maria, Fernando, João e Francisco
//Numero da exucução começando em 1 
//Nome que esta sendo executado 
//Separadores

//Execução: 1
//nome: Eduardo
// --------------------

const nome = ['Eduardo', 'Maria', 'Fernando', 'João', 'Francisco'];
              // 0         1          2        3           4
            //  1           2           3       4           5

for (let index = 0; index < nome.length; index++) {
    
    console.log('Execução:'+ (index + 1));
    console.log('Nome:' + nome[index])
    console.log('-----------------');
    
}
    
   
nome.forEach((element, i) => {
    console.log(('Execução: ' + (i + 1)));
    console.log('Nome: ' + element);
    console.log('-----------------');
    
    
});