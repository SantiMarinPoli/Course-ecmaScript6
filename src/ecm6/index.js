function newFunction(name,age,country){
    var name = name || "Oscar";
    var age = age || 32;
    var country = country || "MX";
    console.log(name,age,country)
}

//EcmaScript 6
function newFunction2(name = "Santy",age = 23, country = "COL"){
    console.log(name,age,country);
}

newFunction2();
newFunction2("Oscar",34,"ARG");

//===========================================
let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

//EcmaScript 6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//===============================================0
let lorem = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.. \n" 
+ "otra frase epica que necesitamos.";


//EcmaScript 6
let lorem2 = `otra frase epica que necesitamos 
ahora es otra fase epica
`;

console.log(lorem);
console.log(lorem2);

//================================================
let person = {
    'name': "Oscar",
    'age': 32,
    'country': "MX"
};

console.log(person.name,person.age,person.country);

//EcmaScript 6
let {name,age} = person;
console.log(name,age);

//========================================================0

let team1 = ['Santiago','Julian','Ricardo'];
let team2 = ['Eva','Ana','Maria'];

//EcmaScript 6
let education = ['David',...team1,...team2];
console.log(education);

//===========================================================
//var es una variable global
//let es una varible de bloques
//const es una variable que no cambia el valor
{var globalVar = "Global Var";}
{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);
//console.log(globalLet);

const a = 'b';
a = 'a';//no se puede cambiar con la variable const

//==================================================================
let name = "Oscar";
let age = 32;

let obj = {name: name,age: age};

//EcmaScript 6
obj2 = {name,age};
console.log(obj2);

//=====================================================================
//Array Functions
const names = [
    {name: 'Santiago',age: 23},
    {name: 'Yessica',age: 30}
];

let listOfName = names.map(function(item){
    console.log(item.name);
});

//EcmaScript 6
let listOfName2 = names.map(item => console.log(item.name));

const listOfName3 = (name,age,country) => {
    //...
};

const listOfName4 = name =>{
    //...
};

const square = num => num * num;

//=====================================================
//Promesas
//Resolve --> Aprovar la funcion
//Reject --> Rechazar la funcion
const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if(false){
            resolve("Hey!!...");
        }else{
            reject("Ups!!...");
        }
    })
};

helloPromise()
.then(res => console.log(res))
.catch(error => console.log(error)); 

//======================================================================0
//Clases
class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;

    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

const hello = require('./module');
console.log(hello());

//Generadores
// La funcion utiliza fibonacci
function* helloWorld(){
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);