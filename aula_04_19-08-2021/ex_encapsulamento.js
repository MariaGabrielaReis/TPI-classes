/**
 * Nesta atividade, você deve praticar a construção de objetos que precisam de atributos privados.
 * Além disto, também praticar a codificação de métodos get e set.
 * Esta atividade será dividia em três partes de objetivos:
 *
 * Cadastro de clientes...
 * Imagine que você foi contratada para desenvolver um script que possa criar objetos dos tipos empresa,
 * cliente, telefone e endereço.
 *
 * Objetivos, parte 1:
 * No script desenvolvido deverá existir funções construtoras para cada tipo de objeto. Para cada
 * atributo privado, deverão existir métodos de acesso get.Para cada atributo, deverão existir
 * métodos que permitam recuperar o valor do atributo em caixa alta e caixa baixa.
 */

/**
 * - Classe Cliente: O cpf deve ser algo que não pode mudar após sua criação. Portanto, o atributo deve
 * ser privado. Um cliente pode ter uma lista de telefones, que pode crescer ou diminuir.
 */

class Client {
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
    return this.phones;
  }
}

/**
 * - Classe Telefone: não deve possuir atributos privados. Esta classe servirá para criar objetos
 * que serão usados em clientes e na empresa.
 */

class Phone {
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

class Address {
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

class Company {
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
      allPhones += phone.description();
    });
    return allPhones;
  }
  get getClients() {
    // var allClients = [];
    // for (let i = 0; i < this.clients.length; i++) {
    //   var allPhones = '';
    //   clients[i].phones.forEach(phone => {
    //     allPhones += phone.description() + ' ';
    //   });
    //   allClients[i] = clients[i].description(allPhones);
    // }
    // return allClients;
  }
}

/**
 * Objetivos, parte 2:
 * O script deve ser testado! Para isso, crie uma empresa e atribua a ela um endereço e pelo menos
 * dois telefones. Além disso, crie cinco clientes, cada um com seu endereço e dois telefones. Estes
 * clientes devem ser colocados dentro do conjunto de clientes da empresa.
 */

// Criação de clientes
// telefones
const telefone1 = new Phone(12, 22222222);
const telefone2 = new Phone(12, 33333333);
const telefone3 = new Phone(12, 44444444);
const telefone4 = new Phone(12, 55555555);

// endereços
const endereco1 = new Address('Rua A', 111, 'Bairro Azul', 'Sampa', 'SP');
const endereco2 = new Address('Rua B', 222, 'Bairro Amarelo', 'Sampa', 'SP');
const endereco3 = new Address('Rua C', 333, 'Bairro Rosa', 'Sampa', 'SP');
const endereco4 = new Address('Rua D', 444, 'Bairro Roxo', 'Sampa', 'SP');
const endereco5 = new Address('Rua E', 555, 'Bairro Prata', 'Sampa', 'SP');

// clientes
const cliente1 = new Client(11111111111, 'Maria', endereco1, [
  telefone1,
  telefone2,
]);
const cliente2 = new Client(22222222222, 'João', endereco2, [
  telefone3,
  telefone4,
]);
const cliente3 = new Client(33333333333, 'Marcos', endereco3, [
  telefone1,
  telefone3,
]);
const cliente4 = new Client(44444444444, 'Caio', endereco4, [
  telefone2,
  telefone4,
]);
const cliente5 = new Client(55555555555, 'Giovanna', endereco5, [
  telefone1,
  telefone4,
]);

// Criação de empresa
const telefone = new Phone(12, 11111111);
const endereco = new Address('Rua Z', 000, 'Bairro Verde', 'Sampa', 'SP');
const empresa = new Company(
  'AAAAAAA LTDA',
  'Foguete não tem ré',
  123123123,
  endereco,
  [cliente1, cliente2, cliente3, cliente4, cliente5],
  [telefone]
);
/**
 * Objetivos, parte 3:
 * Por fim, seu script deve ser capaz de gerar uma descrição da empresa e de seus clientes.
 */
function description(company) {
  console.log(
    ` ------------------------------ \n Informações da Empresa   \n Nome: ${company.getCorporateName} \n Nome Fantasia: ${company.getFantasyName}  \n CNPJ: ${company.getCnpj} 
    \n Endereço \n ${company.getAddress} \n ------------------------------ 
    \n Clientes`
  );

  //console.table(company.getClients);
}

description(empresa);

const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];
var allClients = [];
for (let i = 0; i < clientes.length; i++) {
  var allPhones = '';
  clientes[i].phones.forEach(phone => {
    allPhones += phone.description() + ' ';
  });
  allClients[i] = clientes[i].description(allPhones);
}

console.table(allClients);
