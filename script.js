
const containerTotal = document.getElementById('containerTotal')

const header = document.createElement('header')
const h1 = document.createElement("h1")
h1.innerText = "Torre de Haroi"
const buttonIniciar = document.createElement('button')
buttonIniciar.innerText = "Iniciar"
buttonIniciar.id = "iniciar"
const buttonReset = document.createElement('button')
buttonReset.innerText = "Reset"

header.appendChild(h1)
header.appendChild(buttonIniciar)
header.appendChild(buttonReset)

containerTotal.appendChild(header)


const start = document.getElementById('iniciar')

function createElements(){
    for(let i =1; i<4;i++){
        const divContainer = document.createElement('div')
        divContainer.id = "container-torre" + i
        divContainer.classList.add("container_total")

        const divVareta = document.createElement('div')
        divVareta.classList.add("vareta")
        const divDiscos = document.createElement('ul')

        divContainer.appendChild(divDiscos)
        divContainer.appendChild(divVareta)
        containerTotal.appendChild(divContainer)
    }
    function createDiscos(){
        const torre1 = document.getElementById("container-torre1")
        const ul = torre1.getElementsByTagName("ul")
        
        const liMaior = document.createElement('li')
        const liMedia1 = document.createElement('li')
        const liMedia2 = document.createElement("li")
        const liMenor = document.createElement("li")
    
        ul[0].appendChild(liMaior)
        ul[0].appendChild(liMedia1)
        ul[0].appendChild(liMedia2)
        ul[0].appendChild(liMenor)

    }
    createDiscos()
}

start.addEventListener('click',createElements)

function selecionarDisco(event) {
    let torre = event.target
    console.log(torre)
    if(torre.tagName === "UL"){
        let countDiscos = torre.childElementCount
        let lastDisco = torre.lastElementChild

    }

}

containerTotal.addEventListener('click',selecionarDisco, event)