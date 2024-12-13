function greeter(person: string[]): string {
  let greetings: string = "";
  person.forEach((name) => {
    greetings += "Hello, " + name + "\n";
  });
  return greetings;
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); // Output: Hello, Jane User
Hello, John User