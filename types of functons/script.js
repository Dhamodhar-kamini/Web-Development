// Named Function
let namedFunEl = document.getElementById("namedFun");
function namedfunction(a,b,c){
        return a + b + c;
        
}
namedFunEl.textContent = `Addition of a + b + c: ${namedfunction(2,4,5)}`;

// Anonymous function
let AnonymousFunEl = document.getElementById("AnonymousFun");
let oddOrEven = function(number){
    if (number % 2 == 0){
        AnonymousFunEl.textContent = `Given number is even number: ${number}`;
    }
    else{
        AnonymousFunEl.textContent = `Given number is odd number: ${number}`;
    }
}
oddOrEven(8);

// self invoked function 
let invokedFunEl = document.getElementById("invokedFun");
let invokedfunction = (function(){
    return `This is Invoked function`;
 })
 invokedFunEl.textContent = `${invokedfunction()}`;

 // Arrow function
 let ArrowFunctionEl = document.getElementById("ArrowFunction");
 let arrowfun = (a, b, c) => 3 * 5 * 9;
 ArrowFunctionEl.textContent = `Multiplication of a * b * c: ${arrowfun()} `