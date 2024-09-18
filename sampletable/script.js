const table = document.createElement('table');
table.border = '1';


const tbody = document.createElement('tbody');


const formElements = [
    { label: 'First Name', type: 'text', name: 'firstName' },
    { label: 'Last Name', type: 'text', name: 'lastName' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'Password', type: 'password', name: 'password' },
];

formElements.forEach(element => {
    const tr = document.createElement('tr');


    const tdLabel = document.createElement('td');
    const label = document.createElement('label');
    label.textContent = element.label;
    tdLabel.appendChild(label);

    
    const tdInput = document.createElement('td');
    const input = document.createElement('input');
    input.type = element.type;
    input.name = element.name;
    tdInput.appendChild(input);

    tr.appendChild(tdLabel);
    tr.appendChild(tdInput);


    tbody.appendChild(tr);
});


table.appendChild(tbody);


document.getElementById('form-container').appendChild(table);