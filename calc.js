var firstNum = document.getElementById("first_number");
var secondNum = document.getElementById("second_number");

var plus = document.getElementById("plus-icon");
var minus = document.getElementById("minus-icon");
var multiply = document.getElementById("multiply-icon");
var divide = document.getElementById("divide-icon");



var result = document.getElementById("result_label");
var calculate = document.getElementById("calc");




var operator;

plus.addEventListener("click", function() {
    operator = "+";
    result.textContent = operator;
})

minus.addEventListener("click", function() {
    operator = "-";
    result.textContent = operator;
});

multiply.addEventListener("click", function(){
    operator = "*";
    result.textContent = operator;
})

divide.addEventListener("click", function() {
    operator = "/";
    result.textContent = operator;
})





var operator = "+"

switch (operator) {
    case "plus.onclick":
        console.log("you clicked +")
}




//     switch (key) {
//         case "w": 
//             var tom1 = new Audio("./sounds/tom-1.mp3")
//             tom1.play();
//             break;

//         case "a": 
//             var tom2 = new Audio("./sounds/tom-2.mp3")
//             tom2.play();
//             break;

//          case "s": 
//             var tom3 = new Audio("./sounds/tom-3.mp3")
//             tom3.play();
//             break;

//         default:
//             console.log(innerHTML);     
//     }


calculate.onclick = function calcFunc(){

    var firstTextNum = parseInt(firstNum.value);
    var secondTextNum = parseInt(secondNum.value);
    var answer;

    switch (operator) {
        case "+":
            answer = firstTextNum + secondTextNum;
            break;

        case "-":
            answer = firstTextNum - secondTextNum;
            break;
        
        case "*":
            answer = firstTextNum * secondTextNum;
            break;
        
        case "/":
            answer = firstTextNum / secondTextNum;
            break;
        
        default:
            alert("You didn't select an operator!")

    }

    // console.log(firstTextNum);
    // console.log(secondTextNum);
    // console.log(operator);
    // console.log(result);
    
    labelOutput = `${firstTextNum} ${operator} ${secondTextNum} = ${answer}`
    console.log(labelOutput);
    result.textContent = labelOutput;


};




// firstNum.onclick = function() {
//     console.log("You clicked 1st num");
// }

// secondNum.onclick = function() {
//     console.log("You clicked 2nd num");
// }

// plus.onclick = function () {
//     console.log("You clicked +");
// }

// minus.onclick = function () {
//     console.log("You clicked -");
// }

// multiply.onclick = function () {
//     console.log("You clicked *");
// }

// divide.onclick = function () {
//     console.log("You clicked /");
// }

// calculate.onclick = function() {
//     console.log("You clicked calculate");
// }

