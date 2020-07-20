(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("Intersection Observer script active");

    const button = document.querySelector('#addClass');
    const box = document.querySelector('#box');
    const doc = document.querySelector('html');

    // Intersection Observer ready
    const hasIO = typeof IntersectionObserver === 'function';
    doc.classList.add((hasIO) ? "IntersectionObserver" : "noIntersectionObserver");

    if (hasIO) {
      const observedBoxes = [...document.querySelectorAll('#box')];
      const observerOptions = {
        rootMargin: '0px',
        threshold: '0.75',
      };

      const observerCallback = function(entries) {
        entries.forEach(function(entry) {
          const { target } = entry;
          const ir = entry.intersectionRatio;
          const rect = target.getBoundingClientRect();

          if (ir >= 0.75 && rect.bottom >= window.innerHeight) {
            target.classList.add("active");
          } else if (ir <= 0.75 && rect.bottom >= window.innerHeight) {
            target.classList.remove("active");
          }
        })
      };

      const boxObserver = new IntersectionObserver(observerCallback, observerOptions);

      observedBoxes.forEach(function(box, index) {
        boxObserver.observe(box);
      });


    }
  });
})();
