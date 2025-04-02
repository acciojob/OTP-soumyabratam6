document.addEventListener('DOMContentLoaded', function() {
  const codeContainer = document.querySelector('.code-container');
  const inputs = document.querySelectorAll('.code');
	document.getElementById('code-1').focus();
  inputs.forEach((input, index) => {
    input.addEventListener('input', function(e) {
      if (this.value.length === 1) {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }
    });
    
    // Handle backspace
    input.addEventListener('keyup', function(e) {
      if (e.key === 'Backspace' && this.value.length === 0) {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });
  });
});