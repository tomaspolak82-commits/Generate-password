"use Strict"

// ======== obecná funkce pro náhodný prvek z pole elementů (arr) ======
//======================================================================
let randomElementFromArray = (arr) => {

let randomPositionFromNumber = Math.floor(Math.random() * arr.length)  //náhodné číslo z délky pole čísla

return arr[randomPositionFromNumber]
}

// ======== Obecná funkce vypsání textu do HTML ======
//====================================================
let WriteThisToHTML = (what,parent) => {
    let addPara = document.createElement("p")
    addPara.innerHTML = `${what}`
    document.querySelector(parent).appendChild(addPara)

}

// ====== Zamíchání pole =======
//==============================

let mixPassword = (password)=>{ 
   
    const stepOne = password.split("") // rozdělení hesla na pole písmen
    const stepTwo = stepOne.sort(()=>0.5-Math.random())  // zamýchání pole
    const stepThree = stepTwo.join("")

    return stepThree
}



