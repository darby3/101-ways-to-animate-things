(function () {
  document.addEventListener('DOMContentLoaded', function () {
    console.log("transition-end-event-chain active");

    const button = document.querySelector('#trigger');
    const boxOne = document.querySelector('#triggerOne');
    const boxTwo = document.querySelector('#triggerTwo');
    const boxThree = document.querySelector('#triggerThree');

    // Just adding the active class to the first box to start the reaction
    button.addEventListener('click', function () {
      boxOne.classList.toggle('active');
    })

    // Note that the transitionend event fires on everything that transitions;
    // so if you have two things transition, this will jam up pretty quick.
    // Though I guess you could check the event object to see what transition
    // fired? Probably? And do something special with that? I don't know.
    boxOne.addEventListener('transitionend', function() {
      boxTwo.classList.toggle('active');
    })

    boxTwo.addEventListener('transitionend', function() {
      boxThree.classList.toggle('active');
    })
  });
})();
