// Arrow functions

// const add = (a:number, b:number = 1) => a + b;

// const printOutPut: (a:number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button){
//     button.addEventListener('click', event => console.log(event));
// }

// printOutPut(add(5));

//PUSH - JAVASCRIPT

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person ={
    name:'Max',
    age:30
};

const copiedPerson = { ...person }; //Using the {...}, you get a perfect copy of person, you are not only copy but u r doing a pull of the key value pars

//REST Parameters

const add = (...numbers: number[]) =>{ // here accept many arguments as i get
    return numbers.reduce((curResult, curValue) =>{
        return curResult + curValue;
    }, 0);
};

const addedNumbers = add(10, 20, 30,3);
console.log(addedNumbers);