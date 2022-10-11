// More Conditional Test: 


//Tests for equality and inequality with strings

var reqVar= "Apple"
if(reqVar == "Apple"){
   console.log( true)
}else{
   false
}

var reqVar= "Appsle"
if(reqVar == "Apple"){
   console.log( true)
}else{
   console.log(false)
}

//• Tests using the lower case function

var fruit = "apple"

if(fruit == fruit.toLowerCase()){
   console.log(true)
}else{
   console.log(false)
}

var fruit1 = "Apple"

if(fruit1 == fruit1.toLowerCase()){
   console.log(true)
}else{
   console.log(false)
}


// Numerical Test

var value = 18

if( value  == 18){
   console.log( true)
}else{
   false
}



if(value => 18 || value <=18){
   console.log( true)
}else{
   false
}

var value = "18"

if( value  === 18){
   console.log( true)
}else{
 console.log(false)  
}


var value1=20
if(value1 >= 18 && value1 <=18){
   console.log( true)
}else{
  console.log(false) 
}

if(value1 >= 2 || value1 <=3){
   console.log( true)
}else{
  console.log(false) 
}

// Test whether an item is in a array

var bike = ["bmw", "yahamaha", "suzuki"]

console.log(bike.includes("bmw"))

 

var bike = ["bmw", "yahamaha", "suzuki"]

console.log(bike.includes("bsmssw"))


