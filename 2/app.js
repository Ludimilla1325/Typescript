// White is the scenario where you have a function that doesnt return a value
function add(n1, n2) {
    return n1 + n2; //here return a number
}
function showResult(num) {
    console.log('Result:' + num);
}
showResult(add(5, 12));
