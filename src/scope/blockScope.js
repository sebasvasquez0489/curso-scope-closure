function fruits() {
  if (true) {
    var fruit1 = "Apple"; // Fuction scope
    let fruit2 = "Kiwi"; // Block scope
    const fruit3 = "Banana"; // Block scope

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
  }
  //   //Resultado fuera del bloque
  //console.log(fruit1); //Imprime
  //console.log(fruit2); // Error
  //console.log(fruit3); // Error
}
fruits();
