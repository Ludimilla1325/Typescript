// You must on "experimentalDecorators": true in tsconfig, to use decorators

function Logger( constructor: Function){
    console.log('Logging...');
    console.log(constructor)
}

// After @ should point a function which should be ur decorator
@Logger
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object ...');
    }
}

const pers = new Person();

console.log(pers);


