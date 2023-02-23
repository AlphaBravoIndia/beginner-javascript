const item = document.querySelector('.item');

const width = 500;
const src = `https://source.unsplash.com/random/${width}x${width}`;
const desc = `Cute Pup <img onload="alert('hacked')" src="https://source.unsplash.com/random/"/>`;
const myHTML = `
  <div class="wrapper">
    <h2>${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// tunr a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
