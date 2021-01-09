document.querySelector(".add").onclick = function () {
    const addButton = document.querySelector(".formulario")
    addButton.style.display = "flex"

}


document.querySelector(".aceptar").onsubmit = function () {
    event.preventDefault()
    const addButton = document.querySelector(".tarjetas")
    addButton.style.display = "flex"
}

function makeCard(values) {
    const {
        name,
        lastName,
        mail,
        phone,
        country,
        url,
        comment,
    } = values

    const article = document.createElement('card')
    article.classList.add('card')
    article.innerHTML = `

<div class="icons">
    <i class="far fa-edit"></i>
    <i class="fas fa-times-circle"></i>
</div>
<figure>
    <img src="${url.value}" width="200px" height="200px" alt="">
</figure>
<div>
    <h2>${name.value} ${lastName.value}</h2>
</div>
<div>
    <h2>${phone.value}</h2>
    <h2>${mail.value}</h2>
</div>
<div>
    <h2>${country.value}</h2>
</div>
<div>
    <p>${comment.value}</p>
</div>
`

return article
}


function main() {
    const name = document.getElementById("js_name")
    const lastName = document.getElementById("js_lastname")
    const mail = document.getElementById("js_mail")
    const phone = document.getElementById("js_phone")
    const country = document.getElementById("js_country")
    const url = document.getElementById("js_url")
    const comment = document.getElementById("js_comment")
    const form = document.querySelector("form")
    const container = document.getElementById("container")

    form.onsubmit = function (event) {
        
        event.preventDefault()
        const addButton = document.querySelector(".tarjetas")
        addButton.style.display = "flex"
        container.appendChild(makeCard({
            name,
            lastName,
            mail,
            phone,
            country,
            url,
            comment,
        }))
        this.reset()
    }
}

main()

document.querySelector(".salida").onclick = function salida () {
    const salida = document.querySelector(".tarjetas")
    salida.style.display = "none"
}