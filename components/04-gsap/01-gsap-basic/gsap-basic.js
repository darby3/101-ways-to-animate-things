(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("gsap-basic active");

    const { gsap } = require("gsap/dist/gsap");

    const button = document.querySelector('#trigger');
    const box = document.querySelector('#box');

    button.addEventListener('click', function () {
      gsap.to("#box", {
        duration: 1,
        x: 300,
        y: 10,
        rotation: 145,
        opacity: 0.15,
        ease: "back.inOut"
      });
    })
  });
})();
