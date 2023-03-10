import { generateOptions } from './utils';
import currencies from './currencies';
import { handleInput } from './handlers';
import { fromSelect, toSelect } from './elements';

export function init() {
  const form = document.querySelector('.app form');

  const optionsHTML = generateOptions(currencies);
  // populate the options elements
  fromSelect.innerHTML = optionsHTML;
  toSelect.innerHTML = optionsHTML;
  form.addEventListener('input', handleInput);
}
