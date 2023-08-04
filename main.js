const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const specialChars = ["%", "*", "/", "-", "+", "="]
let output = ""
const history = document.querySelector(".history")
let hist_output=""

//events for the buttons
buttons.forEach((button) => {
    button.addEventListener("click", function(e){
        calculate(e.target.dataset.value) 
        hist_output += e.target.dataset.value
        history.value=hist_output
        if(e.target.dataset.value === "AC"){
            history.value=""
        }
    })
});

// functions
const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== ""){
        // If output has %, replace with /100 before evaluating
        output = eval(output.replace("%", "/100"))
        // eval() -> this functions evaluates and executes whatever expression we have in the output/display
        // This is where all the calculations are done - simple execution
    }else if(btnValue === "AC"){
        output = ""
    }else if(btnValue === "DEL"){
        // if del button is clicked, remove the last character from the output
        output = output.toString().slice(0, -1)
    }else{
        // if output is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output
}

// Example of seeing how eval was used
var des = eval(45*2)
console.log(des)