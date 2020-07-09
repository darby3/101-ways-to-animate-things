(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("show-hide-timing active");

    const $ = require('jquery');

    const $button = $('#trigger');
    const $box = $('#box');

    $button.click(function() {
      $box.toggle(1000);
    });
  });
})();
