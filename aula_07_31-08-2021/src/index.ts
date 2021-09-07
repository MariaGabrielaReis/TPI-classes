import Descriptor from './Descriptor';
import Company from './Company';
import Employee from './Employee';
import Address from './Address';
import Phone from './Phone';

const telefone = new Phone('12', '4002-8922');
const telefone1 = new Phone('12', '9 9999-9999');

const endereco = new Address('Av. Paulista', 21, 'Jd. Paulista', 'SP');
const endereco1 = new Address('Av. Salmão', 34, 'Jd. Aquarius', 'SJC');

const funcionario = new Employee(
  'Maby',
  '212121',
  '123.456.789-01',
  endereco,
  telefone
);
const funcionario1 = new Employee(
  'Wallace',
  '777777',
  '098.765.432-10',
  endereco1,
  telefone1
);

const funcionarios = [funcionario, funcionario1];
const telefones = [telefone, telefone1];
const empresa = new Company(
  'ABC LTDA',
  'Mercado Online',
  '999-999-999-999-99',
  endereco,
  telefones,
  funcionarios
);

const descritor = new Descriptor();
console.log(descritor.companyDescription(empresa));
