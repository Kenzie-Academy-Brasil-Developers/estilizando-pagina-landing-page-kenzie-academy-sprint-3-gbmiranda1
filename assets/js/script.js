const btnSandwich = document.getElementById('btn-sandwich')

function mostrarNavMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

btnSandwich.addEventListener('click', mostrarNavMenu)