import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import okIcon from '/img/icons/ok.png';
import cautionIcon from '/img/icons/caution.png';
import errorIcon from '/img/icons/error.png';

const formEl = document.querySelector('.form');
const delayInputEl = document.querySelector('.form-input');

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const timeDelayEl = document.querySelector('.form-input');
  const timeDelay = timeDelayEl.value;
  if (timeDelay <= 0) {
    iziToast.warning({
      title: 'Caution',
      position: 'topRight',
      messageColor: '#fff',
      backgroundColor: '#ffa000',
      iconColor: '#fff',
      titleColor: '#fff',
      close: true,
      closeColor: '#fff',
      iconUrl: cautionIcon,
      message: 'You forgot important data',
    });
    formEl.reset();
    return;
  }  
  const stateCheckedEl = document.querySelector('input[name="state"]:checked');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateCheckedEl.value === 'fulfilled') {
        resolve(timeDelay);
      }
      reject(timeDelay);
    }, timeDelay);
  });
  promise
    .then(() => {
      iziToast.success({
        title: 'OK',
        position: 'topRight',
        backgroundColor: '#59a10d',
        iconColor: '#fff',
        titleColor: '#fff',
        messageColor: '#fff',
        close: true,
        closeColor: '#fff',
        iconUrl: okIcon,
        message: `✅ Fulfilled promise in ${timeDelay}ms`,
      });
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        position: 'topRight',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        iconColor: '#fff',
        titleColor: '#fff',
        close: true,
        closeColor: '#fff',
        iconUrl: errorIcon,
        message: `❌ Rejected promise in ${timeDelay}ms`,
      });
    })
    .finally(() => formEl.reset());
  // formEl.reset();
}
