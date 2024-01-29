const form = document.getElementById('form');
const dataBox = document.getElementById('data-box');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const book = document.getElementById('book').value;
  const author = document.getElementById('author').value;
  const page = document.getElementById('pageNumber').value;
  
  const newBox = document.createElement('div');
  newBox.classList.add('data-box');
  newBox.innerHTML = `
  <p><strong>Name Book:</strong> ${book}</p>
  <p><strong>Author:</strong> ${author}</p>
  <p><strong>Page number:</strong> ${page}</p>
  <button onclick="deleteBox(this)">Delete</button>
  `;
  
  dataBox.appendChild(newBox);
  
  form.reset();
});

const deleteBox = (deleteButton) => {
    const box = deleteButton.parentElement;
  box.remove();
};