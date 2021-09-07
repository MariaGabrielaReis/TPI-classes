export default class Address {
  public street: string;
  public number: number;
  public district: string;
  public city: string;

  constructor(street: string, number: number, district: string, city: string) {
    this.street = street;
    this.number = number;
    this.district = district;
    this.city = city;
  }

  // getters
  get getStreet(): string {
    return this.street;
  }
  get getNumber(): number {
    return this.number;
  }
  get getDistrict(): string {
    return this.district;
  }
  get getCity(): string {
    return this.city;
  }
}
