
let countervalueEl = document.getElementById("countervalue");

function onIncrease(){
    let PreviousValue = countervalueEl.textContent;
    let updateValue = parseInt(PreviousValue) + 1;
    countervalueEl.textContent = updateValue;
    
    if (updateValue > 0){
        countervalueEl.style.color = "green";   
    }
    else if (updateValue < 0){
        countervalueEl.style.color = "red";
    }
    else{
        countervalueEl.style.color = "black";
    }
}

function onReset(){
    countervalueEl.textContent = 0; 
    countervalueEl.style.color = "black";
    if (updateValue > 0){
        countervalueEl.style.color = "green";   
    }
    else if (updateValue < 0){
        countervalueEl.style.color = "red";
    }
    else{
        countervalueEl.style.color = "black";
    }
}

function onDecrease(){
    let PreviousValue = countervalueEl.textContent;
    let updateValue = parseInt(PreviousValue) - 1;
    countervalueEl.textContent = updateValue;
    countervalueEl.style.color = "red";
    if (updateValue > 0){
        countervalueEl.style.color = "green";   
    }
    else if (updateValue < 0){
        countervalueEl.style.color = "red";
    }
    else{
        countervalueEl.style.color = "black";
    }
}