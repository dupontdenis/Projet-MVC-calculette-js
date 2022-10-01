
export default class Model {

    constructor() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }


    appendNumber(number, callback) {
        console.log(`Model: ${number} appended to currentOperand`);
        this.currentOperand = this.currentOperand.toString() + number.toString()

        if (callback) {
            console.log(`Model: CurrentOperand is updated with ${this.currentOperand}`);

            callback(this.currentOperand);
        }
    }

    chooseOperator(operator, callback) {
        if (this.currentOperand === '' || this.previousOperand !== '') return

        this.operation = operator
        this.previousOperand = this.currentOperand + this.operation
        this.currentOperand = ''

        if (callback) {
            console.log(`Model: Operands are updated with ${this.currentOperand}, ${this.previousOperand}`);

            callback(this.currentOperand, this.previousOperand);
        }

    }

    clear(callback) {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

        if (callback) {
            console.log(`Model: Operands are updated with ${this.currentOperand}, ${this.previousOperand}`);

            callback(this.currentOperand, this.previousOperand);
        }
    }

    compute(callback) {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

        if (callback) {
            console.log(`Model: Operands are updated with ${this.currentOperand}, ${this.previousOperand}`);

            callback(this.currentOperand, this.previousOperand);
        }

    }
}


