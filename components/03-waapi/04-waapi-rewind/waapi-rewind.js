(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("waapi-rewind active");

    const button = document.querySelector('#trigger');
    const rewind = document.querySelector('#rewind');
    const box = document.querySelector('#box');

    const animIn = [{
      transformOrigin: 'center center',
      transform: `translate(-350px, 0) scale(0.25, 0.25) rotate(0)`,
      backgroundColor: 'rgba(222,161,161,0.49)'
    }, {
      transformOrigin: 'center center',
      transform: 'translate(0, 0) scale(2.5, 2.5) rotate(-90deg)',
      backgroundColor: 'rgba(36,243,202,1)',
      offset: 0.25
    }, {
      transformOrigin: 'center center',
      transform: 'translate(150px, 0) scale(0.5, 0.5) rotate(0)',
      backgroundColor: 'rgba(255,0,0,1)'
    }];

    const timing = {
      duration: 2000,
      easing: 'cubic-bezier(.99,0,.7,1)',
      iterations: 1,
      fill: 'both',
    };

    const boxAnim = box.animate(animIn, timing);
    boxAnim.pause();

    button.addEventListener('click', function () {
      boxAnim.play();
    });

    rewind.addEventListener('click', function () {
      boxAnim.reverse();

      const dir = document.querySelector("#dir");
      dir.innerHTML = (dir.innerHTML === "Forwards") ? "Backwards" : "Forwards";

    });
  });
})();
