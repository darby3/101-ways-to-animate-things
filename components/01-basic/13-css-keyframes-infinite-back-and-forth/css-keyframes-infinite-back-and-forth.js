(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("css-keyframes-infinite-back-and-forth active");

    const button = document.querySelector('#trigger');
    const box = document.querySelector('#box');

    button.addEventListener('click', function() {
      box.classList.toggle('active');
    })
  });
})();
