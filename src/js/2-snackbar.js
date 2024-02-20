import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


    function handleSubmit(event) {
      event.preventDefault();

      const { delay, state } = this.elements;
      const delayValue = delay.value;
      const stateValue = state.value;

      delay.value = '';
      state.value = null;

      const radioButtons = document.querySelectorAll('input[name="state"]');
      radioButtons.forEach(button => button.checked = false);

      const promise = createDelayPromise(delayValue, stateValue);

      promise.then(
        promiseFulfilled,
        promiseRejected
      );
    }

  
    function createDelayPromise(delayValue, stateValue) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (stateValue === 'fulfilled') {
            resolve(delayValue);
          } else {
            reject(delayValue);
          }
        }, delayValue);
      });
    }

    function promiseFulfilled(value) {
      iziToast.success({
        message: (`✅ Fulfilled promise in ${value}ms`),
    });
    }

    function promiseRejected(value) {
      iziToast.error({
        message: (`❌ Rejected promise in ${value}ms`),
    });
    }

    const form = document.querySelector('.form');
    form.addEventListener('submit', handleSubmit);