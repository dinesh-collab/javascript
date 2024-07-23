document.getElementById('filterInput').addEventListener('keyup', function() {
    const filterValue = this.value.toLowerCase();
    const items = document.querySelectorAll('#items .item');
    items.forEach(item => {
      const itemName = item.textContent.toLowerCase();
      if (itemName.indexOf(filterValue) != -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  