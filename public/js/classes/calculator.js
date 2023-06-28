export class Calculator {
    constructor(norms, special) {
        this.norms = norms;
        this.special = special;
    }
    initialize() {
        let virtualDisplay = "";
        const specialKeys = ["C", "/", "x", "del", "-", "+", "=", "%", "."];
        const normalKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.norms.normalKeys.forEach((key) => {
            console.log(key);
        });
        console.log("I'm coming");
    }
}
