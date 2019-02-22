
//NAV SIDEBAR SYNTAX
function openNav() {
    
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("pageScrollTitle").style.marginLeft="250px";
        document.getElementById("pageScrollTitleOne").style.marginLeft="250px";
        document.getElementById("pageScrollTitleTwo").style.marginLeft="250px";
        
        document.getElementById("main").style.marginLeft="250px";
        document.getElementById("mainOne").style.marginLeft="250px";
        document.getElementById("mainTwo").style.marginLeft="250px";
        document.getElementById("mainThree").style.marginLeft="250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width="0";
    document.getElementById("pageScrollTitle").style.marginLeft="0";
    document.getElementById("pageScrollTitleOne").style.marginLeft="0";
    document.getElementById("pageScrollTitleTwo").style.marginLeft="0";
    document.getElementById("main").style.marginLeft="0";
    document.getElementById("mainOne").style.marginLeft="0";
    document.getElementById("mainTwo").style.marginLeft="0";
    document.getElementById("mainThree").style.marginLeft="0";
    document.body.style.backgroundColor = "white";
}

// CLOCK JAVASCRIPT SYNTAX
var tday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];
  

function GetClock(){
  var d=new Date();
  var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
  var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;
  
  if(nhour==0){ap=" AM";nhour=12;}
  else if(nhour<12){ap=" AM";}
  else if(nhour==12){ap=" PM";}
  else if(nhour>12){ap=" PM";nhour-=12;}
  
  if(nmin<=9) nmin="0"+nmin;
  if(nsec<=9) nsec="0"+nsec;
  
  var clocktext=""+tday[nday]+", "+tmonth[nmonth]+" "+ndate+", "+nyear+" "+"<br>"+" "+nhour+":"+nmin+":"+nsec+ap+""+"\n(EST)"+"<br>"+"+5 (GMT/UTC)";
  document.getElementById('clockbox').innerHTML=clocktext;

  
}


  
GetClock();
setInterval(GetClock,1000);
// GetUTC();



$(document).ready(function() {
    
    
    openNav();
    
    
    
    // $("#startBtn").on("click", function() {
    //     $(".intro").hide();
    //     $(".masthead").hide();
    //     $(".boxes").show();
    // })

    
});
