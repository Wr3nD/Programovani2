const zamestnanci = [
    {
      firstName: "john",
      lastName: "Řezník",
      sallary: 15600,
      position: "developer",
      idNumber: -3
    },
    {
        firstName: "Jullie",
        lastName: "Rezek",
        sallary: 4000,
        position: "accountant",
        idNumber: 40
    },
    {
        firstName: "john",
        lastName: "Režný",
        sallary: 18000,
        position: "developer",
        idNumber: -15
    },
    {
        firstName: "peter",
        lastName: "Režná",
        sallary: 2000,
        position: "receptionist",
        idNumber: 22
    },
    {
        firstName: "Dillan",
        lastName: "white",
        sallary: 13000,
        position: "developer",
        idNumber: 2
    },
    {
      firstName: "Jullie",
      lastName: "black",
      sallary: 4000,
      position: "accountant",
      idNumber: 7
  },
  {
      firstName: "john",
      lastName: "Green",
      sallary: 13000,
      position: "developer",
      idNumber: 5
  },
  {
      firstName: "peter",
      lastName: "brown",
      sallary: 2000,
      position: "receptionist",
      idNumber: -10
  },
  {
      firstName: "Dillan",
      lastName: "pičus",
      sallary: 13000,
      position: "developer",
      idNumber: -5
  }
  ];
  

  let numbers = zamestnanci.map(item =>  item.idNumber).sort(function(a, b){return a-b})
  let names = zamestnanci.map(item =>  item.lastName)


  console.log(numbers)
  console.log(names)
  let isIWantAlphabetical = false
  let button = document.getElementById("enter")
  let button2 = document.getElementById("enter2")
  button.addEventListener("click", sortArray)
  button2.addEventListener("click", myMagicFunction)
  
  function sortArray(){
    isIWantAlphabetical = !isIWantAlphabetical
    let results = names.sort(function (a, b) {
      return a.localeCompare(b, 'ces', { sensitivity: 'base' });
    })
    console.log(isIWantAlphabetical ? results : results.reverse())
  }
// zajímá mě ID zaměstnanců kteří jsou developeři a jejich plat je větší než 15000 + všechny kdo se jmenují white který je zárověn developer
  function myMagicFunction(){
      let developers = zamestnanci.filter(zamestnanec => checkAll(zamestnanec)).map( item => item.idNumber)
       console.log(developers)
  }

  function checkAll(zamestnanec){
    return checkPosition(zamestnanec.position)&& (zamestnanec.lastName === "white" || checkSallary(zamestnanec.sallary))
  }

  function checkSallary(sallary){
    return sallary> 15000
  }


  function checkPosition(dev){
    return dev === "developer"
  }
  
  
  
  /* function amount(item){
    return item.Amount;
  }
  
  function sum(prev, next){
    return prev + next;
  }*/
  

   
  /*let positions = array.filter(obj =>{
      return (obj.position === "developer");
      
  })
  
  let summing = positions.map(item => item.sallary).reduce((num1, num2) => num1 + num2)
  console.log("It will cost me ", summing, " $");

  */
  //let summing = array.map(item =>  item.position === "developer")//.reduce((num1, num2) => num1 + num2)