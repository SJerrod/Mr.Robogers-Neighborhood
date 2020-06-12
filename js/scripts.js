// Buisness Logic

const numberArray = function(createArray) {
  let emptyArray = [];
  const numberInput = parseInt($("input#number").val());
  for (let i=0; i < numberInput; i ++) {
    emptyArray.push(i+1)
  }
  return emptyArray;
}



// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("input#number").val());
    if(!numberInput || numberInput < 0 ) {
      alert("Incorrect input, please enter a number > 0");
      $("input#number").val();
      return;
    }
    $("#answer").text(numberArray);
    $(".answer").show();
  });
});