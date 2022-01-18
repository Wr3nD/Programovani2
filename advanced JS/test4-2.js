const USERS = [
  {"name":"Conrad","surname":"Cotner","age":18},
  {"name":"Mindi","surname":"Taplin","age":42},
  {"name":"Jacquetta","surname":"Chirico","age":23},
  {"name":"Rubin","surname":"Vath","age":36},
  {"name":"Tracey","surname":"Brawley","age":45},
  {"name":"Adella","surname":"Zuccaro","age":32},
  {"name":"Jeffie","surname":"Vrooman","age":34},
  {"name":"Susanne","surname":"Luu","age":48},
  {"name":"Marcel","surname":"Corner","age":43},
  {"name":"Winona","surname":"Fountain","age":31}
];

const USERS_ARR = [
  "Conrad Cotner 18",
  "Mindi Taplin 42",
  "Jacquetta Chirico 23",
  "Rubin Vath 36",
  "Tracey Brawley 45",
  "Mindi Zuccaro 32",
  "Jeffie Vrooman 34",
  "Susanne Luu 48",
  "Marcel Cotner 43",
  "Winona Fountain 31"
];


/*
  Vypište čísla dělitelná 3, která jsou v poli numberArray jako vstupní parametr.
  Výsledná čísla oddělená čárkou vraťte jako návratovou hodnotu ve stringu.

  Např. getNumbersBy3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) => "3,6,9"
 */
function getNumbersBy3(...numberArray) {
  // TODO doplňte zde
return numberArray.filter(x => x % 3 === 0).toString();
}

console.log("getNumbersBy3", getNumbersBy3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) === "3,6,9");


/*
  Seřaďte pole uživatelů podle name podle abecedy OBRÁCENĚ.
  
  Např. sortByNameDesc([{ name: "Conrad", surname: "Cotner", age: 12 }, { name: "Mindi", surname: "Taplin", age: 18 }])
    => [{ name: "Mindi", surname: "Taplin", age: 18 }, { name: "Conrad", surname: "Cotner", age: 12 }]
*/
function sortByNameDesc(array) {
  // TODO doplňte
  let result = array.sort((A,B) => B.name.localeCompare(A.name, "en"));
  console.log(result);

return result;
}

console.log("sortByNameDesc", JSON.stringify(sortByNameDesc(USERS)) === '[{"name":"Winona","surname":"Fountain","age":31},{"name":"Tracey","surname":"Brawley","age":45},{"name":"Susanne","surname":"Luu","age":48},{"name":"Rubin","surname":"Vath","age":36},{"name":"Mindi","surname":"Taplin","age":42},{"name":"Marcel","surname":"Corner","age":43},{"name":"Jeffie","surname":"Vrooman","age":34},{"name":"Jacquetta","surname":"Chirico","age":23},{"name":"Conrad","surname":"Cotner","age":18},{"name":"Adella","surname":"Zuccaro","age":32}]');


/*
  Zadané číslo zaokrouhlete na desítky.
  
  Např. roundBy10(12345) => 12350
*/
function roundBy10(num) {
  // TODO doplňte

return Math.round(num/10)*10;
}

console.log("roundBy10", roundBy10(12345) === 12350);


/*
  Ze zadaného textu, kde jsou slova oddělená mezerou vytvořte proměnnou, kde jsou jednotlivá slova
  malým písmem a oddělena podtržítkem (tzv. camel_case syntaxe). Na začátku ani na konci výsledku nesmí být podtržítko.
  
  Např. toCamelCaseBySpace("My favourite Color ") => "my_favourite_color"
*/
function toCamelCaseBySpace(text) {
  // TODO doplňte
let result = text.trim().split(" ");
result = result.map(item => item.toLowerCase());
result = result.join("_");
console.log(result);
return result;
}

console.log("toCamelCaseBySpace", toCamelCaseBySpace("My favourite Color ") === "my_favourite_color");


/*
  Ověřte, že zadaný text obsahuje kladné nebo záporné číslo a na konci obsahuje měnu, která má vždy tři
  velká písmena a je oddělena mezerou od čísla.
  
  Např. isNumWithCurrency("-1200 EUR") => true
*/
function isNumWithCurrency(text) {
  // TODO doplňte
  /*let result = false;
  let myText = text.split(" ");
  if (myText === 0) {
    return
  }
  if (myText.length != 2) {
    return
  }
  if myText[1]*/
// return text.match(/-*\d+ [A-Z]{3}/);
  console.log(text);
  let reg = RegExp("-*\\d+ [A-Z]{3}");
  console.log(reg);
return reg.test(text);
}

console.log("isNumWithCurrency", isNumWithCurrency("-1200 EUR") === true);

function isPositiveNumDecimalsByComma(text) {
  // TODO doplňte
  let red = RegExp("\\d+,\\d{2}");
  if (text[0] === "-" || text[0] === "0" && text[text.length-1] === "0" && text[text.length-2] === "0") {
    return false;
  }
  return red.test(text);
}

console.log("isPositiveNumDecimalsByComma", isPositiveNumDecimalsByComma("0,60") === true);
// NEMAZAT!!!
// DO NOT DELETE!!!
const fns = {
  sortByNameDesc,
  getNumbersBy3,
  roundBy10,
  toCamelCaseBySpace,
  isNumWithCurrency,
  isPositiveNumDecimalsByComma
};
