$(function() {
   //Handle button click from form
    $("#js-shopping-list-form").submit(function(event) {
      //prevent page from refreshing
      event.preventDefault();
      //retrive input to string
      const userItem = $(event.currentTarget).find("#shopping-list-entry");
      //add new list item to unordered list
      $("ul").append('<li>' + '<span class="shopping-item">' + userItem.val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
      //console.log(event);
      userItem.val("");
    });

   //When Check button in pressed add shopping-item_checked to list item
   //ul is the element above li and it needed to affect newly added li's
   $('ul').on('click','li', function(event) {
      //console.log(event); 
      //currentTarget is li, delegateTarget is ul
      $(event.currentTarget).toggleClass('shopping-item__checked');
    });

    //Deletes items when delete button is pressed.
    //ul is element above li and needed to affect newly added li's
    $('ul').on('click', '.shopping-item-delete', function(event) {
      //console.log(event);
      //this targets the button, reaches up to the parent li using the closest method
      $(this).closest('li').remove();
    });
});