document.getElementById('add-item').addEventListener('click', function() {
    const itemInput = document.getElementById('grocery-item');
    const itemText = itemInput.value.trim();

    if (itemText !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = itemText;
        document.getElementById('grocery-list').appendChild(listItem);
        itemInput.value = '';
    }
});
