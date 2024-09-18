
let arthematicEl = document.getElementById("arthematic");
let assignEl = document.getElementById("assign");
let comparEl = document.getElementById("compar");




let x = 1;
let y = 2;
let add = x + y;
let mult = x * y;
let div = x / y;
//assignment
let a = 2;
a += 2;
a -= 1

//Arthimatic operator
arthematicEl.textContent = "Ex:- x = 1, y = 2: - additon: "+ add +", multiplication: " + mult + ", Division: " + div ;
arthematicEl.style.fontSize = "25px";

//Assignment operator
assignEl.textContent = "Ex:- a = 2: - a += 2: "+ a + ", a -= 1: " + a ;
assignEl.style.fontSize = "25px";

//comparison Operator
let p = 2;
let q = 3;
let res = p < q;
comparEl.textContent = "Ex:- p = 2, q = 3:-(p < q) :- p is less than q: "+ res ;
comparEl.style.fontSize = "25px";
//Logical operator
let e = 2;
let f = 5;
let logicEl = document.getElementById("logic");
logicEl.textContent = "Ex:- e = 2, f = 5 :-  (e < 1 && f > 3 ):  "+(e < 1 && f > 3 );
logicEl.style.fontSize = "25px";
//ternary/conditional operator
let marks = 95;
let ternEl = document.getElementById("tern");
let pass = (marks > 35)? "Pass":"Fail";
ternEl.textContent = `Ex:- pass marks = 35, student got 90 marks: ${pass}`;
ternEl.style.fontSize = "25px";
//Bitwise operator
let h = 2;
let i = 10;
let re = h | i;
let bitEl = document.getElementById("bit");
bitEl.textContent = `Ex:- h | i : ${re}`;
bitEl.style.fontSize = "25px";