// Buisness Logic

const numberArray = function(createArray) {
  let emptyArray = [];
  const numberInput = parseInt($("input#number").val());
  for (let i=0; i <= numberInput; i ++) {
    emptyArray.push(i)
  }
  return emptyArray;
}


let result = function(numberArray) {
  let roboArray = [];
  for (let i=0; i <= numberArray; i++) {
    if (roboArray.includes("3")) {
      return roboArray = "Won't you be my neighbor?";
    } else if (roboArray.includes("2")) {
      return roboArray = "Boop!";
    } else if (roboArray.includes("1")) {
      return roboArray = "Beep!";
    } else {
      return roboArray
    }
  }
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
    $("#answer").text(result);
    $(".answer").show();
  });
});