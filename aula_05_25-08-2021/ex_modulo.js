/**
 * Imagine que você foi contratada para desenvolver um módulo que possa criar objetos dos tipos empresa,
 * cliente, telefone e endereço.
 *
 * Objetivos, parte 1:
 * No módulo desenvolvido deverão existir métodos construtores para cada tipo de objeto.
 * Este módulo deverá ser do tipo ES6. Para cada atributo privado, deverão existir métodos de acesso get.
 * Para cada atributo, deverão existir métodos que permitam recuperar o valor do atributo em caixa alta e caixa baixa.
 *
 * Classe Cliente: O cpf deve ser algo que não pode mudar após sua criação. Portanto, o atributo deve
 * ser privado. Um cliente pode ter uma lista de telefones, que pode crescer ou diminuir.
 */

export class Client {
  #cpf;

  constructor(cpf, name, address, phones) {
    this.#cpf = cpf;
    this.name = name;
    this.address = address;
    this.phones = new Set(phones);
  }

  // métodos personalizados
  description(phones) {
    const client = {
      nome: this.getName,
      cpf: this.getCpf,
      telefone: phones,
      endereco: this.getAddress,
    };
    return client;
  }
  nameUpperCase() {
    return this.getName.toUpperCase();
  }
  nameLowerCase() {
    return this.getName.toLowerCase();
  }

  addressUpperCase() {
    return this.getAddress.toUpperCase();
  }
  addressLowerCase() {
    return this.getAddress.toLowerCase();
  }

  // getters
  get getCpf() {
    return this.#cpf;
  }
  get getName() {
    return this.name;
  }
  get getAddress() {
    return this.address.description();
  }
  get getPhones() {
    let allPhones = '';
    this.phones.forEach(phone => {
      allPhones += phone.description() + ' ';
    });
    return allPhones;
  }
}

/**
 * - Classe Telefone: não deve possuir atributos privados. Esta classe servirá para criar objetos
 * que serão usados em clientes e na empresa.
 */

export class Phone {
  constructor(ddd, number) {
    this.ddd = ddd;
    this.number = number;
  }

  // métodos personalizados
  description() {
    return `(${this.getDdd})${this.getNumber}`;
  }
  // getters
  get getDdd() {
    return this.ddd;
  }
  get getNumber() {
    return this.number;
  }
}

/**
 * - Classe Endereço: não deve possuir atributos privados. Esta classe servirá para criar objetos
 * que serão usados em clientes e na empresa.
 */

export class Address {
  constructor(street, number, district, city, state) {
    this.street = street;
    this.number = number;
    this.district = district;
    this.city = city;
    this.state = state;
  }

  // métodos personalizados
  description() {
    return `${this.getStreet}, ${this.getNumber}. ${this.getDistrict}, ${this.getCity} - ${this.getState}`;
  }

  streetUpperCase() {
    return this.getStreet.toUpperCase();
  }
  streetLowerCase() {
    return this.getStreet.toLowerCase();
  }

  districtUpperCase() {
    return this.getDistrict.toUpperCase();
  }
  districtLowerCase() {
    return this.getDistrict.toLowerCase();
  }

  cityUpperCase() {
    return this.getCity.toUpperCase();
  }
  cityLowerCase() {
    return this.getCity.toLowerCase();
  }

  stateUpperCase() {
    return this.getState.toUpperCase();
  }
  stateLowerCase() {
    return this.getState.toLowerCase();
  }

  // getters
  get getStreet() {
    return this.street;
  }
  get getNumber() {
    return this.number;
  }
  get getDistrict() {
    return this.district;
  }
  get getCity() {
    return this.city;
  }
  get getState() {
    return this.state;
  }
}

/**
 * - Classe Empresa: O cnpj de uma empresa é algo que não deve mudar após a criação do objeto.
 * Por isso, este atributo deve ser privado na classe empresa.
 */

export class Company {
  #cnpj;
  constructor(corporateName, fantasyName, cnpj, address, clients, phones) {
    this.corporateName = corporateName;
    this.fantasyName = fantasyName;
    this.#cnpj = cnpj;
    this.address = address;
    this.clients = new Set(clients);
    this.phones = new Set(phones);
  }

  // métodos personalizados
  corporateNameUpperCase() {
    return this.getCorporateName.toUpperCase();
  }
  corporateNameLowerCase() {
    return this.getCorporateName.toLowerCase();
  }

  fantasyNameUpperCase() {
    return this.getFantasyName.toUpperCase();
  }
  fantasyNameLowerCase() {
    return this.getFantasyName.toLowerCase();
  }

  addressUpperCase() {
    return this.getAddress.toUpperCase();
  }
  addressLowerCase() {
    return this.getAddress.toLowerCase();
  }

  // getters
  get getCnpj() {
    return this.#cnpj;
  }
  get getCorporateName() {
    return this.corporateName;
  }
  get getFantasyName() {
    return this.fantasyName;
  }
  get getAddress() {
    return this.address.description();
  }
  get getPhones() {
    let allPhones = '';
    this.phones.forEach(phone => {
      allPhones += phone.description() + ' ';
    });
    return allPhones;
  }
  get getClients() {
    return this.clients;
  }
}
