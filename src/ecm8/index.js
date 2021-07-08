const data = {
    frontend: "Juliana",
    backend: "Julian",
    disign: "Lolito"
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);
//==================================================
const data = {
    frontend: "Juliana",
    backend: "Julian",
    disign: "Lolito"
};

const values = Object.values(data);
console.log(values);

//============================================
const string = 'Hello';
console.log(string.padStart(7,'Hi'));
console.log(string.padEnd(12,' --------'));
console.log('Food'.padEnd(12,' ----------'));
