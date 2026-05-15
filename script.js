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

let writePassword = ""  //pro psaní malých písmen
let writePasswordWithBig = "" //pro psaní malých, velkých písmen


// ====== akce po kliknutí na tlačítko "Vytvořit heslo" ======
// ===========================================================

let generateForm = document.querySelector("#generateForm")
generateForm.addEventListener("submit", (event)=> {
  event.preventDefault()
    
  // === generování hesla pouze z malých písmen - NIC NENÍ ZAŠKRTNUT ===
  //====================================================================
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
    WriteThisToHTML(writePassword,"#forGeneratePassword")   // === vypsání hesla do divu, přes obecnou funkci (co má vypsat - proměná, "#ID rodiče")

  }

  // === generování hesla pouze s VELKÝMI písmeny - ZAŠKRTNUTA VELKÁ PÍSMENA ===
  //============================================================================

  else if (bigSmallCheckbox.checked === true &&
    specialMarkCheckbox.checked === false &&
    numberCheckbox.checked === false
    ){
    
    let howLongPassword = event.target[3].value  // načtení dat z inputu délka hesla
    writePassword = "" // vyčištění proměné po každém kliknutí
    divForPass.innerHTML = "" // vyčištění divu s heslem po každém kliknutí


    // heslo musí mít minimálně 2 znaky (malé a velké písmino)
    if (howLongPassword<2){ 
      
      let warning = "Pokud má heslo obsahovat malá a velká písmena, musí mít víc než 1 znak!!!"
      WriteThisToHTML (warning,"#forGeneratePassword")
    }else { // pokud má víc než 2 znaky 
  
    // === generování hesla s 1 velkým písmenem
    let numOfRepeatForSmall = howLongPassword - 1 //délka hesla-1 (jedno bude velké písmeno!!)
          
    for (let i = 0; i<numOfRepeatForSmall; i++ ) {
      writePassword += randomElementFromArray(arrSmallLetter)  //vytvoří heslo s malými písmeny
    }

    let oneBigLetter = randomElementFromArray(arrBigLetter) // generované 1 velké písmeno

    writePasswordWithBig = writePassword + oneBigLetter // spojení hesla malých písmen a jednoho velkého

    let writePasswordWithBigToArr = writePasswordWithBig.split("") //rozdělení hesla s velkým písmenem do pole pro zamíchání

     let randomPasswordWithBig = (writePasswordWithBigToArr.sort(() => Math.random() - 0.5)).join("") //zamíchání pole s heslem a spojení do stringu


    WriteThisToHTML(randomPasswordWithBig,"#forGeneratePassword")  
    }






  }
  

  // === vypsání hesla do divu, přes obecnou funkci (co má vypsat - proměná, "#ID rodiče")
   


  event.target[3].value = ""  //vyčíštění inputu po všech úkonech
  bigSmallCheckbox.checked = false  //odškrtnutí checkboxů po všech úkonech
  specialMarkCheckbox.checked = false
  numberCheckbox.checked = false  

    
})



// setInterval(() => {
//     console.log (finalNumber)
// }, 1000); 


// console.log (randomElementFromArray(arrSmallLetter))
// console.log (randomElementFromArray(arrBigLetter))
// console.log (randomElementFromArray(arrSpecialMark))
// console.log (randomElementFromArray(arrNumber))
  
