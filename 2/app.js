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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Ludi',
    age: 18,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN //tuples- is like an array but with always only 2 elements
};
//person.role.push('admin'); //Push is an exeception which is allowed, typescript cant catch this error
//person.role[1] = 10; The 2nd argument should be a string
//person.role = [0, 'admin']; //To work eith tuple will make ur code more strict
var favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); //ERROR !!!
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
