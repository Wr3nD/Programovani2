const output = document.querySelector(".output")
const btn = document.querySelector("button")

btn.addEventListener("click",addListItem)


const ul = document.querySelector("ul")
const eles = ul.querySelectorAll("li")
let counter = 0
eles.forEach((li)=> {
    adder(li)
    
})

function adder(li){
    counter++
    li.counter = 0
    const span = document.createElement("span")
    span.textContent = li.counter
    span.classList.add("counter")
    li.textContent = `New List Item `
    li.append(span)
    li.addEventListener("click",updateEle,)
}



function updateEle(e){
    console.log(e.target.counter)
    const el = e.target
    const span = el.querySelector(".counter") 
    
    el.counter++
    span.textContent = el.counter
    
    
    if(el.classList.contains("red")){
        el.classList.add("box")
        
    }
    el.classList.toggle("red")
}

function addListItem(){
    const li = document.createElement("li")
    adder(li)
    ul.append(li)
}

// ul.addEventListener("click",(e)=> {
//     console.log(e.target)
//     const el = e.target
//     console.log(el.textContent)
//     if(el.textContent == "One"){
//         el.classList.toggle("red")
//     }
//     else if (el.textContent == "Two"){
//         el.classList.toggle("box")
//     } else{
//         el.classList.toggle("box")
//     }
// })