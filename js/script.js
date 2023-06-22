const form = document.querySelector('form');

const convert = (e) => {
  e.preventDefault();

  const binary = form.querySelector('#binary').value;
  const resultEl = form.querySelector('#result-el');
  let result;

  // Clear result
  resultEl.value = '';

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0' || binary[i] === '1') {
      result = 'Binary';
    } else {
      result = 'Not a binary';
    }
  }

  console.log(result);

  // Outputs result
  result.value = binary;
};

form.addEventListener('submit', convert);
