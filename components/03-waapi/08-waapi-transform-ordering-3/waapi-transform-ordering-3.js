(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("waapi-transform-ordering-3 active");

    const button = document.querySelector('#trigger');
    const pause = document.querySelector('#pause');
    const halfway = document.querySelector('#halfway');
    const end = document.querySelector('#end');
    const reset = document.querySelector('#reset');
    const scrubber = document.querySelector('#scrubber');

    const boxA = document.querySelector('#boxContainerA');
    const boxB = document.querySelector('#boxContainerB');

    const boxTranslate = boxA.querySelector('[data-translate]');
    const boxRotate = boxA.querySelector('[data-rotate]');
    const boxScale = boxA.querySelector('[data-scale]');

    const boxTranslateB = boxB.querySelector('[data-translate]');
    const boxRotateB = boxB.querySelector('[data-rotate]');
    const boxScaleB = boxB.querySelector('[data-scale]');

    const animTranslateX = [{
      transform: `translateX(-300px)`,
    }, {
      transform: 'translateX(300px)',
    }];

    const animTranslateY = [{
      transform: `translateY(-300px)`,
    }, {
      transform: 'translateY(300px)',
    }];

    const animRotate = [{
      transform: `rotate(-90deg)`,
    }, {
      transform: 'rotate(90deg)',
    }, {
      transform: 'rotate(-90deg)',
    }];

    const animScale = [{
      transform: `scale(0.15)`,
    }, {
      transform: 'scale(1.5)',
    }, {
      transform: 'scale(0.15)',
    }];

    const totalDuration = 5000;

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
      timing.duration = totalDuration - timing.delay - timing.endDelay;
    });

    let anims = [];

    function makeAnim(el, animation, timing) {
      const anim = el.animate(animation, timing);
      anim.pause();
      anims.push(anim);
    }

    // const boxAnim = box.animate(animInA, timingA);
    // boxAnim.pause();

    makeAnim(boxTranslate, animTranslateX, timingA);
    makeAnim(boxRotate, animRotate, timingA);
    makeAnim(boxScale, animScale, timingA);

    makeAnim(boxTranslateB, animTranslateX, timingA);
    makeAnim(boxRotateB, animRotate, timingA);
    makeAnim(boxScaleB, animScale, timingA);

    // Controls

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
