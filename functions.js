"use Strict"

// ======== obecná funkce pro náhodný prvek z pole elementů (arr) ======
//======================================================================
let randomElementFromArray = (arr) => {

let randomPositionFromNumber = Math.floor(Math.random() * arr.length)  //náhodné číslo z délky pole čísla

return arr[randomPositionFromNumber]
}

// ======== ?????? ======
//======================================================================




// setInterval(() => {
//     console.log (generateNum(arrNumber))
// }, 1000); 

