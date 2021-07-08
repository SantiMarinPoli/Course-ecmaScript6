let numbers = [1,3,4,5,7,8,9];

// includes() es similar la funcion indexOf() buscar un indice en un valor
if(numbers.includes(10)){
    console.log('Si se encuentra el valor 7');
}else{
    console.log("No se encuentra el valor 7.");
}

let base= 4;
let exponent = 3;
//** significa una funcion exponente 
let result = base ** exponent;
console.log(result);