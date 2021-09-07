/**
 * Construindo componentes reutilizáveis
 * A principal vantagem em usar módulos é poder construir componentes reutilizáveis, ou seja,
 * códigos que podem ser utilizados mais de uma vez e em mais de um projeto. Este exercício é para
 * praticar a construção, exportação e importação de módulos, utilizando o TypeScript.
 *
 * Objetivos, parte 1:
 * Crie um módulo contendo classes, responsáveis por fornecer métodos que realizam as operações
 * matemáticas básicas, soma, subtração, divisão e multiplicação
 *
 */

export class Sum {
  public calculate = (n1: number, n2: number) => {
    return n1 + n2;
  };
}

export class Subtract {
  public calculate = (n1: number, n2: number) => {
    return n1 - n2;
  };
}

export class Divide {
  public calculate = (n1: number, n2: number) => {
    return n1 / n2;
  };
}

export class Multiply {
  public calculate = (n1: number, n2: number) => {
    return n1 * n2;
  };
}
