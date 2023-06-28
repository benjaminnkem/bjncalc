interface HasInitialize {
  initialize(): void;
}

export class Calculator implements HasInitialize {
  constructor(private norms: { normalKeys: HTMLDivElement[] }, private special: { specialKeys: HTMLDivElement[] }) {}
  initialize(): void {
    let virtualDisplay: string = "";
    const specialKeys: string[] = ["C", "/", "x", "del", "-", "+", "=", "%", "."];
    const normalKeys: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    this.norms.normalKeys.forEach((key) => {
      console.log(key);
    });

    console.log("I'm coming");
  }
}
