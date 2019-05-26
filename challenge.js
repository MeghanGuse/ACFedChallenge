//Note: without backend to accept form submission, only the error messaging will work in it's current state


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
