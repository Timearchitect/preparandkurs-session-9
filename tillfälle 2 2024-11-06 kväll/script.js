/*/*  ta data från html taggar/element
   console.log(document.getElementById("check1"))
   console.log(document.body.childNodes[5][4])
 */

   // 2) datatyper

   let x
   // number 
   x = 50       //integer, heltal
   x = 100.5    //float, decimaltal (punkt)
   
   // string
   x = "text"   //String , Sträng
   x = '@'      //character,tecken 

   // boolean
   x = false;  x = true // true/on/1    false/off/0 

   //undefined
   x = undefined

   //Object
   x = { name:"alrik" , age:32 }
   x = [ "alrik" , 32 ]
   //symbol
   //BigInt  15486415125148465265154621654816516165
   //null    tomt

  //typeof x  // känner av höger om den vilken datatyp/kategori den är 


  // string + string = string 
  // string + number = string
  // string + boolean = string
  // string + undefined = string
  // string + null = string

  // number + number = number
  // number + boolean = number
  // number + undefined = number
  // number + null = number

  // boolean + boolean = number


  // 3 ifsatser conditions 
  // conditions ger en boolean
  // 1 == 2  jämnför båda sidorna
  // "HEJ" == "hej"  tecknena är olika -> false
  // 1 == true
  // 1 === 1 jämnför med vä'dert + att det är samma datatyp
  // 1 < 1 mindre än 
  // 1 <= 1 mindre än eller lika med ?
  // 1 > 1 större än 
  // 1 >= 1 större än eller lika med ?
  // 1 != 2     // ! är inte/not/motsatsen
  // 1 !== 2    // ! är inte/not/motsatsen
  // !true

  let age = document.getElementById("numberInput").valueAsNumber

  if( age >= 20 ){ // systembolagets åldersgräns är 20
    console.log("YES!!!")
    console.log("du får kolla in alkoholen!")
  } else {
    console.log("NO!!!")
    console.log("du är ett barn")
  }

  // 4) array rad med behållare i ordning

let y = 5
y = 10

// index           0         1        2
let array = [ "Mikaela" , "Björn"  ,"Marta" ]
array[3] = "Anna"

array.push("ALRIK") //lägger in på
array.shift()
array.pop()
array.sort()


console.log(array.length) //visar antal element i arrayen
console.log(array);



 // 5) loopar

if(false){
  console.log("yes");
}else{
  console.log("NO");
}


  let count = 11
  while ( count > 0) {
    count = count - 1
    console.log("while loop: " + count)
  } 

 let i = 0
 while (i < array.length) {
   document.body.innerHTML += "<br>"+ array[i] 
   i = i + 1
   i +=  1
 } 


  



let player= {
    namn: 'Benny',
    age: 32,

    play: function (  ) {
        console.log('GO')
    },

}

 player.play()
 console.log( "Tjenare" )
 array.pop()
 alert()
 Math.random()
 document.getElementById( "box" )







console.log("vidare...")

function add( tal1 , tal2) {
  return tal1 + tal2
}


add( 2, "hej" )   // "hej2"
add( 2 , 1 )      //    3

add( "hej2" , 3 ) //"hej23"


x = add( "hej2" , 3 ) 