document.addEventListener("DOMContentLoaded", () => {
    const otpInputs = document.querySelectorAll(".code");

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            console.log('Input event triggered for index:', index, 'with value:', value);
            if (value.length === 1) {
                e.target.value = value.charAt(0); 
                if (index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                    console.log('Input focus set to index:', index + 1);
                }
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });

        input.addEventListener("paste", (e) => {
            e.preventDefault();
            const pasteData = e.clipboardData.getData("text").split("").slice(0, otpInputs.length);
            otpInputs.forEach((field, idx) => {
                field.value = pasteData[idx] || "";
            });
            const nextIndex = pasteData.length < otpInputs.length ? pasteData.length : otpInputs.length - 1;
            otpInputs[nextIndex].focus();
        });
    });
});