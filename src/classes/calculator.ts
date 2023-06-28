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

    const updateDisplay = (): void => {
      this.display.textContent = virtualDisplay;
    };

    const resetValues = (): void => {
      virtualDisplay = "";
      currentPhase = "start";
      startPhaseValue = "";
      endPhaseValue = "";
    };

    const runCalculations = (): number => {
      const lhs: number = parseInt(startPhaseValue.trim()); // lhs -> Left Hand Value
      const rhs: number = parseInt(endPhaseValue.trim()); // rhs -> Right Hand Value

      let result: number = 0;
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
        const keyContent: string = key.textContent!;
        virtualDisplay += keyContent;
        updateDisplay(); // update display
        if (currentPhase === "start") {
          startPhaseValue += keyContent;
        } else {
          endPhaseValue += keyContent;
        }
      });
    });

    this.allKeysDisplay.specialKeys.forEach((key) => {
      key.addEventListener("click", () => {
        if (currentPhase === "start") {
          const operationType: string = key.textContent!;
          virtualDisplay += ` ${operationType} `;
          updateDisplay(); // update display
          currentPhase = "final";
          operation = operationType;
        } else {
          runCalculations();
        }
      });
    });
  }
}
