document.addEventListener("DOMContentLoaded", () => {
    const screen = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let screenValue = localStorage.getItem("screenValue") || "";
    screen.value = screenValue;

    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            handleButtonClick(e.target.innerText);
        });
    });

    document.addEventListener("keydown", (e) => {
        handleKeyboardInput(e);
    });

    function handleButtonClick(buttonText) {
        if (buttonText === "X") {
            buttonText = "*";
            screenValue += buttonText;
        } else if (buttonText === "C") {
            screenValue = "";
        } else if (buttonText === "=") {
            try {
                screenValue = eval(screenValue).toString();
            } catch (error) {
                screenValue = "Expression error";
            }
        } else {
            screenValue += buttonText;
        }
        screen.value = screenValue;
        localStorage.setItem("screenValue", screenValue);
    }

    function handleKeyboardInput(e) {
        if ((e.key >= '0' && e.key <= '9') || e.key === '.' || e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            screenValue += e.key;
        } else if (e.key === 'Enter') {
            try {
                screenValue = eval(screenValue).toString();
            } catch (error) {
                screenValue = "Expression error";
            }
        } else if (e.key === 'Backspace') {
            screenValue = screenValue.slice(0, -1);
        } else if (e.key.toLowerCase() === 'c') {
            screenValue = "";
        }
        screen.value = screenValue;
        localStorage.setItem("screenValue", screenValue);
    }
});
