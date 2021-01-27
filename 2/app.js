function combine(input1, input2, resultConvertion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvertion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConvertion === 'as-number'){
    //     return +result; //+ return a number, aqui está forçando para retornar um número
    // } else
    // return result.toString();
    // }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
