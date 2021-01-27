// Unknow - because we dont know what the user will eventually enter
// we shouldnt use Unknows all the time, but is better to use "unknow" than "any"
let userInput: unknown; //You can set any type here
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string'){
    userName = userInput;
}

//console.log(userInput)