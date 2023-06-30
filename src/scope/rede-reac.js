//**** Una variable declarada con "var" puede ser redeclarada y reasignada. ****//
// var
var firstName; // Declaracion // Valor Undefined
firstName = "sebas"; // Asignacion
console.log(firstName);

var lastName = "esteban"; // Declarar / Asignar
lastName = "laura"; // Reasignando
console.log(lastName);

var secondName = "fredy"; // Declarando / Asignando
var secondName = "melisa"; // Reasignando
console.log(secondName);

//**** Una variable declarada con "let" puede ser reasignada, pero no redeclarada. ****//
// let
let fruit = "Apple"; // Declarar / Asignar
fruit = "Banana"; // Reasignando
console.log(fruit);

// let fruit = "kiwi"; // Declaracion / No se permite
// console.log(fruit); // SyntaxError

//**** Una variable declarada con "const" no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error. ****//
// const
const animal = "dog";
// animal = 'cat'; // Reasignando / No se permite
//const animal = "snake"; // Redeclaracio / No se permite
console.log(animal);
