// Complete the below questions using this array:


const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];
//array[0]["username"]
//array.forEach(element => {element + "!"});
//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//const double = ["username"];
// array.forEach(() => { double.push(username[0] + "!")}) 
arrray[0]
let newArray = []
array.forEach(user => {
	 user.username += "!";
	 newArray.push(user.username);
})
console.log("new array ", newArray);



//Create an array using map that has all the usernames with a "? to each of the usernames
let newArray = []
array.map(user => {
  let { username } = user;
	return username + "?";
})
console.log("new array ", newArray);


//Filter the array to only include users who are on team: red

let result = array.filter(obj => {
   return obj.team === "red";
})
console.log("new array ", result);
//Find out the total score of all users using reduce

let reduceArray = array.reduce((acc, user) =>{
  return acc + user.score;
},0)
console.log("reduce", reduceArray)

// (1), what is the value of i? 0,1,2,3,4,5
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {	return num * 2;})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
  user.items = user.items.map(item =>{
    return item + "!";
  })
  return user;
})