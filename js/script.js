const form = document.querySelector('form');
const convertBtn = document.querySelector('button[type="submit"');
const resetBtn = form.querySelector('button[type="reset"]');
const errorEl = document.getElementById('error-el');

const showError = () => {
  errorEl.textContent = 'Not a binary, reset and try again';
  convertBtn.disabled = true;
  form.querySelector('#binary').disabled = true;
  form.querySelector('#result-el').disabled = true;
};

const resetForm = () => {
  errorEl.textContent = '';
  convertBtn.disabled = false;
  form.querySelector('#binary').disabled = false;
  form.querySelector('#result-el').disabled = false;
};

const convert = (e) => {
  e.preventDefault();

  const binary = form.querySelector('#binary').value;
  let resultEl = form.querySelector('#result-el');

  // Clear result before showing next result
  // resultEl.textContent = '';

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0' || binary[i] === '1') {
      resultEl.value = binary;
      //

      //
    } else {
      showError();
    }
  }
};

form.addEventListener('submit', convert);
resetBtn.addEventListener('click', resetForm);
