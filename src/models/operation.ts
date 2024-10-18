import { OperatorKeys } from '../enums/operator-keys.enum';
import { IOperation } from '../interfaces/operation.interface';

export class Operation implements IOperation {
  private firstOperand: number;
  private secondOperand: number;
  private operator: OperatorKeys;


  public constructor(firstOperand: number, secondOperand: number, operator: OperatorKeys) {
    this.firstOperand = firstOperand;
    this.secondOperand = secondOperand;
    this.operator = operator;
  }

  public get getFirstOperand(): number {
    return this.firstOperand;
  }

  public get getSecondOperand(): number {
    return this.secondOperand;
  }

  public get getOperator(): OperatorKeys {
    return this.operator;
  }

  public set setFirstOperand(num: number) {
    this.firstOperand = num;
  }

  public set setSecondOperand(num: number) {
    this.secondOperand = num;
  }

  public display(): string {
    throw new Error('Method not implemented.');
  }

  public evaluate(): number {
    switch (this.operator) {
      case OperatorKeys.PLUS:
        return this.firstOperand + this.secondOperand;
      case OperatorKeys.MINUS:
        return this.firstOperand - this.secondOperand;
      case OperatorKeys.MULT:
        return this.firstOperand * this.secondOperand;
      case OperatorKeys.DIV:
        return this.firstOperand / this.secondOperand;
      default:
        return 0;
    }
  }

}
