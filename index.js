const menuEl = document.getElementById('menu')
const abrirEl = document.getElementById('abrir')
const cerrarEl = document.getElementById('cerrar')

//abrir menu
abrirEl.addEventListener('click', () => {
    menuEl.classList.add('visible')
})
//cerrar menu
cerrarEl.addEventListener('click', () => {
    menuEl.classList.remove('visible')
})