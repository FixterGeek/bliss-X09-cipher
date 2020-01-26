//imports
import { sleep, fadeIn, fadeOut, $ } from './lib.js'
import cipher from './cipher.js';

// sections
const main = $('.main')
const result = $('.result')
const form = $('form')
const back = $('.icon')
const copy = $('#copy')

// functions
async function copyToClipboard() {
    let text = $('#text')
    navigator.clipboard.writeText(text.innerText)
    copy.classList.add("green")
    copy.innerText = "¡Copiado!"
    await sleep(2000)
    copy.classList.remove("green")
    copy.innerText = "Copiar al portapapeles"
}

function showResult(res) {
    fadeOut(main)
    fadeIn(result)
    let text = $('#text')
    text.innerText = res
}

function getData(e) {
    e.preventDefault()
    let form = Object.fromEntries(new FormData(e.target))
    if (!form.phrase || !form.offset || Number(form.offset) === NaN) return alert("Llena el formulario correctamente")
    if (form.offset > 129 || form.offset < 1) return alert("Selecciona un número entre 1 y 129")
    if (form.phrase.includes('ñ')) return alert("No uses caracteres especiales como la Ñ")
    let result
    if (form.cipher) {
        result = cipher.decode(form.offset, form.phrase)
    } else {
        result = cipher.encode(form.offset, form.phrase)
    }
    showResult(result)
}

function restart() {
    fadeOut(result)
    fadeIn(main)
}

// listeners
form.addEventListener('submit', getData)
back.addEventListener('click', restart)
copy.addEventListener('click', copyToClipboard)

