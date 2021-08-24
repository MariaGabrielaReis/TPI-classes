import { Client, Phone, Address, Company } from './ex_modulo.js';

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
const endereco = new Address('Rua Z', 999, 'Bairro Verde', 'Sampa', 'SP');
const empresa = new Company(
  'AAAAAAA LTDA',
  'Foguete não tem ré',
  123123123,
  endereco,
  [cliente1, cliente2, cliente3, cliente4, cliente5],
  [telefone, telefone2, telefone3]
);

/**
 * Objetivos, parte 3:
 * Por fim, seu script deve ser capaz de gerar uma descrição da empresa e de seus clientes.
 */

function companyDescription(company) {
  console.log(
    ` --------------------------------------- \n - Informações da Empresa   \n Nome: ${company.getCorporateName} \n Nome Fantasia: ${company.getFantasyName}  \n CNPJ: ${company.getCnpj} 
    \n Endereço \n ${company.getAddress} 
    \n Telefone \n ${company.getPhones} \n --------------------------------------- 
    \n - Clientes`
  );

  const clientes = [];
  var i = 0;
  for (let item of company.getClients) {
    clientes[i] = item.description(item.getPhones);
    i++;
  }

  console.table(clientes);
}

companyDescription(empresa);
