const output = document.querySelector(".output")

const url = "//dummyimage.com/200x300"
for(let i = 0;i < 20; i++){
    const img = document.createElement("img")
    const myImg = url + `/${myRandomColors()}/${myRandomColors()}&text=New Image ${i+1}`
    img.setAttribute("src",myImg)
    img.classList.add("box")
   // img.style.border = `${i+1}px solid black`
    output.append(img)
    if(i%2 == 0){
        img.classList.add("red")
        img.classList.remove("box")
    }
}

function myRandomColors(){
    return Math.random().toString(16).substring(2,6)
}


// const el1 = document.createElement("div")
// const el2 = document.createElement("h1")
// el2.textContent = "hello world"
// const el3 = document.createElement("h2")
// el3.textContent = "Prepend Element"
// const el4 = document.createElement("h2")
// el4.textContent = "Append Element"

// const el5 = document.createElement("h1")
// el5.textContent = "Five"
// const el6 = document.createElement("h1")
// el6.textContent = "Six"



// el1.append(el2)
// el1.prepend(el3)
// el1.append(el4)
// console.log(el1)
// // el1.innerHTML = "<h1>Hello World</h1>"
// output.append(el1)
// el2.style.backgroundColor = "red"

// document.body.append(el2)

// const val1 = output.append(el5)
// const val2 = output.appendChild(el6)
// const val3 = output.insertBefore(el5,el6)

// const myText1 = document.createTextNode("helloworld")

// val2.appendChild(myText1)