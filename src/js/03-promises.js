import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const formElements = evt.target.elements;
  console.log(formElements);

  const arrayOfData = {
    delay: Number(formElements.delay.value),
    step: Number(formElements.step.value),
    amount: Number(formElements.amount.value),
  };
  console.log(arrayOfData);

  for (let i = 1; i <= arrayOfData.amount; i += 1) {
    createPromise(i, arrayOfData.delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    arrayOfData.delay += arrayOfData.step;
    console.log('dalay', arrayOfData.delay);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }

      console.log(promise);
    }, delay);
  });
  return promise;
}

Notiflix.Notify.init({
  position: 'right-top',
  width: '300px',
  distance: '10px',
  opacity: 1,
  rtl: false,
  timeout: 4000,
});
