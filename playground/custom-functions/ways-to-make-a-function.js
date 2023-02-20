// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anon function
// function (firstName) {
//     return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow Function
/* eslint-disable */
const inchToCM = inches => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

// const add = (a, b = 3) => a + b;

// returning an object

// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0
//   }
//   return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

(function(age) {
  return `You are cool and age ${age}`;
})(10);

// Methods!!!
const wes = {
  name: 'Wes Bos',
  // Method!
  sayHi: function() {
    console.log(`Hey ${this.name}`);
    return 'Hey Wes';
  },
  // Short hand method
  yellHi() {
    console.log(`HEY WES`)
  },
  // Arrow function
  wisperHi: () => {
    console.log('hii wess im a mouse');
  }
}

// Callback functions
// Click callback
const button = document.querySelector('.clickMe');
console.log(button);

function handleClick() {
  console.log("Great clicking!!");
}

button.addEventListener('click', function() {
  console.log("Nice job");
});

// Timer Callback

setTimeout(() => {
  console.log("DONE! Time to eat!");
}, 1000);