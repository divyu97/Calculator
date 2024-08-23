const numberButtons = document.querySelectorAll(".button-number");
const input = document.querySelector(".input");
const zeroButton = document.querySelector(".button-zero");
const inputexp = documnent.querySelector(".inputexp");
zeroButton.addEventListener("click", () => {
    input.value += zeroButton.innerHTML;
});
for (const button of numberButtons) {
    button.addEventListener("click", () => {
        input.value += button.innerHTML;
    });
}
document.querySelector(".button-clear").addEventListener("click", () => {
    input.value = input.value.toString().slice(0, input.value.length - 1);
});
document.querySelector(".button-clearall").addEventListener("click", () => {
    input.value = "";
});

document.querySelector(".button-decimal").addEventListener("click", () => {
    if (!(input.value.includes("."))) {
        input.value += ".";
    }
});

document.querySelector(".button-sign").addEventListener("click", () => {
    if (input.value !== "0") {
        if (!(isNaN(parseInt(input.value[0]))) || (input.value[0] === "." && !(isNaN(parseInt(input.value[1]))))) {
            input.value = "−" + input.value;
        } else if (input.value[0] === "−") {
            input.value = input.value.slice(1);
        }
    }
});

function operation(op, x, y) {
    var number1;
    var number2;
    for (let i = 1; i < 3; i++) {
        if (arguments[i].includes(".")) {
            if (i === 1) {
                number1 = parseFloat(arguments[i]);
            } else {
                number2 = parseFloat(arguments[i]);
            }
        } else {
            if (i === 1) {
                number1 = parseInt(arguments[i]);
            } else {
                number2 = parseInt(arguments[i]);
            }
        }
    }
    if (op === "+") {
        return number1 + number2;
    } else if (op === "−") {
        return number1 - number2;
    } else if (op === "×") {
        return number1 * number2;
    } else {
        return number1 / number2;
    }
}