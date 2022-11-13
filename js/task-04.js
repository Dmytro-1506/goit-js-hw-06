const counter = {
    value: 0,

    decrement() {
        this.value -= 1;
    },
    increment() {
        this.value += 1;
    },
};

const counterValue = document.querySelector('span');
const decrementButton = document.querySelector('button[data-action="decrement"]');

decrementButton.addEventListener('click', () => {
    counter.decrement();

    counterValue.textContent = counter.value;
});

const incrementButton = document.querySelector('button[data-action="increment"]')

incrementButton.addEventListener('click', () => {
    counter.increment();

    counterValue.textContent = counter.value;
});
