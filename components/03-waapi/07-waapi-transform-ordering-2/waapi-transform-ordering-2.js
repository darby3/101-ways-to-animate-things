(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("waapi-transform-ordering-2 active");

    const button = document.querySelector('#trigger');
    const pause = document.querySelector('#pause');
    const halfway = document.querySelector('#halfway');
    const end = document.querySelector('#end');
    const reset = document.querySelector('#reset');
    const scrubber = document.querySelector('#scrubber');
    const box = document.querySelector('#box');
    const box2 = document.querySelector('#box2');
    const box3 = document.querySelector('#box3');

    const animInA = [{
      transformOrigin: 'center center',
      transform: `translate(-100px, 0)  rotate(90deg) scale(0.5, 0.5)`,
      backgroundColor: 'rgba(222,161,161,0.49)'
    }, {
      transformOrigin: 'center center',
      transform: 'translate(100px, 0)  rotate(-90deg) scale(1.5, 1.5)',
      backgroundColor: 'rgba(36,243,202,1)',
    }];

    const animInB = [{
      transformOrigin: 'center center',
      transform: `scale(0.5, 0.5) translate(-100px, 0)  rotate(90deg) `,
      backgroundColor: 'rgba(222,161,161,0.49)'
    }, {
      transformOrigin: 'center center',
      transform: 'scale(1.5, 1.5) translate(100px, 0)  rotate(-90deg) ',
      backgroundColor: 'rgba(36,243,202,1)',
    }];

    const animInC = [{
      transformOrigin: 'center center',
      transform: `scale(0.5, 0.5) rotate(90deg)   translate(-100px, 0) `,
      backgroundColor: 'rgba(222,161,161,0.49)'
    }, {
      transformOrigin: 'center center',
      transform: 'scale(1.5, 1.5) rotate(-90deg)   translate(100px, 0) ',
      backgroundColor: 'rgba(36,243,202,1)',
    }];

    const totalDuration = 3000;

    const timingA = {
      duration: totalDuration,
      easing: 'cubic-bezier(.42,0,.58,1)',
      iterations: 1,
      fill: 'forwards',
      delay: 0,
      endDelay: 0
    };

    const timings = [
      timingA,
    ];

    timings.forEach((timing) => {
      console.dir(timing);
      timing.duration = totalDuration - timing.delay - timing.endDelay;
    });

    const boxAnim = box.animate(animInA, timingA);
    boxAnim.pause();
    const box2Anim = box2.animate(animInB, timingA);
    box2Anim.pause();
    const box3Anim = box3.animate(animInC, timingA);
    box3Anim.pause();

    const anims = [
      boxAnim,
      box2Anim,
      box3Anim,
    ];

    button.addEventListener('click', function () {
      anims.forEach((anim) => anim.play());
    });

    pause.addEventListener('click', function () {
      anims.forEach((anim) => anim.pause());
    });

    halfway.addEventListener('click', function () {
      anims.forEach((anim) => {
        anim.pause();
        anim.currentTime = totalDuration / 2;
      });
    });

    end.addEventListener('click', function () {
      anims.forEach((anim) => {
        anim.pause();
        anim.currentTime = totalDuration;
      });
    });

    reset.addEventListener('click', function () {
      anims.forEach((anim) => {
        anim.pause();
        anim.currentTime = 0;
      });
    });


    scrubber.addEventListener('input', function () {
      anims.forEach((anim) => {
        anim.pause();
        anim.currentTime = scrubber.valueAsNumber * totalDuration;
      })
    })
  });
})();
