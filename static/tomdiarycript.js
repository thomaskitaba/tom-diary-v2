

/** @format */

window.setInterval(currentdate, 1000);

function currentdate() {
  full_date = new Date();
  yr = full_date.getFullYear();
  month = full_date.getMonth() + 1;
  date = full_date.getDate();

  today = date + " / " + month + " / " + yr;
  
  hr = full_date.getHours();
  min = full_date.getMinutes();
  sec = full_date.getSeconds();
  day = full_date.getDay();
  
  var prepand = hr >= 12 ? " PM " : " AM ";

  var datelist = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  day = datelist[day];
  time = hr + ":" + min + ":" + sec + "   " + prepand;
  date_info = time + "-" + day;

  document.getElementById("today").innerHTML = today;
  document.getElementById("clock").innerHTML = time;
  document.getElementById("day").innerHTML = day;
}

function displaypopups(elementid) {
  // get class catagory right next to this id

  document.querySelector(".catagory-popup").style.display = "block";
}
function hidepopups() {
  document.querySelector(".catagory-popup").style.display = "none";
}

function generatecatagory() {
  generate_button = document.getElementById("generate_catagory");
  generate_button.click();
}

// $("document").ready(function(){

//   console.log("welcome Thomas Kitaba");
  
//   //
//   $("body").hide();
//   $("body").show(5000);
  
  
//   });