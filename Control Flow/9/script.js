// Make a simple calculator

const num1=prompt("Enter number one");
const num2=prompt("Enter number two");

const car=prompt("Enter the character(+,-,*,/)");
let result;

if(car=="+"){
    result=(+num1)+(+num2)
}else if(car=="-"){
    result=num1-num2
}else if(car=="*"){
    result=num1*num2
}else if(car=="/"){
    result=num1/num2
}else{
    console.log("pls Enter a character")
}
console.log(`result= ${parseInt(result)}`)