// Solve Quadratic Equation

const a=2;
console.log("a: " + a);

const b=4;
console.log("b: " + b);

const c=1;
console.log("c: " + c);

const delta=Math.pow(b,2)-4*a*c;

if(delta >=0) {

    let x;
    x = (-b + (Math.sqrt(delta))) / 2 * a;
    console.log(x);

    x = (-b - (Math.sqrt(delta))) / 2 * a;
    console.log(x);
}else {
    console.log("delta is negative")
}