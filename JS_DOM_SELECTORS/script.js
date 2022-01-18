var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var allLiElements = document.querySelectorAll("li");
var removeElements = document.getElementsByClassName("delete");
console.log(removeElements);

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//allLiElements.forEach((element)=> element.addEventListener("click", ()=> element.classList.toggle("done")  ));
  allLiElements.forEach((elm)=> elm.addEventListener("click", function() {
    MakeDecoration(elm);
  }));
  removeElements.forEach((element)=> element.addEventListener("click", function() {
    DeleteElement(element);
  }));

function DeleteElement(e){
 
  e.classList.remove();
}
function MakeDecoration(element){
    element.classList.toggle("done");
}


function inputLength(){
   return input.value.length;
}
function createListElement(){
    var li = document.createElement("li");
    var box = document.createElement("button");
    box.appendChild(document.createTextNode("Enter"));
    li.addEventListener("click", function() {
      MakeDecoration(li);
      })
    //li.className = "done";
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(box);
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode == "13"){
            createListElement();
        }
}

