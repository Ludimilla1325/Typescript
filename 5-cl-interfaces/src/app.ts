interface Greetable{ //Interface cant have an initialize, so we must not pass the concrete values.
    readonly name: string; //it must be initialized only once, 

    greet(phrase: string):void;
}

//we can use the interface to type check an object, It allows we define a struct of one object

class Person implements Greetable{
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


