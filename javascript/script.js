/*function sayHello() {

    console.log("Hello");
}

sayHello();

var sayBye = function() {
    console.log("Bye");
}
sayBye(); 
FUNKCE
function sing(song){
    console.log(song);   
} 
sing("laa dee daa");
sing("helloooo");
sing("backreet back allright");

function multiply(a, b){
    return a*b;
    
}

alert(multiply(3,4));
*/
/*var list =  ["tiger","cat","bear","bird"];



var functionList = [function apple(){
    console.log("apple");
}]


*/
/*var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra","shazam","boo"],
    shout: function(){
        console.log("AHHH");
    }
};

var list = [
    {
        username: "andy",
        password: "secre"
    },
    {
        username: "jess",
        password: "123"
    }
]*/
/*
var database = [
    {
        username: "andrei",
        password: "supersecret",
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "ingrid",
        password: "777",
    }
];
var newsFeed = [
    {
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

function isUserValid(username, password){
    for(var i=0; i < database.length; i++){
        if(database[i].username === username && database[i].password === password){
            return true;
        } 
    }
    return false;
}

function signIn(username,password) {
    if(isUserValid(username, password)){
        console.log(newsFeed);
    } else{
        alert("sorry, wrong username or password");
    }
    }
    
    
var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt("Whats your password?");

signIn(userNamePrompt, passwordPrompt);*/
/*
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy!"

];
var todosImp = [
    "clean roomL",
    "brush teethL",
    "exerciseL",
    "study javascriptL",
    "eat healthy!"
    
];
var todosLength = todos.length;
for (var i=0; i < todosLength; i++){
  console.log(i);
}
todos.forEach(function(todo, i) { // todo je počet prvků , i je index
    console.log(todo, i);
})
function logTodos(todo, i){
    console.log(todo, i);
}
todos.forEach(logTodos);
todosImp.forEach(logTodos);

var counterOne = 10;
    while (counterOne > 0){
        console.log(counterOne);
        counterOne++;
    }

    var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0);
 */
const karty = "AKQJT98765432"
let ragnarovaHanda = [];

ragnarovaHanda.push(karty[1], karty[1]);

let flop = [];

if(ragnarovaHanda.includes("A")){
    flop.push(karty[4], karty[5], karty[6]);
} else if(ragnarovaHanda[0] === "K" && ragnarovaHanda[1] === "K"){
    flop.push(karty[0], karty[10], karty[11]);
}
console.log(`flop je ${flop[0]}${flop[1]}${flop[2]},když mám ${ragnarovaHanda[0]}${ragnarovaHanda[1]}, divný!`);



