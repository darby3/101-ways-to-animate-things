(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("show-hide active");

    const $ = require('jquery');

    const $button = $('#trigger');
    const $box = $('#box');

    $button.click(function() {
      $box.toggle();
    });
  });
})();
