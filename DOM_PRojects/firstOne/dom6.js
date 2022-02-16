const output = document.querySelector(".output")
const ulList = document.querySelector("ul")

for (let i = 0; i < 10; i++) {
    const li = document.createElement("li")
    li.textContent = `${i+4}`
    ulList.append(li)   
}

console.log(ulList.childNodes)
console.log(ulList.children)

ulList.childNodes.forEach(val => {
   // console.log(val)
})

for (let i = 0; i < ulList.children.length; i++) {
   // console.log(ulList.children[i])
    const el = ulList.children[i]
    console.log(el.previousElementSibling)
    const prev = el.previousElementSibling
    if(prev!=null){
        prev.style.color = "red"
        prev.textContent += ` Parent : ${el.parentElement.tagName}
        <br> ParentNode : ${el.parentNode.tagName}`
    }
}
// const output = document.querySelector(".output")

// for (let i = 0; i < 5; i++) {
//     const tag = document.createElement("h1")
//     tag.textContent = `HI${i+2}`
//     output.append(tag)
    
// }

// for (let i = 0; i < output.children.length; i++) {
//         //console.log(output.children[i])
//         const el = output.children[i]
//         console.log("tady",el.previousElementSibling)
//      }