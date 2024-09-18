function getData() {
    return fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .catch(error => console.error('Error:', error));
  }
  getData().then(data => {
    const table = document.createElement('table');
    const headers = Object.keys(data[0]);
    
    const headerRow = table.insertRow(0);
    headers.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      headerRow.appendChild(th);
    });
  
    data.forEach(item => {
      const row = table.insertRow(-1);
      headers.forEach(header => {
        const cell = row.insertCell(-1);
        cell.textContent = item[header];
      });
    });
  
    document.body.appendChild(table);
  });
  