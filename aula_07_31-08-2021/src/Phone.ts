export default class Phone {
  public ddd: string;
  public number: string;

  constructor(ddd: string, number: string) {
    this.ddd = ddd;
    this.number = number;
  }

  // getters
  get getDdd(): string {
    return this.ddd;
  }
  get getNumber(): string {
    return this.number;
  }
}
