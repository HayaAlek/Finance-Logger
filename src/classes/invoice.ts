import { HasFormater } from "../interfaces/HasFormater.js";
// classes

export class invoice implements HasFormater {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;

  //   constructor(c: string, d: string, a: number) {
  // this.client = c;
  // this.details = d;
  // this.amount = a;
  //   }
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
