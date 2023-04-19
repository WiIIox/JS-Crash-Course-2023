// Add new cars
let form = document.querySelector('form');
let addBtn = document.getElementById('add-car-btn');
let tableBody = document.querySelector('#table-cars tbody');

function check_values(model, year, price, color, customsCleared, bodyType, purchaseDate) {
    if (model && year && price && color && customsCleared && bodyType && purchaseDate) {
        if ((year >= 1800 && year <= 2100) && (price >= 400 && price <= 1000000))
        return true
    }
    return false
}

addBtn.onclick = () => {
    const model = document.getElementById('model').value;
    const year = +document.getElementById('year').value;
    const price = +document.getElementById('price').value;
    const color = document.getElementById('color').value;
    const customsCleared = document.getElementById('customs-cleared').value;
    const bodyType = document.getElementById('body-type').value;
    const purchaseDate = document.getElementById('purchase-date').value;

    if (check_values(model, year, price, color, customsCleared, bodyType, purchaseDate)) {
    tableBody.innerHTML += `
          <td>${model}</td>
          <td>${year}</td>
          <td>${price}</td>
          <td>${color}</td>
          <td>${customsCleared}</td>
          <td>${bodyType}</td>
          <td>${purchaseDate}</td>
        `;
    }
};

// Search functionality
let searchInput = document.querySelector('input[type="search"]');
let suggestions = document.getElementById('suggestions');

searchInput.addEventListener('input', () => {
    let searchValue = searchInput.value.toLowerCase();
    let tableRows = document.querySelectorAll('#table-cars tbody tr');
    suggestions.innerHTML = '';
    
    tableRows.forEach(row => {
        const modelName = row.querySelector('td:nth-child(1)').textContent;
        if (modelName.toLowerCase().includes(searchValue)) {
            row.style.display = "";
            if (searchValue.length >= 2) {
                suggestions.innerHTML += `
                <option value="${modelName}">`
            };
        } else {
            row.style.display = "none";
        };
    });
});

// Delete all cars
let deleteAllCarsButton = document.querySelector('.btn-danger');
let carTableBody = document.querySelector('tbody');

deleteAllCarsButton.addEventListener('click', () => {
  carTableBody.innerHTML = '';
});