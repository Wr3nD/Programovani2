const a = document.querySelectorAll(".myEle")

a.textContent = "Hello World"
a.forEach((el,index) => {
    console.log(el)
    el.textContent = `"Hello World" ${index+1}`
})

//1. selec the element - update HTML of elements with inner HTML property value 
//2.Update color and background color of selected element
//3. apply various styling values to the style atribute with JS
//4. list out available style properties and try
const output = document.querySelector(".el")
const html = "<h1>Hello World</h1>"

output.innerHTML = html
output.style.color = "white"
output.style.backgroundColor = "purple"
output.style.border = "5px solid black"
output.style.padding = "10px"

const el = output.style
el.textTransform = "uppercase"

el.margin = "50px"
