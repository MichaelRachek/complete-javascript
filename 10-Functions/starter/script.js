const oneWord = function(str) {
  return str.replace(/\s/g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join('');
}

// Higher-order function when function can get another function as a argument
const transformer = function(str, fn) {
  console.log(`transformer: ${fn(str)}`);
}

transformer('Js the best', upperFirstWord);

// Closer

let f;
const g = () => {
  const a = 23;
  f = () => {
    console.log(a * 2);
  }
}
