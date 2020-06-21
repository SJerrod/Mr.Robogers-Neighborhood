// Buisness Logic

const numberList = function(createArray) {
  let numberOutput = [];
  const numberInput = parseInt($("input#number").val());
  for (let i=0; i <= numberInput; i ++) {
    numberOutput.push(i)
  }
  return numberOutput;
}

function roboSay(numberList) {
  let roboOutput = [];
  for (let i=0; i <= numberList; i++) {
    numberOutput.push(i);
  }
  return numberOutput;
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
    $("#answer").text(numberList);
    $(".answer").show();
  });
});