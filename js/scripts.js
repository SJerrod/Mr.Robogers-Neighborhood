// Buisness Logic

function numberList(numberInput) {
  let numberOutput = [];
  for (i=0; i <= numberInput; i ++) {
    let roboSay = i.toString();
    if (roboSay.includes(3)) {
      numberOutput.push("Won't you be my neighbour?");
    } else if (roboSay.includes(2)) {
      numberOutput.push("Boop!");
    } else if (roboSay.includes(1)) {
      numberOutput.push("Beep!");
    } else {
      numberOutput.push(i);
    }
  }
  console.log(numberOutput);
  return numberOutput;
} 


// User Interface Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const numberInput = parseInt($("input#number").val());
    let result = numberList(numberInput);
    if(!numberInput || numberInput < 0 ) {
      alert("Incorrect input, please enter a number > 0");
      $("input#number").val();
      return;
    }
    $("input#number").val("");
    $("#answer").text(result);
    $(".answer").show();
  });
});