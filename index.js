const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const passwordEl = document.getElementById("password-gen")
let randomIndexTwo =Math.floor(Math.random()*characters.length) 
let container = document.getElementById("container")

passwordEl.addEventListener("click",function(){
   
    container.innerHTML = `<button>${randomPassword()}</button>
                            <button>${randomPassword()}</button>
                            `

})


function randomPassword (){
   let result = ""
    for(let a = 0; a < 15; a++){
        let randomIndexOne = Math.floor(Math.random()*characters.length - 1)
        result += characters[randomIndexOne]
    }
   
    return result
}

