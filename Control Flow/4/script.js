// find the largest among three numbers

const a=prompt("Enter the number");
const b=prompt("Enter the number");
const c=prompt("Enter the number");

console.log(a>b & a>c ? `${a} is largest`
    : b>a & b>c ? `${b} is largest`
        :`${c} is largest`);