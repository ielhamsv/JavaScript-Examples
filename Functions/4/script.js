// Find factorial of number using recursion

function fact(n){
    let factorial=1;
    for(let i=1;i<=n;i++){
        factorial=i*factorial;
    }
    return factorial
}

const n=parseInt(prompt("Enter a number:"));

console.log(fact(n))