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
let PasswordAfterSort = ""


// ====== akce po kliknutí na tlačítko "Vytvořit heslo" ======
// ===========================================================

let generateForm = document.querySelector("#generateForm")
generateForm.addEventListener("submit", (event)=> {
  event.preventDefault()

  writePassword = "" // vyčištění proměné po každém kliknutí
  divForPass.innerHTML = "" // vyčištění divu s heslem po každém kliknutí
  
  //===== zjištní počtu zaškrtnutých checkboxů=====
  const numOfCheckbox = [
  bigSmallCheckbox.checked,
  specialMarkCheckbox.checked,
  numberCheckbox.checked
  ]
  const howMuchCheckbox = numOfCheckbox.filter ( x => x === true).length //celkový počet zakškrtnutých checkboxů
  

  // ========= Vytvoření kombinací polí pro generování hesla
  let availableChars = [...arrSmallLetter]  // proměná s polem znaků dle uživatele
  if (bigSmallCheckbox.checked) availableChars = [...availableChars, ...arrBigLetter]
  if (specialMarkCheckbox.checked) availableChars = [...availableChars, ...arrSpecialMark]
  if (numberCheckbox.checked) availableChars = [...availableChars, ...arrNumber]

  // ===== výpočet délky hesla s ohledem na počet checkboxu
  let howLongPassword = event.target[3].value  // načtení dat z inputu délka hesla
  let numOfRepeatGenerate = howLongPassword - howMuchCheckbox
  

  // ====== Varování na délku hesla s ohledem na počet checkboxů
          // pokud je zaškrnutý checkbox = minimální délka hesla musí být počet checkboxů + 1
  
  if (howMuchCheckbox>0 && howLongPassword< (howMuchCheckbox+1)) {
    const warningMessage = "Minimální délka hesla musí být počet zvolených checkboxů + 1"
    WriteThisToHTML(warningMessage,"#forGeneratePassword") 
  }

  else {
 
  // === garance znaku v heslu  ===
  //====================================================================

  let basicPassword = ""   // proměná pro základní heslo (délka = vložené číslo - počet checkboxů)
  let advancePassword = ""  // proměná pro garantované znaky dle počtu zvolených checkboxů
  for (let i = 0; i<(howLongPassword-howMuchCheckbox); i++ ) {
    
     basicPassword += randomElementFromArray(availableChars)
    
  }  

  
  if (bigSmallCheckbox.checked) advancePassword += randomElementFromArray (arrBigLetter)
  if (specialMarkCheckbox.checked) advancePassword += randomElementFromArray (arrSpecialMark)
  if (numberCheckbox.checked) advancePassword += randomElementFromArray (arrNumber)


  
    
  writePassword += basicPassword + advancePassword
  PasswordAfterSort= mixPassword(writePassword)

  WriteThisToHTML(PasswordAfterSort,"#forGeneratePassword")   // === vypsání hesla do divu, přes obecnou funkci (co má vypsat - proměná, "#ID rodiče")  
  }

  

















  

    


  event.target[3].value = ""  //vyčíštění inputu po všech úkonech
  bigSmallCheckbox.checked = false  //odškrtnutí checkboxů po všech úkonech
  specialMarkCheckbox.checked = false
  numberCheckbox.checked = false  

    
})

// ======= test 




