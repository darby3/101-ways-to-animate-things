(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("show-hide active");

    const $button = $('#trigger');
    const $box = $('#box');

    $button.click(function() {
      $box.toggle();
    });
  });
})();
