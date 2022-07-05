import '../styles/main.scss';


class Calculator {
    constructor(plusOperation, minusOperation, multiplyOperation, divisionOperation) {
        this._plusOperation = plusOperation;
        this._minusOperation = minusOperation;
        this._multiplyOperation = multiplyOperation;
        this._divisionOperation = divisionOperation;
    };
};


class OrdinaryOperations extends Calculator {

    constructor(plusOperation, minusOperation, multiplyOperation, divisionOperation) {
        super(plusOperation, minusOperation, multiplyOperation, divisionOperation);
    };

    makePlus(firstNum, secondNum) {
        return firstNum + secondNum + ` You have used a ${this.plusOperation} operation`;
    };

    makeMinus(firstNum, secondNum) {
        return firstNum - secondNum + ` You have used a ${this.minusOperation} operation`;
    };

    makeMultiply(firstNum, secondNum) {
        return firstNum * secondNum + ` You have used a ${this.multiplyOperation} operation`;
    };

    makeDivide(firstNum, secondNum) {
        return firstNum / secondNum + ` You have used a ${this.divisionOperation} operation`;
    };
};

let operations = new OrdinaryOperations('+', '-', '*', '/');
console.log(operations);