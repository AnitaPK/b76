console.log("Heloo worldddd")

let name1 = "Sai"
str1 = 'Hello '+ name1
console.log(str1)
str2 = "Welcome " + name1 
console.log(str2)

str3 = `To ${name1} 
        dfgh tyui ghjk yuio 
 fghjk yuiop[ 
 fghjkl; tyuiol; ] `

 console.log(str3) 

//          Not       yes
//  let   redeclare reassign  blockScope
//  const redeclare reassign  blockScope
//  var 


let x = 10 
 x = 15

const y ="sai"
// y = 'OmSai' 

var z = 12345
var z = "456789" 

str5 = "Wisdom Sprouts"

console.log(str5.toLowerCase())
str5.length 

str5.charAt(4)

str6 = "Dream big, work big big hard."

str7 = str6.replace("big", "bigger")
console.log(str7)

console.log(str6.replaceAll("big", 'bigger'))

console.log(str6.substring(0,6)+'...')
console.log(str6.slice(0,6))


// 4+9-8*6(8-9)

isAdmin = true

isstudent = false 

// console.log(num)

arr = [1,2,3,4,5]
for(i=0; i<arr.length; i++){
    // console.log(arr[i] * arr[i])
    console.log(arr[i]**2)
    if(arr[i] % 2 == 0){
        console.log(arr[i] + " is even")
    }else{
        console.log(arr[i] + ' is odd number')
    }
}

arr.map((value, index)=>{
    console.log(value)
})
console.log("-----------------")
console.log(arr.filter((v,i)=> v % 2 == 0))

indexOf3=arr.findIndex((v,i)=> v == 3)
console.log(indexOf3)

// function fName( name ){
//     console.log(name)
// } 
// fName('Batch76')
// const fName = ()=>{}

// ()=>{} 
// function as a parameter => callback function 

num = 19
x = 1
while(x<=10){
    console.log(num * x)
    x++      //x = x+1
}


// initialization
// do{
// inc / dec
// }while(conditon)

