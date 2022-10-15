let num = [5,8,4,5,10]
//num.sort()
num.push(7)

console.log(num)
console.log(num[1])
console.log(`O nº keys é ${num.length}.`)



/*let pos = num.indexOf(8)
console.log(`Ò valor 8 está na posição ${pos}`)
*/

let b = num.indexOf(5)
console.log(num.indexOf(9))

if (b == -1) {
    console.log(`O Valor não foi encontrado`)
} else {
    console.log(`O valor encontrado foi ${b}`)
}