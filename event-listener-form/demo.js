let productNameInputElement = document.getElementById("product-name");
let remainingCharsElement = document.getElementById("remaining-chars");

function updateRemainingCharacters(event) {
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = 60 - enteredTextLength;
    remainingCharsElement.textContent = remainingCharacters;
}

productNameInputElement.addEventListener("input", updateRemainingCharacters);