import { init } from './init.js';

const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, { once: true });

// fetch()
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log('error', error));
