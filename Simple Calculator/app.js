const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button"); // Select all buttons
const specialChars = ["%", "*", "/", "-", "+", "=","*"];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        try {
            output = eval(output.replace("%", "/100"));
        } catch (error) {
            output = "Error"; // Handle any evaluation errors
        }
    } else if (btnValue === "AC" || btnValue === "Clear") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1); // Correctly remove the last character
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }

    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});