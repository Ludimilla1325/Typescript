// White is the scenario where you have a function that doesnt return a value

function add(n1:number, n2:number): number {
    return n1 + n2; //here return a number
}

function showResult(num: number):void { //White
    console.log('Result:' + num);
}

let combineValues: (a:number, b:number) => number; //Combined values should accept any function that takes two parameter that is number and should return a number

combineValues = add;
console.log(combineValues(8, 8));
showResult(add(5, 12));
