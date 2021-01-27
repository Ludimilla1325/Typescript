// White is the scenario where you have a function that doesnt return a value

function add(n1:number, n2:number): number {
    return n1 + n2; //here return a number
}

function showResult(num: number):void {
    console.log('Result:' + num);
}

showResult(add(5, 12));
