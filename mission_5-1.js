<script>
		var displayElement = document.getElementById('display');
		var currentExpression = '';
			function appendNumber(number) {
			 currentExpression += number;
			 display.value = currentExpression;
			   
			}
			function appendOperator(operator){
    if (operator === '/' && currentExpression.slice(-1) === '0') {
    
        displayElement.value = 'Error: Division by zero';
    } else {
        currentExpression += operator;
        displayElement.value = currentExpression;
    }
}
			function clearDisplay() {
				currentExpression = '';
			displayElement.value = ''; 
			}
			function calculateResult() {
			try {
				var operator = currentExpression[currentExpression.length - 1];
				var result = eval(currentExpression);
				if (operator === '/' && currentExpression .slice(-1) === '0') {
            throw new Error("error");
        }	
				if (isNaN(result) || !isFinite(result)) {
            throw new Error("Division by zero error");
        }
		
        if (result === Infinity || result === -Infinity) {
            throw new Error("Invalid result");}
			displayElement.classList.remove('error-message');	
			displayElement.value = result;
				currentExpression = ''; 
			}catch (error) {
        if (error.message === "Invalid result") {
            displayElement.value = 'Error: Invalid result';
        } else if (error.message === "Division by zero error") {
            displayElement.value = 'Error:Division by zero';}
			else{displayElement.value = 'Error';

			}
    }
}
	</script>
