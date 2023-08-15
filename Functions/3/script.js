// Guess a random number

const random=parseInt(Math.random()*10);
console.log(random)

while (true) {
    let n = parseInt(prompt("enter the number"));

    if(n===random){
        console.log("wine!");
        break
    }else {
        console.log("try again")
        continue
    }
}