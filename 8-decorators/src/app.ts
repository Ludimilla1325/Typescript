// You must on "experimentalDecorators": true in tsconfig, to use decorators

// we can create a DECORATOR FACTORY that return a decorator function but allow  us to configura it when we assign it as a decorator assign

// We can customize the values  the decorator function uses when ti executes with our factory function, so it can give us more power and possibilities of configuring what the decorator does internally
function Logger(logString: string){ 
    return function( constructor: Function){
        console.log(logString);
        console.log(constructor)
    }
}

// After @ should point a function which should be ur decorator
@Logger('LOGGING - PERSON')
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object ...');
    }
}

const pers = new Person();

console.log(pers);


