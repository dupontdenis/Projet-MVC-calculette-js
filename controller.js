import View from './view.js';
import Model from './model.js';

export default class Controller {
	/**
	 * @param  {!Model} model A Model instance
	 * @param  {!View} view A View instance
	 */
	constructor(model, view) {
		this.model = model;
		this.view = view;

		view.bindAppendNumber((...args) => {
			this.appendNumber(...args);
		});
		//view.bindAppendNumber(this.appendNumber.bind(this));

		view.bindAppendOperator((...args) => {
			this.chooseOperator(...args);
		});
		//view.bindAppendNumber(this.appendNumber.bind(this));

		view.bindCompute((...args) => {
			this.compute(...args);
		})

		view.bindReset((...args) => {
			this.clear(...args);
		})
	}

	clear(operator){
		console.log(`Control: ${operator} please Reset !`);
		this.model.clear( (currentOperand, previousOperand) => {
			console.log(`Control: the view must be updated with ${currentOperand}`);
			this.view.updateCurrentOperand(currentOperand);
			this.view.updatePreviousOperand(previousOperand);
		});
	}

	compute(operator) {
		console.log(`Control: ${operator} please compute !`);
		this.model.compute( (currentOperand, previousOperand) => {
			console.log(`Control: the view must be updated with ${currentOperand}`);
			this.view.updateCurrentOperand(currentOperand);
			this.view.updatePreviousOperand(previousOperand);
		});
	}

	/**
		* 
		* @param {Sring} operation The operator to be used by the cacul
		* @returns 
		*/
	chooseOperator(operator) {
		console.log(`Control: ${operator} must be added`);

		this.model.chooseOperator(operator, (currentOperand, previousOperand) => {
			console.log(`Control: the view must be updated with ${currentOperand} ${previousOperand}`);
			this.view.updateCurrentOperand(currentOperand);
			this.view.updatePreviousOperand(previousOperand);
		})

	}

	/**
	 * Append an number 
	 *
	 * @param {!string} number Number clicked
	 */
	appendNumber(number) {
		console.log(`Control: ${number} must be added`);
		this.model.appendNumber(number, (currentOperand) => {
			console.log(`Control: the view must be updated with ${currentOperand}`);
			this.view.updateCurrentOperand(currentOperand);
		});
	}



}