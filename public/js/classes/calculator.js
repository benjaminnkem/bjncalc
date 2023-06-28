export class Calculator {
    constructor(allKeysDisplay) {
        this.allKeysDisplay = allKeysDisplay;
    }
    initialize() {
        let virtualDisplay = "";
        let currentPhase = "start";
        let startPhaseValue = "";
        let endPhaseValue = "";
        let operation = "";
        function resetValues() {
            virtualDisplay = "";
            currentPhase = "start";
            startPhaseValue = "";
            endPhaseValue = "";
        }
        function runCalculations() {
            resetValues();
            console.log("Operation: " + operation);
            return 0;
        }
        this.allKeysDisplay.normalKeys.forEach((key) => {
            key.addEventListener("click", () => {
                const keyContent = key.textContent;
                virtualDisplay += keyContent;
                if (currentPhase === "start") {
                    startPhaseValue += keyContent;
                }
                else {
                    endPhaseValue += keyContent;
                }
                console.log([virtualDisplay, startPhaseValue, endPhaseValue]);
            });
        });
        this.allKeysDisplay.specialKeys.forEach((key) => {
            key.addEventListener("click", () => {
                if (currentPhase === "start") {
                    const operationType = key.textContent;
                    virtualDisplay += ` ${operationType} `;
                    console.log(virtualDisplay);
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
