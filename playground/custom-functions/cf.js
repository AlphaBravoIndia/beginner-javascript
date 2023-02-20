// // Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running calculate bill!!!');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// // Function Call. Or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
// const myTotal = calculateBill(wesTotal, wesTaxRate);
// console.log(myTotal);

// function sayHiTo(firstName) {
//   return `hello ${firstName}`;
// }

// const greeting = sayHiTo(`Wes`);
// console.log(greeting);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`;
}

const myBill = calculateBill(100, undefined, 0.2);
console.log(myBill);
