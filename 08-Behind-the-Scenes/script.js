'use strict';

function calcAge(birthYear) {
  const age = Math.floor(birthYear / 1000);
  function printAge() {
    const output = `${age} - ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
  }
  printAge()
  return age;
}

const firstName = 'John';
calcAge(1991);
