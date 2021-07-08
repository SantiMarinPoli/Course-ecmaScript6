const obj = {
    name: 'Santiago',
    age: 23,
    country: 'COL'
};

let {name, ...all} = obj;
console.log(name,all);

//===========================================
const obj = {
    name: 'Oscar',
    age: 32
};

const obj1 = {
    ...obj,
    country: 'MX'
};

console.log(obj1);

//===========================================

const helloWorld = () =>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(() => {
            resolve('Hello World')
        }, 3000)
        : reject(new Error('Test Prueba'))
    })
};

helloWorld()
.then(resp => console.log(resp))
.catch(error => console.log(error))
.finally(()=> console.log("Finalizo"));

//=====================================================
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-07-28'); 
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);