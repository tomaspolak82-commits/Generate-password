"use strict"
// ===== proměné k checkboxům - níže bude kontrola přes proměná.checked
      // == inputy
let bigSmallCheckbox = document.querySelector("#idBigSmall")
let specialMarkCheckbox = document.querySelector("#idSpecialMark")
let numberCheckbox = document.querySelector("#idNumber")
let lengthInput = document.querySelector("#idLength")
      // == div pro heslo
let divForPass = document.querySelector("#forGeneratePassword")
      
//====== pole pro ze kterých bude generováno ======
// ================================================
let arrSmallLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let arrBigLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let arrSpecialMark = ["!", "@", "#", "$", "%", "^", "&"]
let arrNumber = ["0","1","2","3","4","5","6","7","8","9"] 

//====== prázdné proměné pro akci eventu ======
// ============================================

let writePassword = ""



// ====== akce po kliknutí na tlačítko "Vytvořit heslo" ======
// ===========================================================

let generateForm = document.querySelector("#generateForm")
generateForm.addEventListener("submit", (event)=> {
  event.preventDefault()
    
    // === generování hesla pouze z malých písmen - NIC NENÍ ZAŠKRTNUT ===
    if (bigSmallCheckbox.checked === false &&
      specialMarkCheckbox.checked === false &&
      numberCheckbox.checked === false
    ) {
    let howLongPassword = event.target[3].value  // načtení dat z inputu délka hesla

    writePassword = "" // vyčištění proměné po každém kliknutí
    divForPass.innerHTML = "" // vyčištění divu s heslem po každém kliknutí

    for (let i = 0; i<howLongPassword; i++ ) {
      writePassword += randomElementFromArray(arrSmallLetter)
     
    }
    }
    

    // === vypsání hesla do divu 
    let addPara = document.createElement("p")
    addPara.innerHTML = `${writePassword}`
    document.querySelector("#forGeneratePassword").appendChild(addPara)

    event.target[3].value = ""  //vyčíštění inputu po všech úkonech

    
})



// setInterval(() => {
//     console.log (finalNumber)
// }, 1000); 


// console.log (randomElementFromArray(arrSmallLetter))
// console.log (randomElementFromArray(arrBigLetter))
// console.log (randomElementFromArray(arrSpecialMark))
// console.log (randomElementFromArray(arrNumber))
  
