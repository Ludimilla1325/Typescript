// White is the scenario where you have a function that doesnt return a value

function add(n1:number, n2:number): number {
    return n1 + n2; //here return a number
}

function showResult(num: number):void { //White
    console.log('Result:' + num);
}

function addAndHandle(n1:number, n2: number, cb:(num:number) => void){
    const result = n1 + n2;
    cb(result);
}

showResult(add(5, 12));

addAndHandle(10, 20 , (result) =>{
    console.log(result);
});

let combineValues: (a:number, b:number) => number; //Combined values should accept any function that takes two parameter that is number and should return a number

combineValues = add;
console.log(combineValues(8, 8));