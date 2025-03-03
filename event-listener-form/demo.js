let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = 60 - enteredTextLength;
    remainingCharsElement.textContent = remainingCharacters;

    if (remainingCharacters <= 10) {
        remainingCharsElement.classList.add("warning");
        productNameInputElement.classList.add("warning");
    }
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);