import Employee from './Employee';
import Phone from './Phone';
import Address from './Address';

export default class Company {
  public corporateName: string;
  public fantasyName: string;
  public cnpj: string;
  public address: Address;
  public phones: Phone[];
  public employees: Employee[];

  constructor(
    corporateName: string,
    fantasyName: string,
    cnpj: string,
    address: Address,
    phones: Phone[],
    employees: Employee[]
  ) {
    this.corporateName = corporateName;
    this.fantasyName = fantasyName;
    this.cnpj = cnpj;
    this.address = address;
    this.phones = phones;
    this.employees = employees;
  }

  // getters
  get getCorporateName(): string {
    return this.corporateName;
  }
  get getFantasyName(): string {
    return this.fantasyName;
  }
  get getCnpj(): string {
    return this.cnpj;
  }
  get getAddress(): Address {
    return this.address;
  }
  get getPhones(): Phone[] {
    return this.phones;
  }
  get getEmployees(): Employee[] {
    return this.employees;
  }
}
