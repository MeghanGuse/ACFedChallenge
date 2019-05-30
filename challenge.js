/*Guse notes:
 - Need to find way for form to accept submission without backend
 https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript


 - Need to find way for numbers to be stored temporarily without backend
 https://stackoverflow.com/questions/27798248/storing-temporary-client-side-data

 - Progress bar isn't correct, is functioning more like a download bar than a donation progress bar
 Instead of having an animated progress bar (which would be great and should be the end goal), just have the bar check the donation amount and fill it based on percentage

 - Missing: $ formatting needs to be added as js function and not as part of placeholder text on input so that user will still see it when entering the dollar amount.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
 https://stackoverflow.com/questions/2913236/html-text-input-field-with-currency-symbol
*/

//Update donation amount - needs to subtract total donations from the total $5000, and post new remainder in speech bubble above progress bar
window.onload = function(){

    var remainder = new Object();
        goal = 5000;
        donated = 3750;
        remainder.checkRemaining = function(){
          return this.goal - this.donated;
        };


var remainder = document.getElementById('donationTotal');
  remainder.textContent = remainder.checkRemaining();
}

//Progress bar - needs to move as donations come in and correspond to the donation amount
function move() {
  var elem = document.getElementById("progress");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}



//Update number of donors - needs to update upon successful form submission
var donors = {
number: 0
}
window.onload = function(){
    var form = document.getElementById('donationForm');
      form.onsubmit = function updateDonors() {
        donors++;
        return donors;
    }
}




//Error messaging - input must contain a number greater than 5
window.onload = function(){
    var form = document.getElementById('donationForm');
    var input = document.getElementById('donation')
      form.onsubmit = function() {

        if (input >= 5) {
          document.write('Thank you for your donation!');
        }
        else {
          document.write ('Please enter a number great than 5.');
        }
    }
}
