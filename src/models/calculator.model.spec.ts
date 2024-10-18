
import { CalculatorModel } from './calculator.model';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import exp = require('constants');

describe('CalculatorModel', (): void => {

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();

    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {

    // Assemble
    const calculator: ICalculatorModel = new CalculatorModel();
  
    // Act
    const displayValue: string = calculator.display();
  
    // Assert
    expect(displayValue).toEqual('');
  
  });

  it('should display `1` when the `1` key is pressed', (): void => {

    // Assemble
    const calculator: ICalculatorModel = new CalculatorModel();
  
    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();
  
    // Assert
    expect(displayValue).toEqual('1');
  
  });

  it('should display `2` when the `2` key is pressed', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();
  
    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('2');
  
  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('98');
  
  });

  it('should display `+` when the `+` key is pressed', (): void => {

    const calculator: ICalculatorModel = new CalculatorModel();
  
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('+');
  
  });

  it('should evaluate one addition operation', (): void => {
    const calculator: ICalculatorModel = new CalculatorModel();
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.evaluate();

    // const displayValue: string = calculator.display();
    expect(calculator.evaluate()).toEqual('1 + 2 === 3');
  });

  it('should evaluate three operations', (): void => {
    const calculator: ICalculatorModel = new CalculatorModel();
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.evaluate();

    // const displayValue: string = calculator.display();
    expect(calculator.evaluate()).toEqual('1 + 2 - 1 - 1 === 1');
  });

  it('should evaluate three operations in order', (): void => {
    const calculator: ICalculatorModel = new CalculatorModel();
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.evaluate();

    // const displayValue: string = calculator.display();
    expect(calculator.evaluate()).toEqual('1 + 2 * 1 * 2 === 5');
  });

  it('should evaluate three operations in order from same group', (): void => {
    const calculator: ICalculatorModel = new CalculatorModel();
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.DIV);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressOperatorKey(OperatorKeys.DIV);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.evaluate();

    // const displayValue: string = calculator.display();
    expect(calculator.evaluate()).toEqual('1 * 2 / 1 / 2 === 1');
  });
});
