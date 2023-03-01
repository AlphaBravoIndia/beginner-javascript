function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  const button = document.querySelector('.accept');
  if (!terms) {
    return; // quit this there isn't that item on the page
  }

  function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      // stop observing the button
      ob.unobserve(terms.lastElementChild);
    }
  }

  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
}

scrollToAccept();
