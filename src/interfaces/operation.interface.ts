import { OperatorKeys } from '../enums/operator-keys.enum';

export interface IOperation {
  // returns the contents of the calculator's display
  display(): string;

  // evaluates the current expression
  evaluate(): number;

  get getFirstOperand(): number;

  get getSecondOperand(): number;

  get getOperator(): OperatorKeys;

  set setFirstOperand(num: number);

  set setSecondOperand(num: number);
}
