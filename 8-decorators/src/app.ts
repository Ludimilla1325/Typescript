// You must on "experimentalDecorators": true in tsconfig, to use decorators

// we can create a DECORATOR FACTORY that return a decorator function but allow  us to configura it when we assign it as a decorator assign

// We can customize the values  the decorator function uses when ti executes with our factory function, so it can give us more power and possibilities of configuring what the decorator does internally
function Logger(logString: string){ 
    console.log('LOGGER FACTORY');
    return function( constructor: Function){
        console.log(logString);
        console.log(constructor)
    }
}

// DECORATOR FACTORY
function withTemplate(template: string, hookId: string){ // Here i want render some template which should be some html code into some place in the DOM,
    console.log('TEMPLATE FACTORY');
    return function (constructor: any){ // _ we use that before to say that we are aware of it but that we dont want to use it
        const hookEl = document.getElementById(hookId);
        const p = new constructor();
        if (hookEl){ //I want render this here
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name;
        }
    }
}
// After @ should point a function which should be ur decorator
// @Logger('LOGGING - PERSON')
@Logger('LOGGING')
@withTemplate('<h1>My person object</h1>', 'app')
class Person {
    name = 'Max';

    constructor(){
        console.log('Creating person object ...');
    }
}

const pers = new Person();

console.log(pers);


