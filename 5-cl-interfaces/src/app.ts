interface Named{
    readonly name: string;  // here we force to have a name implemented
}


interface Greetable{ 
    greet(phrase: string):void; // here we force to have this greet 
}

//we can use the interface to type check an object, It allows we define a struct of one object

class Person implements Greetable, Named{ //Here we r implementing the Interfaces
    name:string;
    age=30;

    constructor(n:string){
        this.name = n;
    }
    greet(phrase: string){
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;

user1 =  new Person('Ludi');

user1.greet("Hello, my name is");
console.log(user1);


