// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMessage = "Something went wrong, please try again"
let errorEl = document.getElementById("error")

// console.log(errorEl)

function purchase(){
    errorEl.textContent = errorMessage
}