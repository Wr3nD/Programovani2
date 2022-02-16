const main = document.querySelector("#myId")
main.innerHTML = ""

const url = "//dummyimage.com/200x300"
for(let x =0;x<10;x++){
    main.innerHTML += `<img>`
}


const imgs = document.querySelectorAll("img")
imgs.forEach((el,index)=> {
    if(!el.getAttribute("src")){
        const myImg = url + `/${myRandomColors()}/${myRandomColors()}&text=New Image ${index+1}`
        el.setAttribute("src", myImg)
        
    }
})

function myRandomColors(){
    return Math.random().toString(16).substring(2,6)
}


const eles = document.querySelectorAll(`a[href="#"]`)
console.log(eles)
eles.forEach((el,index) => {
    console.log(el)
    if(index % 3 == 0){
        el.classList.add("blue")
    }
    if(index % 2 == 0){
        el.classList.add("red")
    }
    el.setAttribute("target","_blank")
})