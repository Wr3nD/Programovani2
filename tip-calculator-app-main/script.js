const firstField = document.getElementById("bill")
const secondField = document.getElementById("tip")
const thirdField = document.getElementById("numberOfPeople")
const load1 = document.getElementById("load1")
const load2 = document.getElementById("load2")
// const btns = document.getElementsByClassName(".btn-left")


let value1 = ""
let value2 = ""
let value3 = ""
let tipCount = ""
let tiper = ""
let total = ""
firstField.addEventListener("keyup",(e)=>{
     value1 = e.target.value
    console.log(e.target.value)
    tipAmount(value1,tipCount,value3)
    totalAmount(value1,tipCount,value3)
    })
secondField.addEventListener("keyup",(e)=>{
     value2 = e.target.value
    console.log(e.target.value)
    tipAmount(value1,value2,value3)
    totalAmount(value1,value2,value3)
    })
thirdField.addEventListener("keyup",(e)=>{
     value3 = e.target.value
    console.log(e.target.value)
    tipAmount(value1,tipCount,value3)
    totalAmount(value1,tipCount,value3)
    })


const tip = (number) =>{
     tipCount = number
     console.log(tipCount)
     tipAmount(value1,tipCount,value3)
     totalAmount(value1,tipCount,value3)
}



const tipAmount = (bill,selectedTip,numberOfPeople) =>{
    if(value1 !== "" && tipCount !== "" && numberOfPeople === ""){
       
         tiper = (bill*(selectedTip/100)).toFixed(2)
        return load1.innerHTML = "$"+tiper
    }else if(value1 !== "" && tipCount !== "" && numberOfPeople !== ""){
        tiper = ((bill*(selectedTip/100))/numberOfPeople).toFixed(2)
        return load1.innerHTML = "$"+tiper
    }else{
        return load1.innerHTML = "$0.00"
    }
}

const totalAmount = (bill,selectedTip,numberOfPeople) =>{
    if(value1 !== "" && tipCount !== "" && numberOfPeople === ""){
        total = parseInt((bill*(selectedTip/100)))
        total += parseInt(bill)
        return load2.innerHTML = "$"+total
    }
    else if(value1 !== "" && tipCount !== "" && numberOfPeople !== ""){
    total = parseInt((bill*(selectedTip/100)))
    total += parseInt(bill)
       return load2.innerHTML = "$"+total
    }else{
        return load1.innerHTML = "$0.00"
    }
}

const rework= () =>{
    console.log("i clicked")
    firstField.value = ""
    secondField.value = ""
    thirdField.value = ""
    load1.innerHTML = "$0.00"
    load2.innerHTML = "$0.00"
    
}
// thirdField.addEventListener("keydown",tipAmount(value1,tipCount,value3))



    





