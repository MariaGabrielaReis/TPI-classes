/**
 * Considere que você foi contratado para desenvolver uma calculadora que funcione
 * como um aplicativo do tipo cli(command-line interface), feito em TypeScript que
 * deve realizar as operações básicas (soma, subtração, divisão, potência..)
 * Cada operação deve ser realizada por uma classe específica
 */
import * as readline from 'readline';
import Calc from './calculator/Calc';
import Power from './calculator/operations/Power';
import Addition from './calculator/operations/Addition';
import Division from './calculator/operations/Division';
import SquareRoot from './calculator/operations/SquareRoot';
import Subtraction from './calculator/operations/Subtraction';
import Multiplication from './calculator/operations/Multiplication';

function handleOperation(
  operation: string,
  n1: number,
  n2: number
): number | string {
  let calc: Calc;
  let result: number | string;

  switch (operation) {
    case 'soma':
      calc = new Addition();
      result = calc.calculate(n1, n2);
      break;
    case 'subtração':
      calc = new Subtraction();
      result = calc.calculate(n1, n2);
      break;
    case 'divisão':
      calc = new Division();
      result = calc.calculate(n1, n2);
      break;
    case 'multiplicação':
      calc = new Multiplication();
      result = calc.calculate(n1, n2);
      break;
    case 'potência':
      calc = new Power();
      result = calc.calculate(n1, n2);
      break;
    case 'raíz':
      calc = new SquareRoot();
      result = calc.calculate(n1, n2);
      break;
    case 'sair':
      result = 'Valeu, falou';
      break;
    default:
      result = 'Operação indisponível';
      break;
  }

  return result;
}

function init() {
  let reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  reader.question(
    `Quais são os nºs e a operação desejada? \n`,
    (values: string) => {
      let data = values.split(' ');
      let operation: string;
      let n1: number;
      let n2: number;

      if (data.length == 1) {
        operation = data[0].toLowerCase();
      } else {
        operation = data[2].toLowerCase();
        n1 = Number(data[0]);
        n2 = Number(data[1]);

        const result = handleOperation(operation, n1, n2);
        if (typeof result === 'number') {
          console.log(`O resultado da operação é ${result}`);
        } else {
          console.log(result);
        }
      }
    }
  );
}
