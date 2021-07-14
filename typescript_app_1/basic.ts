// primitives
let age1: number;
age1 = 12;

let userName: string;
userName = "isMax"

// more complex 

let hobbies: string[];
hobbies = ["coding", "eating", "sleeping"];

type Person = {
    name: string;
    age:  number;
}

let person: Person;
person = {
    name: "isMax",
    age: 12
};

//type infernce
let cours: string | number  = "asd dsad";
cours = 41546;


//funcions and types

function add(a: number, b: number) {
    return a + b;
}


//Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array]
    return newArray
}

const demoArray =[1,2,3];

const updateArray = insertAtBeginning(demoArray, -5);

