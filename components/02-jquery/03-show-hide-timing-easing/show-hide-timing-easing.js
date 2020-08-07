(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("show-hide-timing-easing active");

    const $button = $('#trigger');
    const $box = $('#box');

    $button.click(function() {
      $box.toggle(2000, "easeInOutQuint");
    });
  });
})();
