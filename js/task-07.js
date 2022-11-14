const fontSizeChanger = document.querySelector('input');
const textToChange = document.querySelector('span');

fontSizeChanger.addEventListener('input', () => {
    textToChange.setAttribute('style', `font-size:${fontSizeChanger.value}px`);
});
