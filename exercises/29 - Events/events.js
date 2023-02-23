const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED!!!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', () => {
  console.log('Im an anon!');
});
coolButton.addEventListener('click', hooray);

butts.removeEventListener('click', () => {
  console.log('Im an anon!');
});

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(e) {
  console.log('You clicked a button');

  const button = e.target;
  // console.log(button.textContent);
  // console.log('You are buying it!');
  // console.log(parseFloat(e.target.dataset.price));
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target === e.currentTarget);

  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('YOU CLICKED THE WINDOW');
    console.log(event.target);
    console.log(event.type);
    // event.stopPropagation();
    console.log(event.bubbles);
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');
photoEl.addEventListener('mouseenter', function (e) {
  console.log(e.currentTarget);
  console.log(this);
});
