document.addEventListener("DOMContentLoaded", () => {
    const otpInputs = document.querySelectorAll(".code");

    otpInputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            const value = e.target.value;
            console.log(`Input event triggered for index: ${index}, value: ${value}`);

            if (value.length === 1) {
                e.target.value = value.charAt(0); // Ensure single character entry
                
                if (index < otpInputs.length - 1) {
                    setTimeout(() => {
                        otpInputs[index + 1].focus();
                        console.log(`Focus moved to index: ${index + 1}, focused element:`, document.activeElement);
                    }, 50); // Delay focus movement
                }
            }
        });

        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value && index > 0) {
                setTimeout(() => otpInputs[index - 1].focus(), 50); // Delay backspace focus move
            }
        });

        input.addEventListener("paste", (e) => {
            e.preventDefault();
            const pasteData = e.clipboardData.getData("text").split("").slice(0, otpInputs.length);
            
            otpInputs.forEach((field, idx) => {
                field.value = pasteData[idx] || "";
            });

            setTimeout(() => {
                const nextIndex = Math.min(pasteData.length, otpInputs.length - 1);
                otpInputs[nextIndex].focus();
            }, 50);
        });
    });
});
