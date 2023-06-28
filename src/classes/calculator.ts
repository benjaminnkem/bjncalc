interface HasInitialize {
  initialize(): void;
}

export class Calculator implements HasInitialize {
  constructor(
    private allKeysDisplay: {
      normalKeys: HTMLDivElement[];
      specialKeys: HTMLDivElement[];
    },
    public display: HTMLParagraphElement
  ) {}
  initialize(): void {
    let virtualDisplay: string = "";
    let currentPhase: string = "start";
    let startPhaseValue: string = "";
    let endPhaseValue: string = "";
    let operation: string = "";

    // For recursive calculations
    let hasCalculated: boolean = false;
    let hasCalcCounter: number = 0;

    const updateDisplay = (): void => {
      this.display.textContent = virtualDisplay;
    };

    function resetValues(): void {
      // virtualDisplay = "";
      currentPhase = "start";
      startPhaseValue = "";
      endPhaseValue = "";
    }

    // Removing inputs from the end of the current phase value
    function delInput(phase: string = "start"): void {
      if (startPhaseValue.length > 0) {
        startPhaseValue = startPhaseValue.substring(0, virtualDisplay.length - 1);
        virtualDisplay = virtualDisplay.substring(0, virtualDisplay.length - 1);
        updateDisplay();
      }
    }

    function runCalculations(): number {
      const lhs: number = parseInt(startPhaseValue.trim()); // lhs -> Left Hand Value
      const rhs: number = parseInt(endPhaseValue.trim()); // rhs -> Right Hand Value

      let result: number = 0;
      function isResultValid(value: number): void {
        if (isNaN(value)) {
          currentPhase = "start";
          startPhaseValue = value.toString();
          console.log(startPhaseValue, value);
        } else {
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
        case "CE":
          virtualDisplay = "";
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
      updateDisplay();
      resetValues();
      return result;
    }

    // Event Listeners
    this.allKeysDisplay.normalKeys.forEach((key) => {
      key.addEventListener("click", () => {
        // Checking if calculation function has been called...
        hasCalculated = false;
        hasCalcCounter++;

        // If calculation function has been called, and normal keys are pressed,
        // Reset the virtual display value back to to the initial value;

        const keyContent: string = key.textContent!;
        if (!hasCalculated && hasCalcCounter <= 1) {
          virtualDisplay = ""; // Resets here
        }
        virtualDisplay += keyContent;
        updateDisplay(); // update display
        if (currentPhase === "start") {
          startPhaseValue += keyContent;
        } else {
          endPhaseValue += keyContent;
        }
      });
    });

    // Special keys
    // -- handling multiple operations based on the operation type
    function handleOperationAndRepeat(operationType: string): void {
      if (hasCalculated) {
        operation = operationType;
        startPhaseValue += virtualDisplay;
        virtualDisplay += ` ${operationType} `;
        updateDisplay();
        currentPhase = "final";
      } else {
        virtualDisplay += ` ${operationType} `;
        updateDisplay(); // update display
        currentPhase = "final";
        operation = operationType;
      }
    }

    // Listening for special keys events
    this.allKeysDisplay.specialKeys.forEach((key) => {
      key.addEventListener("click", () => {
        if (currentPhase === "start") {
          const operationType: string = key.textContent!;
          switch (operationType) {
            case "=":
              return;
            case "DEL":
              delInput(startPhaseValue);
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
            default:
              break;
          }
        } else {
          runCalculations();
        }
      });
    });
  }
}
