import Phone from './Phone';
import Address from './Address';
import Employee from './Employee';
import Company from './Company';

export default class Descriptor {
  public phoneDescription(phone: Phone) {
    return `Telefone: (${phone.getDdd}) ${phone.getNumber}`;
  }

  public addressDescription(address: Address) {
    return `Endereço: ${address.getStreet}, nº ${address.getNumber} - ${address.getDistrict}, ${address.getCity}`;
  }

  public employeeDescription(employee: Employee) {
    const data = `Nome: ${employee.getName} \nMatrícula: ${employee.getRegistration} \nCPF: ${employee.getCpf} \n`;
    const phone = `${this.phoneDescription(employee.getPhone)}\n`;
    const address = `${this.addressDescription(employee.getAddress)}\n`;

    return data + phone + address;
  }

  public companyDescription(company: Company) {
    const data = `Razão social: ${company.getCorporateName} \nNome Fantasia: ${company.getFantasyName} \nCNPJ: ${company.getCnpj} \n`;
    let phones = '';
    for (let i: number = 0; i < company.getPhones.length; i++) {
      phones += `${this.phoneDescription(company.getPhones[i])}\n`;
    }
    const address = `${this.addressDescription(company.getAddress)}\n`;
    let employees = '';
    for (let i: number = 0; i < company.getEmployees.length; i++) {
      employees += `${this.employeeDescription(company.getEmployees[i])}\n`;
    }

    return (
      '-----------------------------\n' +
      data +
      phones +
      address +
      '-----------------------------\n' +
      employees
    );
  }
}
