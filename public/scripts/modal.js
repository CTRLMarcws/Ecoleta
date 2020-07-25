const form = document.querySelector("form")
let valorPesquisa = 'name'

form.addEventListener('click', (event) => {
    event.preventDefault()
    valorPesquisa = form.option.value
    console.log(form.option.value)
})
