//config
export const $ = (selector) => document.querySelector(selector)
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// tools
function removeElement(element) {
    return () => element.style = "max-height:0px;"
}
function setElement(element) {
    element.style = "max-height:1000px"
}

//utils
export async function fadeIn(element) {
    await sleep(300)
    element.style = "display:inherit"
    setElement(element)
    element.classList.remove('fade-out')
    element.classList.add('fade-in')
    element.style = "display:inheri"
}

export async function fadeOut(element) {
    await setTimeout(removeElement(element), 300)
    element.classList.remove('fade-in')
    element.classList.add('fade-out')
    await sleep(300)
    element.style = "display:none"
}