import { Calculator } from "./classes/calculator.js";
const clearKey = document.querySelector("[data-key-clear]");
const divideKey = document.querySelector("[data-key-divide]");
const multiplyKey = document.querySelector("[data-key-multiply]");
const sevenKey = document.querySelector("[data-key-seven]");
const eightKey = document.querySelector("[data-key-eight]");
const nineKey = document.querySelector("[data-key-nine]");
const fourKey = document.querySelector("[data-key-four]");
const fiveKey = document.querySelector("[data-key-five]");
const sixKey = document.querySelector("[data-key-six]");
const oneKey = document.querySelector("[data-key-one]");
const twoKey = document.querySelector("[data-key-two]");
const threeKey = document.querySelector("[data-key-three]");
const percentageKey = document.querySelector("[data-key-percentage]");
const zeroKey = document.querySelector("[data-key-zero]");
const dotKey = document.querySelector("[data-key-dot]");
const deleteKey = document.querySelector("[data-key-delete]");
const minusKey = document.querySelector("[data-key-minus]");
const plusKey = document.querySelector("[data-key-plus]");
const equalsKey = document.querySelector("[data-key-equals]");
const calculator = new Calculator({
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
}, { specialKeys: [divideKey, percentageKey, dotKey, deleteKey, minusKey, plusKey, equalsKey] });
calculator.initialize();
