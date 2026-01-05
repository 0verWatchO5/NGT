document.addEventListener('DOMContentLoaded', () => {
  const addForm = document.getElementById('addForm');
  const itemsList = document.getElementById('itemsList');

  // Load items on page load
  loadItems();

  // Add item
  addForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    const response = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, description })
    });

    if (response.ok) {
      addForm.reset();
      loadItems();
    } else {
      alert('Error adding item');
    }
  });

  // Load items
  async function loadItems() {
    const response = await fetch('/api/items');
    const items = await response.json();
    itemsList.innerHTML = '';
    items.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.name}: ${item.description}</span>
        <div>
          <button onclick="editItem('${item._id}', '${item.name}', '${item.description}')">Edit</button>
          <button onclick="deleteItem('${item._id}')">Delete</button>
        </div>
      `;
      itemsList.appendChild(li);
    });
  }

  // Edit item (global function for onclick)
  window.editItem = async (id, name, description) => {
    const newName = prompt('Enter new name:', name);
    const newDescription = prompt('Enter new description:', description);
    if (newName && newDescription) {
      const response = await fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: newName, description: newDescription })
      });
      if (response.ok) {
        loadItems();
      } else {
        alert('Error updating item');
      }
    }
  };

  // Delete item (global function for onclick)
  window.deleteItem = async (id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        loadItems();
      } else {
        alert('Error deleting item');
      }
    }
  };
});
