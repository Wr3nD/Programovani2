const array = [1,2,3,4,5,6]
let isIWantAlphabetical 
const button = document.getElementById("enter")
button.addEventListener("click", sortArray)

const descend = array.sort((a, b) => a > b ? -1 : 1)



function myReverse(){
    const reversedArray = []
    const length = descend.length-1
    for( i = length; i >= 0; i-- ){
        reversedArray.push(descend[i])
        
    }
    
    return  reversedArray
    
}
function myReverse2(){
    const reversedArray = []
    const length = descend.length
    for( i = 0; i < length; i++ ){
        reversedArray.unshift(descend[i])
        
    }
    
    return  reversedArray
    
}
  
function sortArray(){
    isIWantAlphabetical = !isIWantAlphabetical
    const ress = isIWantAlphabetical ? descend  : myReverse2()
    console.log(isIWantAlphabetical,ress)
    
}

