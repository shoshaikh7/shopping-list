$(function () {
  // Add items
  $('#js-shopping-list-form').submit(e => {
    e.preventDefault();
    let newItem = $(e.currentTarget).find('input[name="shopping-list-entry"]').val();    
    let newEntry = $(`<li><span class="shopping-item">${newItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
    $('.shopping-list').append(newEntry);
  });

  // Uncheck/Check items
  $('.shopping-list').on('click', 'li .shopping-item-controls .shopping-item-toggle',e => {
    let shopping_item = $(e.currentTarget).closest('.shopping-item-controls').siblings('.shopping-item');
    shopping_item.toggleClass('shopping-item__checked');

    let button_label = $(e.currentTarget).find('.button-label');
    
    if (shopping_item.hasClass('shopping-item__checked')) {
      button_label.text("uncheck");
    } else {
      button_label.text("check");
    }
  });
  
  // Remove items
  $('.shopping-list').on('click', 'li .shopping-item-controls .shopping-item-delete',e => {
    let shopping_entry = $(e.currentTarget).closest('.shopping-item-controls').closest('li');
    shopping_entry.remove();
  });

});