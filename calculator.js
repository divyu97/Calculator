const numberButtons = document.querySelectorAll(".button-number");
const input = document.querySelector(".input");
const zeroButton = document.querySelector(".button-zero");
zeroButton.addEventListener("click", () => {
    input.value += zeroButton.innerHTML;
});
for (const button of numberButtons) {
    button.addEventListener("click", () => {
        input.value += button.innerHTML;
    });
}