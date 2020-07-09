(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("transition-end-event active");

    const button = document.querySelector('#trigger');
    const box = document.querySelector('#box');

    button.addEventListener('click', function() {
      box.classList.toggle('active');
    });

    box.addEventListener('transitionend', function () {
      if (box.classList.contains('active')) {
        box.innerHTML = 'Transition ended';
      } else {
        box.innerHTML = 'Hi hi hi'
      }
    });
  });
})();
