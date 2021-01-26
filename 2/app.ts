// const person:{
//     name:string;
//     age: number;
// } = {

// const person:{
//     name:string;
//     age: number;
//     hobbies: string[];
//     role: [number,string]; //This marks a tuple
// } = {
//     name: 'Ludi',
//     age:18,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author'] //tuples- is like an array but with always only 2 elements
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person={
    name: 'Ludi',
    age:18,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN //tuples- is like an array but with always only 2 elements
};

//person.role.push('admin'); //Push is an exeception which is allowed, typescript cant catch this error
//person.role[1] = 10; The 2nd argument should be a string

//person.role = [0, 'admin']; //To work eith tuple will make ur code more strict

let favoriteActivities : string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for( const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
   // console.log(hobby.map()); //ERROR !!!
}

if (person.role === Role.ADMIN){
    console.log('is admin');
}