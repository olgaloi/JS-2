function InputText(element) {
	if(typeof element === 'string') {
		element = document.querySelector(element);
	}

	var _this = this;

	this.element = element;
	this.textInput = document.createElement('div');
	this.textInputBody = document.createElement('div');
	this.checkInput = document.createElement('input');
	this.checkInput.type = "checkbox";

	this.textInput.classList.add('new-input');
	this.textInputBody.classList.add('new-input-body');
	this.checkInput.classList.add('check');

	this.textInput.appendChild(this.textInputBody);
	this.textInput.appendChild(this.checkInput);
	document.querySelector('body').appendChild(this.textInput);
}

InputText.prototype.show = function() {	
	this.checkInput.checked ? this.textInputBody.innerHTML = this.element.value : this.textInputBody.innerHTML = 'null';
}

var inputText = new InputText('.text');
document.querySelector('.check').onchange = function() {inputText.show()}