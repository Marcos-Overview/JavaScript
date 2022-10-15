//alert(`Olá`)

function verificar(){

    var data = new Date()
    var ano = data.getUTCFullYear() // ano atual
    var fano = document.getElementById('txtano')//formulário, valor digitado
    var res = document.querySelector('div#res') 

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade} anos de idade!`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // <img id='foto>

        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //CRIANÇA   
                img.setAttribute('src', 'fotocriançah.jpg')
            } else if (idade < 21) {
                //JOVEM 
                img.setAttribute('src', 'fotojovemh.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'fotoadultoh.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'fotoidosoh.jpg')
            }


        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'fotocriançam.png')   
            } else if (idade < 21) {
                //JOVEM
                img.setAttribute('src', 'fotojovemm.jpg') 
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'fotoadultom.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'fotoidosom.jpg')
            }
        }
        
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)

    }

}