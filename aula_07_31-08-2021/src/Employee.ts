import Phone from './Phone';
import Address from './Address';

export default class Employee {
  public name: string;
  public registration: string;
  public cpf: string;
  public address: Address;
  public phone: Phone;

  constructor(
    name: string,
    registration: string,
    cpf: string,
    address: Address,
    phone: Phone
  ) {
    this.name = name;
    this.registration = registration;
    this.cpf = cpf;
    this.address = address;
    this.phone = phone;
  }

  // getters
  get getName(): string {
    return this.name;
  }
  get getRegistration(): string {
    return this.registration;
  }
  get getCpf(): string {
    return this.cpf;
  }
  get getAddress(): Address {
    return this.address;
  }
  get getPhone(): Phone {
    return this.phone;
  }
}
