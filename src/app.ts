import { Calculator } from "./classes/calculator.js";

const clearKey = document.querySelector("#key-clear") as HTMLDivElement;
const divideKey = document.querySelector("#key-divide") as HTMLDivElement;
const multiplyKey = document.querySelector("#key-multiply") as HTMLDivElement;
const sevenKey = document.querySelector("#key-seven") as HTMLDivElement;
const eightKey = document.querySelector("#key-eight") as HTMLDivElement;
const nineKey = document.querySelector("#key-nine") as HTMLDivElement;
const fourKey = document.querySelector("#key-four") as HTMLDivElement;
const fiveKey = document.querySelector("#key-five") as HTMLDivElement;
const sixKey = document.querySelector("#key-six") as HTMLDivElement;
const oneKey = document.querySelector("#key-one") as HTMLDivElement;
const twoKey = document.querySelector("#key-two") as HTMLDivElement;
const threeKey = document.querySelector("#key-three") as HTMLDivElement;
const percentageKey = document.querySelector("#key-percentage") as HTMLDivElement;
const zeroKey = document.querySelector("#key-zero") as HTMLDivElement;
const dotKey = document.querySelector("#key-dot") as HTMLDivElement;
const deleteKey = document.querySelector("#key-delete") as HTMLDivElement;
const minusKey = document.querySelector("#key-minus") as HTMLDivElement;
const plusKey = document.querySelector("#key-plus") as HTMLDivElement;
const equalsKey = document.querySelector("#key-equals") as HTMLDivElement;

const mainDisplay = document.querySelector("#display") as HTMLParagraphElement;

const calculator = new Calculator({
  normalKeys: [clearKey, sevenKey, eightKey, nineKey, fourKey, fiveKey, sixKey, oneKey, twoKey, zeroKey, threeKey],
  specialKeys: [divideKey, percentageKey, dotKey, deleteKey, minusKey, multiplyKey, plusKey, equalsKey],
  display: mainDisplay,
});

calculator.initialize();
