$(document).ready(function() {

  $(".btn").click(function(event) {
    var nameInput = $("#name").val();

    $(".name").text(nameInput);

    event.preventDefault();

    $("#letter").show();

  });

});
