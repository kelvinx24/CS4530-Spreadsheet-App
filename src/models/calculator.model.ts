
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { IOperation } from '../interfaces/operation.interface';
import { Operation } from './operation';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += ' ' + key + ' ';
  }

  public pressActionKey(key: ActionKeys): void {
    this._buffer += key;
  }

  public display(): string {
    return this._buffer.trim();
  }

  public evaluate(): string {
    const operations: IOperation[] = this.extractOperations();
    console.log(operations);
    const operationResults: number[] = [];

    const muliplyDivide: IOperation[] = operations.filter((operation: Operation): boolean =>
      operation.getOperator === OperatorKeys.MULT || operation.getOperator === OperatorKeys.DIV);
    const addSubtract: IOperation[] = operations.filter((operation: Operation): boolean =>
      operation.getOperator === OperatorKeys.PLUS || operation.getOperator === OperatorKeys.MINUS);

    muliplyDivide.forEach((operation: IOperation): void => {
      const result: number = operation.evaluate();
      operationResults.push(result);
      const operationIndex: number = operations.indexOf(operation);
      if (operationIndex !== 0) {
        operations[operationIndex - 1].setSecondOperand = result;
      }
      if (operationIndex !== operations.length - 1) {
        operations[operationIndex + 1].setFirstOperand = result;
      }

      operations.splice(operationIndex, 1);
    });

    addSubtract.forEach((operation: IOperation): void => {
      const result: number = operation.evaluate();
      console.log(result);
      operationResults.push(result);
      let operationIndex: number = operations.indexOf(operation);
      console.log(operationIndex);
      if (operationIndex !== 0) {
        operations[operationIndex - 1].setSecondOperand = result;
      }
      if (operationIndex !== operations.length - 1) {
        operations[operationIndex + 1].setFirstOperand = result;
    }
      operations.splice(operationIndex, 1);
    });

    let finalResult: number = operationResults[operationResults.length - 1];
    console.log(finalResult);
    return this._buffer + ' === ' + finalResult.toString();
  }

  extractOperations(): IOperation[] {
    
    let splitBuffer = this._buffer.split(' ');
    const operations: IOperation[] = [];

    let firstNumber = '';
    let currentOperator = '';
    let secondNumber = '';

    for (let i = 0; i < splitBuffer.length - 1; i++) {
      if (i % 2 === 0) {
        firstNumber = splitBuffer[i];
      } else {
        currentOperator = splitBuffer[i];
        secondNumber = splitBuffer[i + 1];

        operations.push(new Operation(parseInt(firstNumber), parseInt(secondNumber), currentOperator));
      }
    }
    
    return operations;
  }

}
