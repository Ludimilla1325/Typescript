interface Greetable{ //Interface cant have an initialize, so we must not pass the concrete values.
    name: string;

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

//WHATS THE DIFFERENCE BETWEEN INTERFACE AND CONST TYPE?
/* 
- Interfaces can only used to describe of an object 
but inside a const Type, you can store anything like
union types.
- To define an interface is clear that u want define the struct
of an objecy, 
- Interface can be use as a contract, a class can implement and class that hears too
So we can put an interface in a class, like here class Person implements Greetable{

    Why interfaces?
- Good to use with class
- When a part of code rely on that stricture like "let user1: Greetable;", we know that the greet
method must be there, because the greetable is store in the user1. Greetable forces that anywhere that use it
must have a greet method.
- Allows us to qrite powerful and flexible code


    */

