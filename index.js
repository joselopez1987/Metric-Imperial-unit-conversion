let inputEl = document.getElementById("input-el").value
let hello = document.getElementById("save-length")
let volume = document.getElementById("save-volume")
let mass = document.getElementById("save-mass")
let feet = 3.28084
let meters = 0.3048
let saveNum = document.getElementById("save-num")
let number = document.getElementById("save-num")


let galon = "gallons"
let litro = "liters"
let foot = "feet"
let metro = "meters"
let libra = "pounds"
let kilos = "kilos"
let dash = " | "
let gallons = 0.264172
let liters = 3.785412
let kilo = 2.2046226218



 function getInput(){
     var x = document.getElementById("input-el").value
     document.getElementById("demo").innerHTML = x

     let metersFeet = x + " meters = "
     let feetMeters = x + " feet = "
     let litersGallon = x + " liters = "
     let gallonsLiter = x + " gallons = "
     let kilosPounds = x + " pounds = "
     let poundsKilos = x + " kilos = "
    



function calcLength(){
    
    hello.textContent = metersFeet + (x * feet).toFixed(3) + " " + foot + dash + feetMeters + (x * meters).toFixed(3) + " " + metro
   

}

calcLength()

function calcVolume(){
    console.log("Seiya")
    volume.textContent = litersGallon + (x * gallons).toFixed(3) + " " + galon + dash + gallonsLiter + (x * liters).toFixed(3) + " " +litro 
}

calcVolume()

function calcMass(){
    mass.textContent = poundsKilos + (x * kilo).toFixed(3) + " " + libra + dash + kilosPounds + (x / kilo).toFixed(3) + " " + kilos
}

calcMass()

 }

