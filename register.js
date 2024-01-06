// Function to populate the select element with a range of numbers
function populateNumberRange() {
    var selectElement = document.getElementById("numberRangeSelect");
  
    for (var i = 1; i <= 60; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = i;
      selectElement.add(option);
    }
  }
  
  // Call the function to populate the number range when the page loads
  window.onload = function() {
    populateNumberRange();
  };
