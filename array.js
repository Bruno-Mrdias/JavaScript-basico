const paises = ['Brasil', 'Paraguay', 'Argentina', 'Japão']

console.log(paises)

console.log('O país escolhido é: ' + paises[2])
console.log('O tamanho do array é: ' + paises.length)

paises.push('USA')
console.log(paises)
paises.pop()
console.log(paises)
paises.unshift('Germany')
console.log(paises)
console.log('O tamanho desse array é de: ' + paises.length)
paises.shift()
console.log(paises)


