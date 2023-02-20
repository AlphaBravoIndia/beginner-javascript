// const age = 100;

// function go() {
//   const myAge = 200;
//   const hair = 'blonde';
//   console.log(age);
//   console.log(myAge);
//   console.log(hair);
// }

// go();

// function isCool(name) {
//   if (name === 'wes') {
//     var cool = true;
//   }
//   console.log(cool);
//   return cool;
// }
// /* eslint-disable */
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const dog = 'snickers';

function logDog(dog) {
  console.log(dog);
}

function go() {
  const dog = 'sunny';
  logDog(dog);
}

go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }

  yell();
}
