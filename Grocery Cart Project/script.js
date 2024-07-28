document.addEventListener('DOMContentLoaded', () => {
    const itemNameInput = document.getElementById('item-name');
    const itemPriceInput = document.getElementById('item-price');
    const addItemButton = document.getElementById('add-item');
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    const renderCart = () => {
      cartList.innerHTML = '';
      let totalPrice = 0;
      cart.forEach(item => {
        totalPrice += item.price;
        const li = document.createElement('li');
        li.innerHTML = `
          ${item.name} - $${item.price.toFixed(2)}
          <div>
            <button onclick="editItem(${item.id})">Edit</button>
            <button onclick="deleteItem(${item.id})">Delete</button>
          </div>
        `;
        cartList.appendChild(li);
      });
      totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    };
  
    const addItem = () => {
      const itemName = itemNameInput.value.trim();
      const itemPrice = parseFloat(itemPriceInput.value);
      if (itemName && !isNaN(itemPrice)) {
        cart.push({ id: Date.now(), name: itemName, price: itemPrice });
        itemNameInput.value = '';
        itemPriceInput.value = '';
        saveCart();
        renderCart();
      }
    };
  
    const editItem = (id) => {
      const item = cart.find(item => item.id === id);
      if (item) {
        itemNameInput.value = item.name;
        itemPriceInput.value = item.price;
        deleteItem(id);
      }
    };
  
    const deleteItem = (id) => {
      cart = cart.filter(item => item.id !== id);
      saveCart();
      renderCart();
    };
  
    const saveCart = () => {
      localStorage.setItem('cart', JSON.stringify(cart));
    };
  
    addItemButton.addEventListener('click', addItem);
    renderCart();
  });
  