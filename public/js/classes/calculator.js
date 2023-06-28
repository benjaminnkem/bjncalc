export class Calculator {
    constructor(allKeysDisplay, display) {
        this.allKeysDisplay = allKeysDisplay;
        this.display = display;
    }
    initialize() {
        let virtualDisplay = "";
        let currentPhase = "start";
        let startPhaseValue = "";
        let endPhaseValue = "";
        let operation = "";
        const updateDisplay = () => {
            this.display.textContent = virtualDisplay;
        };
        const resetValues = () => {
            virtualDisplay = "";
            currentPhase = "start";
            startPhaseValue = "";
            endPhaseValue = "";
        };
        const runCalculations = () => {
            const lhs = parseInt(startPhaseValue.trim()); // lhs -> Left Hand Value
            const rhs = parseInt(endPhaseValue.trim()); // rhs -> Right Hand Value
            let result = 0;
            switch (operation) {
                case "/":
                    result = lhs / rhs;
                    virtualDisplay = result.toString();
                    break;
                case "+":
                    result = lhs + rhs;
                    virtualDisplay = result.toString();
                    break;
                case "-":
                    result = lhs - rhs;
                    virtualDisplay = result.toString();
                    break;
                case "x":
                    result = lhs * rhs;
                    virtualDisplay = result.toString();
                    break;
                case "DEL":
                    // result = lhs - rhs;
                    break;
                case "=":
                    break;
                case "C":
                    break;
                case "%":
                    break;
                case ".":
                    break;
                default:
                    break;
            }
            updateDisplay();
            resetValues();
            return 0;
        };
        this.allKeysDisplay.normalKeys.forEach((key) => {
            key.addEventListener("click", () => {
                const keyContent = key.textContent;
                virtualDisplay += keyContent;
                updateDisplay(); // update display
                if (currentPhase === "start") {
                    startPhaseValue += keyContent;
                }
                else {
                    endPhaseValue += keyContent;
                }
            });
        });
        this.allKeysDisplay.specialKeys.forEach((key) => {
            key.addEventListener("click", () => {
                if (currentPhase === "start") {
                    const operationType = key.textContent;
                    virtualDisplay += ` ${operationType} `;
                    updateDisplay(); // update display
                    currentPhase = "final";
                    operation = operationType;
                }
                else {
                    runCalculations();
                }
            });
        });
    }
}
