const wes = document.querySelector('.wes');

wes.addEventListener('click', (e) => {
  const shouldChangePage = confirm(
    'This website might be malicious! Do you wish to proceed?'
  );
  if (!shouldChangePage) {
    e.preventDefault();
  }

  console.log('YOU CLICKED IT');
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', (e) => {
  const name = e.currentTarget.name.value;
  if (name.includes('chad')) {
    alert('Sorry bro!');
    e.preventDefault();
  }
});

function logEvent(e) {
  console.log(e.type);
  console.log(e.currentTarget.value);
}

signupForm.name.addEventListener('keyup', logEvent);
signupForm.name.addEventListener('keydown', logEvent);
signupForm.name.addEventListener('focus', logEvent);
signupForm.name.addEventListener('blur', logEvent);
// 'keyup'
// 'keydown'
// 'focus'
// 'blur'
function handlePhotoClick(event) {
  if (event.type === 'click' || event.key === 'Enter') {
    console.log('You clicked the photo');
  }
}

const photo = document.querySelector('.photo');
photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);
