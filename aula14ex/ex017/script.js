function tabuada() {
    let  num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if( num.value.length == 0 ) {
        alert('Digite um numero, por favor!')
    } else{       
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = '' //limpar a tabuada pra n deixar os valores da operação anterior
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            tab.appendChild(item)
            c++
        }
    }
}