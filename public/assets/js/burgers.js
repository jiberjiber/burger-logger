$(function(){
    $('.addForm').on('submit', event => {
        event.preventDefault();

        var newBurger = {
            name: $('#burger').val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(
            function() {
              console.log("created new burger");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });

    $('.devourBurger').on('click', event => {
        var id = event.currentTarget.dataset.id;

        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: id
        }).then(
          function() {
            console.log("devoured burger ", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });

    $('.deleteBurger').on('click', event => {
        var id = event.currentTarget.dataset.id;

        $.ajax("/api/burgers/" + id, {
          type: "DELETE",
          data: id
        }).then(
          function() {
            console.log("deleted burger ", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
    });
});