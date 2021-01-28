// Unknow - because we dont know what the user will eventually enter
// we shouldnt use Unknows all the time, but is better to use "unknow" than "any"
let userInput: unknown; //You can set any type here
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string'){
    userName = userInput;
}

// Intended to Never returns anything- 
//This function never produce a return value, this function always crashes the scrip

function generateError(message:string, code:number): never{
    throw{message:message, errorCode: code};
//     while(true){} //function with infinite loop will never return something too
}

const result = generateError('AAn error occurred!', 500);
console.log(result);