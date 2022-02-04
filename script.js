
const containerTotal = document.getElementById('containerTotal')

const header = document.createElement('header')
const h1 = document.createElement("h1")
h1.innerText = "Torre de Haroi"
const buttonIniciar = document.createElement('button')
buttonIniciar.innerText = "Iniciar"
buttonIniciar.id = "iniciar"
const buttonReset = document.createElement('button')
buttonReset.innerText = "Reset"
buttonReset.id = "reset"

header.appendChild(h1)
header.appendChild(buttonIniciar)
header.appendChild(buttonReset)

containerTotal.appendChild(header)


const main = document.createElement('main')
main.id ="main"

containerTotal.appendChild(main)

const start = document.getElementById('iniciar')
const resetar = document.getElementById("reset")

let count = false

function createElements(){
    if(count==false){
        for(let i =1; i<4;i++){
            const divDiscos = document.createElement('ul')
            divDiscos.id = "container-torre" + i
            divDiscos.classList.add("container_total")
    
            main.appendChild(divDiscos)
        }
        createDiscos()
    }
}

function createDiscos(){
    const torre1 = document.getElementById("container-torre1")

    const liMaior = document.createElement('li')
    liMaior.classList.add('maior')
    const liMedia1 = document.createElement('li')
    liMedia1.classList.add('media1')
    const liMedia2 = document.createElement("li")
    liMedia2.classList.add('media2')
    const liMenor = document.createElement("li")
    liMenor.classList.add('menor')

    torre1.appendChild(liMaior)
    torre1.appendChild(liMedia1)
    torre1.appendChild(liMedia2)
    torre1.appendChild(liMenor)

    count = true
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
            isWinner()
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
            countclick = 0

        }else{
            alert('Os dicos maiores não podem ser em cima dos menores')
            countclick = 0
        }
    }else{
        torre.appendChild(lastDisco)
        countclick = 0
    }
}

containerTotal.addEventListener('click',selecionarDisco)

function isWinner(){
    // const torre1 = document.getElementById('container-torre1')
    // const torre2 = document.getElementById('container-torre2')
    // const torre3 = document.getElementById('container-torre3')
    if(main.childNodes[1].childElementCount == 4|| main.childNodes[2].childElementCount == 4){
        removeAll()
        winnerMensage()
    }
 }

 function winnerMensage (){
    const section = document.createElement('section')
    section.classList.add('winner')
    const img = document.createElement('img')
    img.src = 'css/winner.gif'
    const h2 = document.createElement('h2')
    h2.innerText = "Parabéns você ganhou !!! Click em reset para jogar de novo"

    section.appendChild(img)
    section.appendChild(h2)

    main.appendChild(section)
     
 }



function removeAll(){
    let remover = main.childNodes
    
    for(let i = 0;i<remover.length;i++){
         remover[i].remove()
      }
    // let remove = remover.forEach((elemt)=>elemt.remove())
    // console.log(remove)
    if(remover.length>0){
        let removeAgain = remover[0].remove()
        return removeAgain
    }else{
        return remover
    }
    
    
}


function resetAll(){
    removeAll()
    count = false
    createElements()
}

resetar.addEventListener('click',resetAll)