// Set the date we're counting down to
//var countDownDate = new Date("Dec 31, 2019 20:04:20").getTime();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const dat = new Date();

var this_year = dat.getFullYear();
//var this_month = new Date().getFullMonth();
var next_year = this_year + 1;
tday = dat.getDate();

document.getElementById("tmonth").innerHTML = monthNames[dat.getMonth()];
document.getElementById("tday").innerHTML = tday + getpos(tday);
document.getElementById("tyear").innerHTML = this_year;
document.getElementById("nyear").innerHTML = next_year;

var countDownDate = new Date("Jan 1, "+ next_year +" 00:00:00").getTime();
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
  
  
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  var today_date = (dat.getMonth()+1)+'/'+ dat.getDate() +'/' + this_year;
  var new_year = '1/1/'+next_year;

  var date1 = Date.parse(today_date);
  var date2 = Date.parse(new_year);
  var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 
  if(diffDays<=1) days="day";
  else days="days";
  document.getElementById("days").innerHTML = diffDays + ' ' + days;
  //alert(diffDays)

  // Output the result in an element with id="demo"
  //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //+ minutes + "m " + seconds + "s ";
  
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
  document.getElementById("current").innerHTML = distance;  
  // If the count down is over, write some text 
  
  if(hours==0 && minutes==0 && seconds==0){
    //alert("Hello");
    window.location = "new-year.html"
  }
  
  if (distance <= 0) {
		window.location = "new-year.html"
  }
}, 1000);

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  if(h==12){
	  var a = "PM";
  }
  else if(h==0){
	  h = 12;
	  var a = "AM";
  }
  else if(h>12){
	  h = h - 12;
	  var a = "PM";
  }
  else var a = "AM";
  document.getElementById('time').innerHTML = h + ":" + m + " " + a;
  t = setTimeout(function() {
    startTime()
  }, 500);
}

function getpos(n){
    var s = ['th', 'st', 'nd', 'rd'];
    var d = (n|0)%100;
	return d > 3 && d < 21 ? 'th' : s[d%10] || 'th';
}
startTime();