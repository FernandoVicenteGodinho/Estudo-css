const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e59935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#d81b60',
    header: '#64dd17',
    nav: '#00acc1',
    main: '#304ffe',
    footer: '#9f6581',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}
document.querySelectorAll('.tag').forEach(elemento => {
    const tagName = elemento.tagName.toLowerCase()

    elemento.getElementsByClassName.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0]) 
    }
})