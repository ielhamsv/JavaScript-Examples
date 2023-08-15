// Find sum of natural numbers using recursion

function sum(n){
    let re=0
    for(let i=0;i<=n;i++){
        re=re+i
    }
    return re
}
const n=parseInt(prompt("enter the number"));

const result=sum(n);
console.log(result)