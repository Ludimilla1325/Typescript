//Interfaces can be used to define the structure of a function

// type AddFn = (a:number, b:number) => number;
interface AddFn { // gonna use this interface as a function type
    (a:number, b:number):number;
}

let add: AddFn;

add = (n1: number, n2: number) =>{
    return n1+ n2;
};

//------
interface Named{ 
    readonly name?: string;
    outputName?: string; // We dont want force, it can be option fi might exist in classes or not
    // You can also mark methods as "optional!=>myMethod?(){...}"
}

interface Greetable extends Named{ 
    greet(phrase: string):void; 
}

class Person implements Greetable{ 
    name?:string; //Name is optional
    age=30;

    constructor(n?:string){ //you can add optional in paramenters
        if(n){
            this.name = n;
        }
    }
    greet(phrase: string){
        if (this.name){ // If we receive a name, we gonna print this option

            console.log(phrase + ' ' + this.name);
        } else
        console.log('Hi!');
    }
}

let user1: Greetable;

user1 =  new Person();

user1.greet("Hello, my name is");
console.log(user1);


