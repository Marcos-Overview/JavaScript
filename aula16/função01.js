function parimpar(n) {
    if(n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimpar(2) // com variavel
console.log(`O numero é ${res}. `)

console.log(parimpar(11)) // sem variavel