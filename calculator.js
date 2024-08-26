const numberButtons = document.querySelectorAll(".button-number");
const input = document.querySelector(".input");
const zeroButton = document.querySelector(".button-zero");
const inputexp = document.querySelector(".inputexp");
const operators = document.querySelectorAll(".button-operator");
zeroButton.addEventListener("click", () => {
    input.value += zeroButton.innerHTML;
});
for (const button of numberButtons) {
    button.addEventListener("click", () => {
        input.value += button.innerHTML;
    });
}
document.querySelector(".button-clear").addEventListener("click", () => {
    if (inputexp.value.includes("=")) {
        let newValue = "";
        let tmpValue = inputexp.value.slice(0, inputexp.value.length - 3);
        let i = tmpValue.length - 1;
        while (tmpValue[i] !== " ") {
            newValue += tmpValue[i];
            i--;
        }
        input.value = newValue.split("").reverse().join("");
        inputexp.value = inputexp.value.slice(0, inputexp.value.length - 4 - newValue.length);
    } else {
        input.value = input.value.toString().slice(0, input.value.length - 1);
    }
});
document.querySelector(".button-clearall").addEventListener("click", () => {
    input.value = "";
    inputexp.value = "";
});

document.querySelector(".button-decimal").addEventListener("click", () => {
    if (!(input.value.includes("."))) {
        input.value += ".";
    }
});

document.querySelector(".button-sign").addEventListener("click", () => {
    if (input.value !== "0") {
        if (!(isNaN(parseInt(input.value[0]))) || (input.value[0] === "." && !(isNaN(parseInt(input.value[1]))))) {
            input.value = "-" + input.value;
        } else if (input.value[0] === "-") {
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

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (!(isNaN(input.value)) && (input.value !== "" || inputexp.value !== "")) {
            if (!(inputexp.value.includes("+")) && !(inputexp.value.includes("−")) && !(inputexp.value.includes("×")) && !(inputexp.value.includes("÷"))) {
                inputexp.value = input.value + " " + operator.innerHTML;
                input.value = "";
            } else if (operator.innerHTML === inputexp.value.slice(-1)) {
                if (input.value !== "") {
                    inputexp.value = operation(operator.innerHTML, inputexp.value.slice(0, inputexp.value.length - 2), input.value) + " " + operator.innerHTML;
                    input.value = "";
                }  
            } else if (inputexp.value.includes("=")) {
                inputexp.value = input.value + " " + operator.innerHTML;
                input.value = "";
            }
        } 
    });
});

document.querySelector(".button-equal").addEventListener("click", () => {
    let inp = input.value;
    if (!(isNaN(inp)) && inp !== "" && !(inputexp.value.includes("="))) {
        if (inputexp.value.includes("+") || inputexp.value.includes("−") || inputexp.value.includes("×") || inputexp.value.includes("÷")) {
            input.value = operation(inputexp.value.slice(-1), inputexp.value.slice(0, inputexp.value.length - 2), inp);
            inputexp.value += " " + inp + " =";
        }
    }
});