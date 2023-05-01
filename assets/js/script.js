// Remember single responsability principle for functions
// Remember avoid global scope variables, put them inside functions instead

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert('You have clicked Submit!');
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You cliked ${gameType}`);
            }
        });
    }
});

/**
 * 
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random () * 25) +1 ;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}