// check if the numbers have same last digit

const a=prompt("Enter the number: ");
const b=prompt("Enter the number: ");
const c=prompt("Enter the number: ");

console.log(a%10==b%10 & a%10==c%10 ? "yes" : "No")