const incBtn = document.getElementById('inc');
const resetBtn = document.getElementById('reset');
const decBtn = document.getElementById('dec');
const numEl = document.getElementById('num');
const inputEl = document.getElementById('enter');
const submitBtn = document.getElementById('enter1');

let counter = 0;

function updateCounter() {
    numEl.textContent = counter;
}


incBtn.addEventListener('click', () => {
    counter += 1;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

decBtn.addEventListener('click', () => {
    counter -= 1;
    updateCounter();
});

function setCounterFromInput() {
    const value = Number(inputEl.value);

    if (!Number.isNaN(value)) {
        counter = value;
    } else {
        counter = 0;
    }

    updateCounter();
    inputEl.value = '';
}

submitBtn.addEventListener('click', setCounterFromInput);
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        setCounterFromInput();
    }
});
