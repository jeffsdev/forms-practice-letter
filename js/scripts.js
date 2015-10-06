$(document).ready(function() {

  $(".btn").click(function(event) {
    var nameInput = $("#name").val();
    nameInput = nameInput.toUpperCase();

    $(".name").text(nameInput);

    event.preventDefault();

    $("#letter").show();

  });

});
