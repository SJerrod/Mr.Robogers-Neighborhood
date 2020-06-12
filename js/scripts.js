// Buisness Logic

// User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("input#number").val());
    if(!numberInput || numberInput < 0 ) {
      alert("Incorrect input, please enter a number > 0");
      $("input#number").val();
      return;
    }
    $("#answer").text(numberInput);
    $(".answer").show();
  });
});