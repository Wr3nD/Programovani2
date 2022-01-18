const array = [1,2,6,20]

const double = []
const newArray = array.forEach((num) => {
   double.push(num * 2)
})
console.log("for each", double);

// map , filter, reduce 

const mapArray = array.map((num) =>{
    return num * 2
}) 
// Map vytvoří vlastně ze stávajícího arraye nový array a ten pak vrací pomocí return 
console.log("map",mapArray);
 
// filter  podle any condition vrací hodnoty který jsou true / false
const filterArray = array.filter(num => num > 5)

console.log("filter", filterArray);

//reduce
// accumulator is somthing where we can store a function
const reduceArray = array.reduce((accumulator, num) =>{
    return accumulator + num
}, 0)

console.log("reduce", reduceArray)