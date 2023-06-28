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
        function resetValues() {
            virtualDisplay = "";
            currentPhase = "start";
            startPhaseValue = "";
            endPhaseValue = "";
        }
        function delInput(phase = "start") {
            if (startPhaseValue.length > 0) {
                startPhaseValue = startPhaseValue.substring(0, virtualDisplay.length - 1);
                virtualDisplay = virtualDisplay.substring(0, virtualDisplay.length - 1);
                updateDisplay();
            }
        }
        function runCalculations() {
            const lhs = parseInt(startPhaseValue.trim()); // lhs -> Left Hand Value
            const rhs = parseInt(endPhaseValue.trim()); // rhs -> Right Hand Value
            console.log(startPhaseValue, endPhaseValue);
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
            return result;
        }
        // Event Listeners
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
                    switch (operationType) {
                        case "=":
                            return;
                        case "DEL":
                            delInput(startPhaseValue);
                            break;
                        default:
                            virtualDisplay += ` ${operationType} `;
                            updateDisplay(); // update display
                            console.log("start phase value: " + startPhaseValue);
                            currentPhase = "final";
                            operation = operationType;
                            break;
                    }
                }
                else {
                    runCalculations();
                }
            });
        });
    }
}
