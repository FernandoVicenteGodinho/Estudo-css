window.onhashchange = function(e){ // window é a informação que aparece na t
                                    //ela onhashchange informação que aparece no link

    const oldURL = e.oldURL.split('#')[1] //  old URL é padrão para que ele pegue a url que passou
    const newURL = e.newURL.split('#')[1] // mesma coisa so que a que foio clicada
    const oldMenu = document.querySelector(`.menu a[href='#${oldURL}']`) // aqui para buscar dentro do html a classe
                                                                        // certinha, para adicionar e remover no final
    const newMenu = document.querySelector(`.menu a[href='#${newURL}']`)
    oldMenu && oldMenu.classList.remove('selected')// entra dentro da classe do html para remover o valor 
    newMenu && newMenu.classList.add('selected')
}