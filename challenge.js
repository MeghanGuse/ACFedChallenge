//Update number of donors, total donation amount, and amount left before hitting goal. Needs to update upon successful form submission, which will be onclick since the form is not connected to a backend server

  var donors = 0;
  var goal = 5000;
  var total = 0;

  function donate(){
    //check to make sure goal hasn't been met
    var donation_amount = document.getElementById("donation").value;
    if (total < goal && donation_amount < 5000) {

    //validate that donation amount is a number greater than or equal to 5
    if (donation_amount >= 5) {

      //clear the error message if it was there previously
      var error_div = document.getElementById("error");
      console.log(error_div);
      error.style.display = "none";

      //increase the donor count
      donors++;
      localStorage.setItem('donors', donors);
      console.log("donors: " + localStorage.donors);

      //set the donor count on the UI
      document.getElementById("donorCount").innerHTML = localStorage.donors;

      //get the value from the input
      localStorage.setItem("donation_amount", donation_amount);
      console.log("donation amount: " + localStorage.donation_amount);

      //update localStorage with new donation
      var donation_total = parseFloat(total, 10) + parseFloat(donation_amount, 10);
      total = donation_total;
      localStorage.setItem("donation_total", donation_total);
      console.log("donation_total: " + localStorage.donation_total);

      //clear donation amount from input
      document.getElementById('donation').value = '';

      //find progress bar percentage
      var progress_bar = ((donation_total/goal) * 100);
      localStorage.setItem("progress_bar", progress_bar);
      console.log("progress bar: " + progress_bar);

      //update css for progress div
      var progress_bar_div = document.getElementById("progress");
      console.log(progress_bar_div);
      progress_bar_div.style.width = progress_bar + "%";

      //find the remainder left after donatino
      var remainder = (goal - donation_total).toFixed(2);
      localStorage.setItem("remainder", remainder);
      console.log(remainder);
      document.getElementById("donationTotal").innerHTML = localStorage.remainder;
    }

    //show alert if donation amount is not greater than or equal to 5
    else {
        var error_div = document.getElementById("error");
        console.log(error_div);
        error.style.display = "block";
    }
  }

  //show alert if donation goal has been met
  else {
    //hide bar that show donation amount remaining
    var hide_progress = document.getElementById('donations');
    console.log(hide_progress);
    donations.style.display = "none";

    //show bar with donation amount over goal
    var over = document.getElementById("over_goal");
    console.log(over);
    over_goal.style.display = "block";

    //clear the error message if it was there previously
    var error_div = document.getElementById("error");
    console.log(error_div);
    error.style.display = "none";

    //increase the donor count
    donors++;
    localStorage.setItem('donors', donors);
    console.log("donors: " + localStorage.donors);

    //set the donor count on the UI
    document.getElementById("donorCount").innerHTML = localStorage.donors;

    //get the value from the input
    localStorage.setItem("donation_amount", donation_amount);
    console.log("donation amount: " + localStorage.donation_amount);

    //update localStorage with new donation
    var donation_total = parseFloat(total, 10) + parseFloat(donation_amount, 10);
    total = donation_total;
    localStorage.setItem("donation_total", donation_total);
    console.log("donation_total: " + localStorage.donation_total);

    //clear donation amount from input
    document.getElementById('donation').value = '';

    //update css for progress div
    var progress_bar_div = document.getElementById("progress");
    progress_bar_div.style.width = "100%";

    //find the remainder left after donatino
    var overage = Math.abs(goal - donation_total).toFixed(2);
    localStorage.setItem("overage", overage);
    console.log(overage);
    document.getElementById("overage").innerHTML = localStorage.overage;
  }
}
