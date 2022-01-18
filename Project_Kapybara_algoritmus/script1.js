let input1 = document.getElementById("ans1");
let input2 = document.getElementById("ans2");
let input3 = document.getElementById("ans3");
let input4 = document.getElementById("ans4");
let form = document.getElementById("form");
let inputButton = document.getElementById("1");

form.addEventListener("submit",()=> {
  console.log(algoritmus(input1.value,input2.value,input3.value,input4.value));  
} )
function algoritmus(ans1, ans2, ans3, ans4) {

  
  if (ans1.toLowerCase() === "ano") {
    return alert("Musíš Call!")
  }
    let rest = [ans2,ans3,ans4].filter((answer) => answer.toLowerCase() === "ano")
    return alert(rest.length >= 2 ? "call" : "fold")
  }

// inputButton.addEventListener("click", createAnswer);

// function createAnswer(){
// let answer = algoritmus(input1.value,input2.value,input3.value,input4.value);
// }