// Make a div
const div = document.createElement('div');
// add a class of wrapper to it
div.classList.add('wrapper');
// put it into the body
document.body.appendChild(div);
// make an unordered list
const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
div.innerHTML = ul;
// create an image
const image = document.createElement('img');
// set the source to an image
image.src = 'https://source.unsplash.com/random/500x500';
// set the width to 250
image.width = 250;
image.height = 250;
// add a class of cute
image.classList.add('cute');
// add an alt of Cute Puppy
image.alt = 'Cute Puppy';
// Append that image to the wrapper
div.appendChild(image);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const stringHTML = `
  <div class="myDiv">
    <p>Paragraph one</p>
    <p>Paragraph two</p>
  </div>`;
const ulElement = div.querySelector('ul');
ulElement.insertAdjacentHTML('beforebegin', stringHTML);

// add a class to the second paragraph called warning
const myDiv = div.querySelector('.myDiv');
myDiv.children[1].classList.add('warning');

// remove the first paragraph
myDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  return `
  <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>Their height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
  <button class="delete" type="button">&times; Delete</button>
  </p>
  </div>
  `;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let playersHTML = generatePlayerCard('greg', 2, 180);
playersHTML += generatePlayerCard('sam', 5, 10);
playersHTML += generatePlayerCard('smith', 40, 100);
playersHTML += generatePlayerCard('samantha', 95, 5);

// append those cards to the div
cards.innerHTML = playersHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement('beforebegin', cards);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
