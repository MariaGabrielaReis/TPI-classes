import { Sum, Subtract, Divide, Multiply } from './ex_modulo';

/**
 * Objetivos, parte 2:
 * Desenvolva um outro módulo, que utilize o módulo de operações matemática. Para isto, execute
 * códigos que façamos cálculos de soma, subtração, divisão e multiplicação. Utilize números
 * arbitrariamente para seus testes.
 */
const somo = new Sum();
console.log(somo.calculate(14, 7));

const subtracao = new Subtract();
console.log(subtracao.calculate(30, 9));

const divisao = new Divide();
console.log(divisao.calculate(42, 2));

const multiplicacao = new Multiply();
console.log(multiplicacao.calculate(3, 7));
