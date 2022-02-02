
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
        liMaior.classList.add('maior')
        const liMedia1 = document.createElement('li')
        liMedia1.classList.add('media1')
        const liMedia2 = document.createElement("li")
        liMedia2.classList.add('media2')
        const liMenor = document.createElement("li")
        liMenor.classList.add('menor')
    
        ul[0].appendChild(liMaior)
        ul[0].appendChild(liMedia1)
        ul[0].appendChild(liMedia2)
        ul[0].appendChild(liMenor)

    }
    createDiscos()
}

start.addEventListener('click',createElements)


//mover as li's
let countclick = 0
let countDiscos = ""
let lastDisco = ""

function selecionarDisco(event) {
    let torre = event.target
    if(torre.tagName === "UL"){
        countDiscos = torre.childElementCount
        if(countclick == 0 && countDiscos>0){
            lastDisco = torre.lastElementChild
            countclick += 1
        }else if(countclick==1){
            checkSizeLi(torre)
        }
          
    }
}

function checkSizeLi (torre){
    if(torre.childElementCount>0){
        let insidedisc = torre.lastElementChild
        let sizeDisc = insidedisc.offsetWidth
        let sizePutDisc = lastDisco.offsetWidth
        if(sizeDisc>sizePutDisc){
            torre.appendChild(lastDisco)
            countclick=0

        }else{
            alert('Os dicos maiores não podem ser em cima dos menores')
            countclick=0
        }
    }else{
        torre.appendChild(lastDisco)
        countclick=0
    }
}

containerTotal.addEventListener('click',selecionarDisco, event)