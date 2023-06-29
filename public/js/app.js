import { Calculator } from "./classes/calculator.js";
const clearKey = document.querySelector("#key-clear");
const divideKey = document.querySelector("#key-divide");
const multiplyKey = document.querySelector("#key-multiply");
const sevenKey = document.querySelector("#key-seven");
const eightKey = document.querySelector("#key-eight");
const nineKey = document.querySelector("#key-nine");
const fourKey = document.querySelector("#key-four");
const fiveKey = document.querySelector("#key-five");
const sixKey = document.querySelector("#key-six");
const oneKey = document.querySelector("#key-one");
const twoKey = document.querySelector("#key-two");
const threeKey = document.querySelector("#key-three");
const percentageKey = document.querySelector("#key-percentage");
const zeroKey = document.querySelector("#key-zero");
const dotKey = document.querySelector("#key-dot");
const deleteKey = document.querySelector("#key-delete");
const minusKey = document.querySelector("#key-minus");
const plusKey = document.querySelector("#key-plus");
const equalsKey = document.querySelector("#key-equals");
const mainDisplay = document.querySelector("#display");
const calculator = new Calculator({
    normalKeys: [sevenKey, eightKey, nineKey, fourKey, fiveKey, sixKey, oneKey, twoKey, zeroKey, threeKey],
    specialKeys: [divideKey, percentageKey, dotKey, deleteKey, minusKey, multiplyKey, plusKey, equalsKey, clearKey],
}, mainDisplay);
calculator.initialize();
/**
 * TODO:
 *   -  Fix the DEL key functionality.
 *   -  Fix the display of results after consecutive operations.
 */
