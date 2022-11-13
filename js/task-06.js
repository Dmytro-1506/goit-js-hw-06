const input = document.querySelector('input');
const lengthInput = document.querySelector('input').getAttribute('data-length');

input.addEventListener('blur', () => {
    if (input.value.length === Number(lengthInput)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        console.log(input.value);
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});