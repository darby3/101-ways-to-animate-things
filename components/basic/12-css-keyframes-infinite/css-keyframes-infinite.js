(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("css-keyframes-infinite active");

    const button = document.querySelector('#trigger');
    const box = document.querySelector('#box');

    button.addEventListener('click', function() {
      box.classList.toggle('active');
    })
  });
})();