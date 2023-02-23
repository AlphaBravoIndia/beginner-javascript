console.log('It works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://source.unsplash.com/random/300x300';
myImage.alt = 'Nice photo';
console.log(myImage);

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);
document.body.appendChild(myDiv);

// oh shoot! We need to add something to the top, like a heading!

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

// <ul>
// <li>One</li>
// <li>Two</li>
// <li>Three</li>
// <li>Four</li>
// <li>Five</li>
// </ul>

const myList = document.createElement('ul');
const one = document.createElement('li');
one.textContent = 'One';
const two = one.cloneNode(true);
two.textContent = 'Two';
const three = document.createElement('li');
three.textContent = 'Three';
const four = document.createElement('li');
four.textContent = 'Four';
const five = document.createElement('li');
five.textContent = 'Five';

myList.insertAdjacentElement('afterbegin', one);
myList.append(five);
one.insertAdjacentElement('afterend', two);
five.insertAdjacentElement('beforebegin', four);
two.insertAdjacentElement('afterend', three);

document.body.appendChild(myList);
