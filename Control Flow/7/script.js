// Find the factorial of a number

const num=prompt("Enter the number:");
let fact=1;
for(let i=num;i>0;i--){
    fact=i*fact
}
console.log(fact);