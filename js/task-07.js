const fontSizeChanger = document.querySelector('input');
const textToChange = document.querySelector('span');

fontSizeChanger.addEventListener('change', () => {
    textToChange.setAttribute('style', `font-size:${fontSizeChanger.value}px`);
});
