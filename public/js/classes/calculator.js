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
        // For recursive calculations
        let hasCalculatedOperation = "";
        let hasCalculated = false;
        let hasCalcCounter = 0;
        let allowOperations = false;
        // For decimals calculations
        let isDecimalCountForPhaseOne = 0;
        let isDecimalCountForPhaseTwo = 0;
        let virtualDisplayControlForDecimals = 0;
        const updateDisplay = () => {
            this.display.textContent = virtualDisplay;
        };
        function resetValues() {
            // virtualDisplay = "";
            currentPhase = "start";
            startPhaseValue = "";
            endPhaseValue = "";
        }
        // Removing inputs from the end of the current phase value
        function delInput() {
            if (currentPhase === "start") {
                if (startPhaseValue.length > 0) {
                    startPhaseValue = startPhaseValue.substring(0, virtualDisplay.length - 1);
                    virtualDisplay = virtualDisplay.substring(0, virtualDisplay.length - 1);
                    updateDisplay();
                }
            }
            else if (currentPhase === "final") {
                if (endPhaseValue.length > 0) {
                    endPhaseValue = endPhaseValue.substring(0, virtualDisplay.length - 1);
                    virtualDisplay += endPhaseValue;
                    updateDisplay();
                }
            }
            else {
                return;
            }
        }
        // Event Listeners
        this.allKeysDisplay.normalKeys.forEach((key) => {
            key.addEventListener("click", () => {
                allowOperations = true;
                // Checking if calculation function has been called...
                hasCalculated = false;
                hasCalcCounter++;
                // If calculation function has been called, and normal keys are pressed,
                // Reset the virtual display value back to to the initial value;
                const keyContent = key.textContent;
                if (!hasCalculated && hasCalcCounter <= 1) {
                    virtualDisplay = `${startPhaseValue} ${hasCalculatedOperation} `; // Resets here
                }
                function virtualHelper() {
                    // Helper function for updating KeyContent based on the virtualDisplayControlForDecimals
                    virtualDisplay += "";
                    virtualDisplayControlForDecimals++;
                }
                if (virtualDisplayControlForDecimals < 2 && isDecimalCountForPhaseOne >= 1) {
                    virtualDisplayControlForDecimals++;
                    virtualDisplay += keyContent === "." ? virtualHelper() : keyContent; // Updating display if KeyContent is not "."
                }
                else if (virtualDisplayControlForDecimals <= 2 && isDecimalCountForPhaseTwo >= 1) {
                    virtualDisplay += keyContent === "." ? "" : keyContent;
                }
                else {
                    virtualDisplay += keyContent;
                }
                updateDisplay(); // update display
                if (currentPhase === "start") {
                    if (keyContent === "." && isDecimalCountForPhaseOne < 1) {
                        isDecimalCountForPhaseOne++;
                        startPhaseValue += ".";
                    }
                    else {
                        if (keyContent !== ".")
                            startPhaseValue += keyContent;
                    }
                }
                else {
                    if (keyContent === "." && isDecimalCountForPhaseTwo < 1) {
                        isDecimalCountForPhaseTwo++;
                        endPhaseValue += ".";
                    }
                    else {
                        if (keyContent !== ".")
                            endPhaseValue += keyContent;
                    }
                }
            });
        });
        // Special keys
        // -- handling multiple operations based on the operation type
        function handleOperationAndRepeat(operationType) {
            if (hasCalculated) {
                operation = operationType;
                startPhaseValue += virtualDisplay;
                virtualDisplay += ` ${operationType} `;
                updateDisplay();
            }
            else {
                virtualDisplay += ` ${operationType} `;
                updateDisplay(); // update display
                operation = operationType;
            }
            currentPhase = "final";
        }
        // -- Listening for special keys events
        this.allKeysDisplay.specialKeys.forEach((key) => {
            key.addEventListener("click", () => {
                if (allowOperations) {
                    // Special operations are disabled initially to prevent errors
                    if (currentPhase === "start") {
                        const operationType = key.textContent;
                        hasCalculatedOperation = operationType;
                        switch (operationType) {
                            case "=":
                                return;
                            case "DEL":
                                delInput();
                                break;
                            case "CE":
                                virtualDisplay = "";
                                resetValues();
                                updateDisplay();
                                break;
                            case "/":
                                handleOperationAndRepeat(operationType);
                                break;
                            case "-":
                                handleOperationAndRepeat(operationType);
                                break;
                            case "+":
                                handleOperationAndRepeat(operationType);
                                break;
                            case "x":
                                handleOperationAndRepeat(operationType);
                                break;
                            case "%":
                                calculatePercent(virtualDisplay);
                                break;
                            default:
                                break;
                        }
                    }
                    else {
                        const operationType = key.textContent;
                        hasCalculatedOperation = operationType;
                        switch (operationType) {
                            case "=":
                                runCalculations();
                                break;
                            default:
                                break;
                        }
                    }
                }
            });
        });
        // CALCULATIONS
        // Find percentage
        function calculatePercent(value) {
            const valueAsNumber = parseFloat(value);
            if (isNaN(valueAsNumber)) {
                virtualDisplay = "Error";
                return;
            }
            virtualDisplay = `${valueAsNumber / 100}`;
            updateDisplay();
        }
        // Main calculations
        function runCalculations() {
            const lhs = parseFloat(startPhaseValue.trim()); // lhs -> Left Hand Value
            const rhs = parseFloat(endPhaseValue.trim()); // rhs -> Right Hand Value
            let result = 0;
            function isResultValid(value) {
                if (isNaN(value)) {
                    currentPhase = "start";
                    startPhaseValue = value.toString();
                }
                else {
                    virtualDisplay = result.toString();
                }
            }
            switch (operation) {
                case "/":
                    result = lhs / rhs;
                    isResultValid(result);
                    break;
                case "+":
                    result = lhs + rhs;
                    isResultValid(result);
                    break;
                case "-":
                    result = lhs - rhs;
                    isResultValid(result);
                    break;
                case "x":
                    result = lhs * rhs;
                    isResultValid(result);
                    break;
                case "=":
                    break;
                case "DEL":
                    delInput();
                    break;
                case "CE":
                    virtualDisplay = "";
                    isDecimalCountForPhaseOne = 0;
                    isDecimalCountForPhaseTwo = 0;
                    resetValues();
                    updateDisplay();
                    break;
                case "%":
                    break;
                case ".":
                    break;
                default:
                    break;
            }
            hasCalculated = true;
            hasCalcCounter = 0;
            hasCalculatedOperation = operation;
            updateDisplay();
            resetValues();
        }
    }
}
