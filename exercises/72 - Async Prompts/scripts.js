function wait(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function destroyPopup(popup) {
  popup.classList.remove('open');
  await wait(1000);
  // remove the pop up entirely
  popup.remove();
  popup = null;
}

function ask(options) {
  return new Promise(async (resolve) => {
    // First we need to create a pop up with all the fields in it
    const popUp = document.createElement('form');
    popUp.classList.add('popup');
    popUp.insertAdjacentHTML(
      'afterbegin',
      `<fieldset>
        <label>${options.title}</label>
        <input type="text" name ="input" />
        <button type="submit">Submit</button>
      </fieldset>
    `
    );

    // Check if they want a cancel button
    if (options.cancel) {
      const skipButton = document.createElement('button');
      skipButton.type = 'button';
      skipButton.textContent = 'Cancel';
      popUp.firstElementChild.appendChild(skipButton);
      skipButton.addEventListener(
        'click',
        () => {
          resolve(null);
          destroyPopup(popUp);
        },
        { once: true }
      );
    }
    // Listen for the submit event on the inputs
    popUp.addEventListener(
      'submit',
      (e) => {
        e.preventDefault();
        console.log('SUBMITTED');
        resolve(e.target.input.value);
        // Remove it from the DOM entirely
        destroyPopup(popUp);
      },
      { once: true }
    );
    // When someone does submit it, we want to resolve the data that was in the input box!

    // Insert popup into the DOM
    document.body.appendChild(popUp);
    // Put a very small timeout before we add the open class
    await wait(50);
    popUp.classList.add('open');
  });
}

// Select all buttons taht have a question
async function askQuestion(e) {
  const button = e.currentTarget;
  const cancel = 'cancel' in button.dataset;
  const answer = await ask({
    title: button.dataset.question,
    cancel,
  });
  console.log(answer);
}
const buttons = document.querySelectorAll('[data-question]');
buttons.forEach((button) => button.addEventListener('click', askQuestion));

const questions = [
  { title: 'What is your name?' },
  { title: 'What is your age?', cancel: true },
  { title: 'What is your dogs name' },
];

async function asyncMap(array, callback) {
  // make an array to store our results
  const results = [];
  // loop over our array
  for (const item of array) {
    results.push(await callback(item));
  }
  // when we are done the loop, return it
  return results;
}

async function go() {
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

go();
// async function askMany() {
//   for (const question of questions) {
//     const answer = await ask(question);
//     console.log(answer);
//   }
// }

// askMany();
