interface HasInitialize {
  initialize(): void;
}

export class Calculator implements HasInitialize {
  constructor(
    private allKeysDisplay: {
      normalKeys: HTMLDivElement[];
      specialKeys: HTMLDivElement[];
      display: HTMLParagraphElement;
    }
  ) {}
  initialize(): void {
    let virtualDisplay: string = "";
    let currentPhase: string = "start";
    let startPhaseValue: string = "";
    let endPhaseValue: string = "";
    let operation: string = "";

    function resetValues(): void {
      virtualDisplay = "";
      currentPhase = "start";
      startPhaseValue = "";
      endPhaseValue = "";
    }

    function runCalculations(): number {
      resetValues();
      console.log("Operation: " + operation);
      return 0;
    }

    this.allKeysDisplay.normalKeys.forEach((key) => {
      key.addEventListener("click", () => {
        const keyContent: string = key.textContent!;
        virtualDisplay += keyContent;

        if (currentPhase === "start") {
          startPhaseValue += keyContent;
        } else {
          endPhaseValue += keyContent;
        }

        console.log([virtualDisplay, startPhaseValue, endPhaseValue]);
      });
    });

    this.allKeysDisplay.specialKeys.forEach((key) => {
      key.addEventListener("click", () => {
        if (currentPhase === "start") {
          const operationType: string = key.textContent!;
          virtualDisplay += ` ${operationType} `;
          console.log(virtualDisplay);
          currentPhase = "final";
          operation = operationType;
        } else {
          runCalculations();
        }
      });
    });
  }
}
