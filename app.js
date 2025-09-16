'use strict'

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    console.log(imagens.message)
    return imagens.message
}

function exibirImagens(imagens) {
    const gallery = document.getElementById('gallery')
    gallery.innerHTML = ''

    imagens.forEach(url => {
        const galleryItem = document.createElement('div')
        galleryItem.className = 'gallery-item'

        const img = document.createElement('img')
        img.src = url
        img.alt = 'Imagem de cachorro'

        galleryItem.appendChild(img)
        gallery.appendChild(galleryItem)
    })
}

async function realizarBusca() {
    const search = document.getElementById('search')
    const valorSearch = search.value.trim().toLowerCase()

    if (valorSearch) {
        const imagens = await buscarImagens(valorSearch)
        exibirImagens(imagens)
    }
}

function pesquisar() {
    const search = document.getElementById('search')
    const botao = document.getElementById('botao')

    botao.addEventListener('click', realizarBusca)

    search.addEventListener('keydown', async function(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            await realizarBusca()
        }
    })
}

pesquisar()
