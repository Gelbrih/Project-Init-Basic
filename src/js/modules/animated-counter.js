export function animateCounter(elem, duration) {
   const counters = elem.querySelectorAll('.counter-content');

   counters.forEach(counter => {
      const counterValue = counter.dataset.counter;
      let currentCounterValue = +counter.innerHTML;
      const step = counterValue / duration;

      let intervalId = setInterval(() => {
         if (currentCounterValue < counterValue) {
            currentCounterValue = Math.ceil(currentCounterValue + step);
            counter.innerHTML = currentCounterValue;
         } else {
            counter.innerHTML = counterValue || 0;
            clearInterval(intervalId);
         }
      }, step)
   });
}

document.addEventListener('scroll', () => {
   let counters = document.querySelectorAll('.counters');

   counters.forEach(counterElement => {
      let scroll = counterElement.getBoundingClientRect().top - document.documentElement.clientHeight + counterElement.clientHeight / 2;
      if (scroll <= 0) {
         animateCounter(counterElement, 800);
      }
   })
})



// export function animateCounter(elem, duration) {
//    const counters = document.querySelectorAll(`.${elem}`);

//    counters.forEach(counter => {
//       const counterValue = +counter.innerHTML;
//       counter.innerHTML = 0;

//       const counterAnimate = () => {
//          const currentCounterValue = +counter.innerText;
//          const step = counterValue / duration;

//          if (currentCounterValue < counterValue) {
//             counter.innerText = Math.ceil(currentCounterValue + step);
//             setTimeout(counterAnimate, 5);
//          } else {
//             counter.innerText = counterValue;
//          }
//       }
//       counterAnimate();
//    });
// }