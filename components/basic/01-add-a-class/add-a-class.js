(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("Add a class active");

    const button = document.querySelector('#addClass');
    const box = document.querySelector('#box');

    button.addEventListener('click', function() {
      box.classList.add('active');
    })
  });
})();
