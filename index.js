$(function () {
  // Add items
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
    let newItem = $(e.currentTarget).find('input[name="shopping-list-entry"]').val();    
    let newEntry = $(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    $('.shopping-list').append(newEntry);
  });

  // Uncheck/Check items

  
  // Remove items

});