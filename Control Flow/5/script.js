// Check prime number

const number=prompt("Enter the number:");

if(number==1){
    console.log("not prime")
} else if(number>1){
    for (let i=2;i<number;i++){
        if(number % i==0){
            console.log("not prime")
            break
        }else {
            console.log("prime")
        }
    }
}