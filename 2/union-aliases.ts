// Custom Type - you can give whetever name you want to, you gonna assign the type you want to encode in your alias
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConvertion: ConversionDescriptor
){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConvertion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString(); 
    }  

    return result;

    // if (resultConvertion === 'as-number'){
    //     return +result; //+ return a number, aqui está forçando para retornar um número
    // } else
    // return result.toString();
    // }

}
const combinedAges = combine(30,26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','26', 'as-number');
console.log(combinedStringAges);

let combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
