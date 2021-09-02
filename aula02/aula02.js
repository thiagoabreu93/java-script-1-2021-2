let num = 3

console.log(typeof num)

let div = num / 0

console.log(div)
console.log("10" / 2)
//console.log("3" + num)
console.log(num + "3")
console.log(num + 3)
//console.log("3", num)
console.log("3".concat(num))
console.log("3" - num)
console.log("O que!?" * 2)
console.log(0.1 + 0.7)

let soma = 0.1 + 0.7

if(0.8== soma){
    console.log("Deu certo!")
} else {
    console.log("Não deu certo!")
}

// Função Math

const raio = 2
const area = Math.PI * Math.pow(raio, 2)
console.log(Math.PI)
console.log(area)
console.log(typeof Math)

// função string

const exemplo = "Test3!"

console.log(exemplo.charAt(3))

// Spoiler função e expressões
    // function texto(){texto.toUppercase()}
const up = texto => texto.toUpperCase()
console.log(`teste... ${up('teste')}`)

console.log(exemplo.charCodeAt(3))
console.log(exemplo.indexOf('3'))

console.log(exemplo.substring(2))
console.log(exemplo.substring(0, 4))

console.log(exemplo.replace('3', 'e'))
console.log(exemplo.replace(/\d/, 'e'))
console.log(exemplo.replace(/\d/g, 'e'))

console.log(exemplo.replace(/\w/, 't'))
console.log(exemplo.replace(/\w/g, 't'))
