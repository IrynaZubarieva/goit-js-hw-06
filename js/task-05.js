const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", inputChangeHandler);

function inputChangeHandler(event) {
    outputRef.textContent = event.currentTarget.value === ""
        ? "Anonymous"
        : event.currentTarget.value;
    // if (event.currentTarget.value === "") {
    //     return outputRef.textContent = "Anonymous";
    // }
    // return outputRef.textContent = event.currentTarget.value;
}