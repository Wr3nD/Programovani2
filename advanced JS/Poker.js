const cards1 = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"]

let firstValue= prompt("napiš handu jedna", "hodnota handy1")
let secondValue= prompt("napiš handu dva", "hodnota handy2")
console.log(compare(firstValue,secondValue))





function compare(hand1,hand2){
   const hand1type = getHandType(hand1)
   const hand2type = getHandType(hand2)

   const valueOfHand11 = cards1.indexOf(hand1[0])
   const valueOfHand12 = cards1.indexOf(hand1[1])
   const valueOfHand21 = cards1.indexOf(hand2[0])
   const valueOfHand22 = cards1.indexOf(hand2[1])
   
   if (hand1type == "pocket pair" && hand2type == "pocket pair"){
    if(valueOfHand11>valueOfHand21){
        return hand1 + " its stronger"
    }else if(valueOfHand11 == valueOfHand21){
        return "handy jsou si rovny"
    }else{
        return hand2 + " its stronger"
    }
   }
   if (hand1type == "pocket pair" && hand2type == "high cards"){
        return "handa č1 je silnější"
   }
   if (hand1type == "high cards" && hand2type == "pocket pair"){
    return "handa č2 je silnější"
}
    if (hand1type == "high cards" && hand2type == "high cards"){
     if(valueOfHand11>valueOfHand21){
        return hand1 + " its stronger"
      }else if(valueOfHand11 < valueOfHand21){
        return hand2 + "handy 2 je silnější"
        }else{
            if(valueOfHand12>valueOfHand22){
                return hand1 + " its stronger"
              }else if(valueOfHand12 < valueOfHand22){
                return hand2 + "handy 2 je silnější"
                }else{
                    return "handa jsou stejné"
    }
        }
}
}
function getHandType(hand){
    if (hand[0] == hand[1]){
        return "pocket pair"
    } else {
        return "high cards"
    }
}