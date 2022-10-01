import { qs, qsa, $delegate, $on } from './helpers.js                             ';


export default class View {
    /**
	 * @param {!Template} template A Template instance
	 */
	constructor() {
		this.numberButtons = qsa('[data-number]')
		this.operationButtons = qsa('[data-operator]')

		this.$calculatorGrid = qs('[data-grid-contener')
		this.equalsButton = qs('[data-equals]')
		this.deleteButton = qs('[data-delete]')
		this.allClearButton = qs('[data-all-clear]')
		this.previousOperandTextElement = qs('[data-previous-operand]')
		this.currentOperandTextElement = qs('[data-current-operand]')

	}


	/**
	 * @param {Function} handler Function called on synthetic event.
	 */
	bindAppendNumber(handler) {
		$delegate(this.$calculatorGrid, '[data-number]', 'click', ({ target }) => {
			const number = target.dataset.number;
			console.log(`View: ${number} clicked`);
			if (number) {
				handler(number);
			}
		});
	}

	bindAppendOperator(handler) {
		$delegate(this.$calculatorGrid, '[data-operator]', 'click', ({ target }) => {
			const operator = target.dataset.operator;
			console.log(`View: ${operator} clicked`);
			if (operator) {
				handler(operator);
			}
		});
	}

	bindCompute(handler) {
		$on(this.equalsButton, 'click', ( { target })=> {
			const operator = target.dataset.equals;
			console.log(`View: ${operator} clicked`);
			if (operator) {
				handler(operator);
			}
		}, true)
	}

	bindReset(handler) {
		$on(this.allClearButton, 'click', ( { target } )=> {
			const operator = target.innerText;
			console.log(`View: ${operator} clicked`);
			if (operator) {
				handler(operator);
			}
		}, true)
	}

	updateCurrentOperand(number) {
		console.log(`View : CurrentOperand is updated ${number}`);
		this.currentOperandTextElement.innerText = number;
	}

	updatePreviousOperand(number) {
		console.log(`View : previousOperand is updated ${number}`);
		this.previousOperandTextElement.innerText = number;
	}

}