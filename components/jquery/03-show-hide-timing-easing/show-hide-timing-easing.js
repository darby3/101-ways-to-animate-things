(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("show-hide-timing-easing active");

    global.$ = global.jQuery = require('jquery');
    require('jquery.easing');

    const $button = $('#trigger');
    const $box = $('#box');

    $button.click(function() {
      $box.toggle(2000, "easeInOutQuint");
    });
  });
})();
