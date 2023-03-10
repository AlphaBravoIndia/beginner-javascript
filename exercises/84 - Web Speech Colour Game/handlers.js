import { isValidColor } from './colors';

function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  const words = results[results.length - 1][0].transcript;
  // lowercase everything
  let color = words.toLowerCase();
  // strip spaces out
  color = color.replace(/\s/g, '');
  // Check if it is a valid color
  if (!isValidColor(color)) return; // that's all folks
  // If it is, show the UI for that
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');

  console.log('This is a valid color');
  console.log(color);

  // Change the backgorund color
  document.body.style.backgroundColor = color;
}
