//**** Variables ****//

var a; //Declarando
var b = "b"; //Declaramos y Asignamos
b = "bb"; //Reasignacion
var a = "aa"; //Redeclaracion

//***** GLOBAL SCOPE *****//

var fruit = "Apple"; //Global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}
bestFruit();
