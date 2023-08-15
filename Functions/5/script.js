// convert Decimal to binary

let n=parseInt(prompt("Enter a number"));
let x=1
let bin=0;
let i=1

while(n!=0){
    x=n%2;
    n=parseInt(n/2);
    bin=bin + x*i
    i=i*10
}
console.log(bin)