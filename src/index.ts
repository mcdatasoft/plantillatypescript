/*
console.log("Try npm run check/fix!");

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = 'am I tabbed?';

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return ;
  }
  console.log(withThis);
  console.log(andThat);
}
*/


class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Saludos, " + person.firstName + " " + person.lastName;
}

let user = new Student("Catherine", "H.", "de Cuadros");

console.log(greeter(user));

