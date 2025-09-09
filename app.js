'use strict'

async function buscarImagens (raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens =  await response.json()
    console.log(imagens.message)
    return imagens.message
}



function pesquisar (){
    const search = document.getElementById('search')
    const botao  = document.getElementById('botao')

    botao.addEventListener('click', function(){
        const valorSearch = search.value;
        buscarImagens(valorSearch)
        
    })
    //const imagem = document.getElementById('pesquisa')
    //const novaImagem = document.createElement('img')
    //novaImagem.src = 
    //imagem.appendChild(novaImagem)
    
    
    
}


pesquisar()