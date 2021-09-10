import Calc from '../Calc';

export default class Multiplication extends Calc {
  public calculate(n1: number, n2: number): number {
    return n1 * n2;
  }
}
