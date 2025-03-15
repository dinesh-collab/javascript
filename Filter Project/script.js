document.getElementById('filterInput').addEventListener('keyup', function (event) {
  const filterValue = this.value.toLowerCase();
  const items = document.querySelectorAll('#items .item');
  let found = false;

  items.forEach(item => {
      const itemName = item.getAttribute("data-name").toLowerCase(); // Use data-name to preserve text
      if (itemName.includes(filterValue)) {
          item.style.display = 'block';
          highlightText(item, filterValue, itemName);
          found = true;
      } else {
          item.style.display = 'none';
      }
  });

  document.getElementById('no-results').style.display = found ? 'none' : 'block';

  // Handle "Enter" key to focus on the first visible item
  if (event.key === "Enter") {
      const firstVisibleItem = document.querySelector('#items .item:not([style*="display: none"])');
      if (firstVisibleItem) {
          alert(`You selected: ${firstVisibleItem.innerText}`);
      }
  }
});

function highlightText(element, text, originalText) {
  if (!text) {
      element.innerHTML = originalText;
      return;
  }
  const regex = new RegExp(`(${text})`, 'gi');
  element.innerHTML = originalText.replace(regex, `<span class="highlight">$1</span>`);
}