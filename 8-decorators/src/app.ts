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
    return function<T extends {new(...args: any[]):{name:string}}> (originalConstructor: T){ // _ we use that before to say that we are aware of it but that we dont want to use it
        return class extends originalConstructor{ //we r trying to replace with the new constructor function, we still execute the old logic but with the wth the new logic that it should be rendered the dom if really instantiate the object
            constructor(..._: any[]){ // _ we know but we dont use thar
                super();  // we use super when a construcctor extends an original constructor 
                console.log('Rendering template');
                const hookEl = document.getElementById(hookId);
                if (hookEl){ //I want render this here
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1')!.textContent = this.name; //acess this.name to get the name property value 
                }
            }
        }
    }
}
// After @ should point a function which should be ur decorator
// @Logger('LOGGING - PERSON')

//We can use multiple decorators, and the decorator function happens in the order in which we specify these factory, but the execution of the actual decorator functions then happens bottom up
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


// -----------

function Log(target: any, propertyName: string | Symbol){
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor){
    console.log('Acessor decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor:PropertyDescriptor){  //target is the instance method, is the prototype of the object
    console.log('Method decorator!');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number){
    console.log('Parameter decorator!');
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log  
    title: string;
    private _price: number;  // _  we cant directly reach it

    @Log2

    set price(val: number){
        if (val > 0){
                this._price = val;
        } else {
            throw new Error ('Invalid price - should be positive!');
        }
    }
    constructor(t: string, p:number){
        this.title = t;
        this._price = p;
    }

    @Log3   //Method decorator
    getPriceWithTax(@Log4 tax: number){
        return this._price * (1 + tax);
    }
}

const p1 = new Product('Book', 18);
const p2 = new Product('Book 2', 29);

// console.log(p2);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor : PropertyDescriptor = {
        configurable: true, 
        enumerable: false,

        get(){
            const boundFn = originalMethod.bind(this); //this will refer to the object on which we originally defined the method
            return boundFn;
        }
    };
    return adjDescriptor;
}


class Printer {
    message = 'This works';

    @Autobind // We created a function so we dont need call the bind everywhere 
    showMessage(){
        console.log(this.message);
    }
}

const p = new Printer();
p.showMessage();

const button = document.querySelector('button');
button?.addEventListener('click', p.showMessage);

