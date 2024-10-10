const cidades = ['São Paulo', 'Passa-Quatro', 'Cruzeiro', 'Itanhandu', 'São Lourenço'];

cidades.forEach((element, index) => {
    console.log('Execução número:' + index);
    console.log(element);
});

for (let index = 0; index < cidades.length; index++) {
    console.log('Esse comando foi executado:' + index); 
    console.log(cidades[index]);
}


const frase = ['Hello', 'my', 'name', 'is', 'Bruno'];

frase.forEach(element => {
    console.log(element);
    
})


for (let i = 0; i < 5; i++){
    console.log(frase[i]);
    
}