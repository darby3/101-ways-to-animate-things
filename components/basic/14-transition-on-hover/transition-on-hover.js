(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("transition-on-hover active");

    const button = document.querySelector('#trigger');
    const box = document.querySelector('#box');

    button.addEventListener('click', function() {
      box.classList.add('active');
    })
  });
})();
