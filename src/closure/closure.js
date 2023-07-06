function greeting() {
  let username = "Sebastian";

  function displayUserName() {
    return `hello ${username}`;
  }
  return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());
