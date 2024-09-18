
const form = document.createElement('form');
form.setAttribute('id', 'myForm');

const table = document.createElement('table');

table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

function createRow(labelText, inputType, inputName) {
    const tr = document.createElement('tr');

    const labelTd = document.createElement('td');
    labelTd.style.border = '1px solid black'; 
    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', inputName);
    labelTd.appendChild(label);
    const inputTd = document.createElement('td');
    inputTd.style.border = '1px solid black'; 
    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('name', inputName);
    input.setAttribute('id', inputName);
    inputTd.appendChild(input);

    tr.appendChild(labelTd);
    tr.appendChild(inputTd);

    return tr;
}

table.appendChild(createRow('Name:', 'text', 'name'));
table.appendChild(createRow('Email:', 'email', 'email'));
table.appendChild(createRow('Password:', 'password', 'password'));


const trSubmit = document.createElement('tr');
const tdSubmit = document.createElement('td');
tdSubmit.setAttribute('colspan', '2');
tdSubmit.style.border = '1px solid black'; 
const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('value', 'Submit');
tdSubmit.appendChild(submitButton);
trSubmit.appendChild(tdSubmit);

table.appendChild(trSubmit);

form.appendChild(table);

document.getElementById('form-container').appendChild(form);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
