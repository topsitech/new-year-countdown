const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];
const dat = new Date();
tday = dat.getDate();
document.getElementById("tmonth").innerHTML = monthNames[dat.getMonth()];
document.getElementById("tday").innerHTML = tday + getpos(tday);
var this_year = new Date().getFullYear();
//alert(next_year);
document.getElementById("nyear").innerHTML = this_year;

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
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s + " " + a;
    t = setTimeout(function() {
        startTime()
    }, 500);
}

startTime();

setTimeout(function ()
{
    if (self.name != '_refreshed_'){
    self.name = '_refreshed_';
    self.location.reload(true);
    } else {
        self.name = ''; 
    }
}, 1000);

function getpos(n){
    var s = ['th', 'st', 'nd', 'rd'];
    var d = (n|0)%100;
    return d > 3 && d < 21 ? 'th' : s[d%10] || 'th';
}