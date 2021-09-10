import Calc from '../Calc';

export default class SquareRoot extends Calc {
  public calculate(n1: number, n2: number): number {
    return n1 ** (1 / 2);
  }
}
