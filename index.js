//Do these need to be in diffent functions or one parent function
$(function() {
   //Handle button click from form
    $("#js-shopping-list-form").submit(function(event) {
       //prevent page from refreshing
        event.preventDefault();
       //retrive input to string
        const userItem = $(event.currentTarget).find("#shopping-list-entry");
       //add new list item to unordered list
       //should add whole item including buttons
        $("ul").append('<li><span class="shopping-item">' + userItem.val() + '</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
        //console.log(userItem);
        userItem.val("");
    });

});

$(function() {
   //When Check button in pressed add shopping-item_checked to span class
   $('li').on('click', '.shopping-item-toggle', function(event) {
        $(event.delegateTarget).addClass('shopping-item__checked');
    });

    $('li').on('click', '.shopping-item-delete', function(event) {
        //console.log(event);
       $(event.delegateTarget).remove();
    });
});