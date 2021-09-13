(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("waapi-delays active");

    const button = document.querySelector('#trigger');
    const rewind = document.querySelector('#rewind');
    const box = document.querySelector('#box');
    const box2 = document.querySelector('#box2');
    const box3 = document.querySelector('#box3');

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

    const totalDuration = 2500;

    const timingA = {
      duration: totalDuration,
      easing: 'cubic-bezier(.99,0,.7,1)',
      iterations: 1,
      fill: 'both',
      delay: 0,
      endDelay: 0
    };

    const timingB = {
      duration: totalDuration,
      easing: 'cubic-bezier(.99,0,.7,1)',
      iterations: 1,
      fill: 'both',
      delay: 1000,
      endDelay: 0
    };

    const timingC = {
      duration: totalDuration,
      easing: 'cubic-bezier(.99,0,.7,1)',
      iterations: 1,
      fill: 'both',
      delay: 0,
      endDelay: 1000
    };

    const timings = [
      timingA,
      timingB,
      timingC
    ];

    timings.forEach((timing) => {
      console.dir(timing);
      timing.duration = totalDuration - timing.delay - timing.endDelay;
    });

    const boxAnim = box.animate(animIn, timingA);
    boxAnim.pause();
    const box2Anim = box2.animate(animIn, timingB);
    box2Anim.pause();
    const box3Anim = box3.animate(animIn, timingC);
    box3Anim.pause();

    const anims = [
      boxAnim,
      box2Anim,
      box3Anim
    ];

    button.addEventListener('click', function () {
      anims.forEach((anim) => anim.play());
    });

  });
})();
