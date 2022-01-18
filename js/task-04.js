let counterValue = 0;
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");

const buttonIncreaseHandler = () => { counterValue += 1; value.textContent = counterValue; }

const buttonDecreaseHandler = () => { counterValue -= 1; value.textContent = counterValue;}

incrementRef.addEventListener("click", buttonIncreaseHandler);
decrementRef.addEventListener("click", buttonDecreaseHandler);

