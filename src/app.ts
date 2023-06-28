import { Calculator } from "./classes/calculator.js";

const clearKey = document.querySelector("[data-key-clear]") as HTMLDivElement;
const divideKey = document.querySelector("[data-key-divide]") as HTMLDivElement;
const multiplyKey = document.querySelector("[data-key-multiply]") as HTMLDivElement;
const sevenKey = document.querySelector("[data-key-seven]") as HTMLDivElement;
const eightKey = document.querySelector("[data-key-eight]") as HTMLDivElement;
const nineKey = document.querySelector("[data-key-nine]") as HTMLDivElement;
const fourKey = document.querySelector("[data-key-four]") as HTMLDivElement;
const fiveKey = document.querySelector("[data-key-five]") as HTMLDivElement;
const sixKey = document.querySelector("[data-key-six]") as HTMLDivElement;
const oneKey = document.querySelector("[data-key-one]") as HTMLDivElement;
const twoKey = document.querySelector("[data-key-two]") as HTMLDivElement;
const threeKey = document.querySelector("[data-key-three]") as HTMLDivElement;
const percentageKey = document.querySelector("[data-key-percentage]") as HTMLDivElement;
const zeroKey = document.querySelector("[data-key-zero]") as HTMLDivElement;
const dotKey = document.querySelector("[data-key-dot]") as HTMLDivElement;
const deleteKey = document.querySelector("[data-key-delete]") as HTMLDivElement;
const minusKey = document.querySelector("[data-key-minus]") as HTMLDivElement;
const plusKey = document.querySelector("[data-key-plus]") as HTMLDivElement;
const equalsKey = document.querySelector("[data-key-equals]") as HTMLDivElement;

const calculator = new Calculator(
  {
    normalKeys: [
      clearKey,
      multiplyKey,
      sevenKey,
      eightKey,
      nineKey,
      fourKey,
      fiveKey,
      sixKey,
      oneKey,
      twoKey,
      zeroKey,
      threeKey,
    ],
  },
  { specialKeys: [divideKey, percentageKey, dotKey, deleteKey, minusKey, plusKey, equalsKey] }
);

calculator.initialize();
