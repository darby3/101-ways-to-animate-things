(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("waapi-within-viewport active");

    const button = document.querySelector('#trigger');
    const box = document.querySelector('#box');

    // Honestly I'm not sure if this is the best way to do this, but it sure is *a* way to do this.

    // We need the initial display values, assuming there's some CSS styling at play
    const boxRect = box.getBoundingClientRect();

    // box.style.transform = `translate(${boxRect.width}px, 0)`;
    // box.style.display = 'none';
    // box.style.opacity = 0;

    box.dataset.active = 'false';
    box.style.position = 'absolute';
    box.style.margin = 0;
    box.dataset.curPos = 'start';

    button.addEventListener('click', function () {
      if (box.dataset.active === 'in-process') {
        console.log("do nothing");
      } else if (box.dataset.active === 'false') {
        if (box.dataset.curPos === 'start') {
          // Animate in

          box.dataset.active = 'in-process'

          const animIn = box.animate([{
            left: '',
            top: '',
          }, {
            left: 0,
            top: 0
          }], {
            duration: 500,
            easing: 'cubic-bezier(.99,0,.7,1)',
            fill: 'both'
          });

          animIn.onfinish = function () {
            box.dataset.curPos = 'ul';
            box.dataset.active = 'false';
          }
        } else if (box.dataset.curPos === 'ul') {
          // Animate in

          box.dataset.active = 'in-process'

          const animIn = box.animate([{
            left: 0,
            top: 0,
          }, {
            left: `${window.innerWidth - boxRect.width}px`,
            top: 0
          }], {
            duration: 500,
            easing: 'cubic-bezier(.99,0,.7,1)',
            fill: 'both'
          });

          animIn.onfinish = function () {
            box.dataset.curPos = 'ur';
            box.dataset.active = 'false';
          }
        } else if (box.dataset.curPos === 'ur') {
          // Animate in

          box.dataset.active = 'in-process'

          const animIn = box.animate([{
            left: `${window.innerWidth - boxRect.width}px`,
            top: 0
          }, {
            left: `${window.innerWidth - boxRect.width}px`,
            top: `${window.innerHeight - boxRect.height}px`
          }], {
            duration: 500,
            easing: 'cubic-bezier(.99,0,.7,1)',
            fill: 'both'
          });

          animIn.onfinish = function () {
            box.dataset.curPos = 'lr';
            box.dataset.active = 'false';
          }
        } else if (box.dataset.curPos === 'lr') {
          // Animate in

          box.dataset.active = 'in-process'

          const animIn = box.animate([{
            left: `${window.innerWidth - boxRect.width}px`,
            top: `${window.innerHeight - boxRect.height}px`
          }, {
            left: 0,
            top: `${window.innerHeight - boxRect.height}px`
          }], {
            duration: 500,
            easing: 'cubic-bezier(.99,0,.7,1)',
            fill: 'both'
          });

          animIn.onfinish = function () {
            box.dataset.curPos = 'll';
            box.dataset.active = 'false';
          }
        } else if (box.dataset.curPos === 'll') {
          // Animate in

          box.dataset.active = 'in-process'

          const animIn = box.animate([{
            left: 0,
            top: `${window.innerHeight - boxRect.height}px`
          }, {
            left: 0,
            top: 0
          }], {
            duration: 500,
            easing: 'cubic-bezier(.99,0,.7,1)',
            fill: 'both'
          });

          animIn.onfinish = function () {
            box.dataset.curPos = 'ul';
            box.dataset.active = 'false';
          }
        }
      } else if (box.dataset.active === 'true') {
        // Animate out

        box.dataset.active = 'in-process'

        const animOut = box.animate([{
          transformOrigin: 'center center',
          transform: 'translate(0, 0)',
          opacity: 1,
          backgroundColor: 'rgba(255,0,234,0.16)',
        }, {
          transformOrigin: 'center center',
          transform: `translate(${boxRect.width * 3}px, 0)`,
          backgroundColor: 'rgb(255,0,234)',
          opacity: 0
        }], {
          duration: 2500,
          easing: 'cubic-bezier(0,.99,.81,1)',
          fill: 'both'
        });

        animOut.onfinish = function () {
          box.style.display = 'none';
          box.dataset.active = 'false';
        }
      }

    })
  });
})();
