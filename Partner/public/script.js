//Inputted Variables

var InputInitials = "MC";
var InputNum = 0;
var url = "http://ec2-52-32-164-224.us-west-2.compute.amazonaws.com:3000/students";


var student = "";

$(document).ready(function(){
  $("#partnerViewDiv").hide();


// "getStarted" Button Click
  $("#getStarted").click(function(){
    $("#startFormDiv").hide();
    $('.t-image').toggleClass('t-image-change');
    $("#partnerViewDiv").show();

  // Set Global JS variable with inputted info
      InputNum = $("#selectYourName").val();

      if(InputNum == 0){
        InputInitials = "MC";
      }
      if(InputNum == 1){
        InputInitials = "EA";
      }
      if(InputNum == 2){
        InputInitials = "BB";
      }
      if(InputNum == 3){
        InputInitials = "DB";
      }
      if(InputNum == 4){
        InputInitials = "MB";
      }
      if(InputNum == 5){
        InputInitials = "LB";
      } 
      if(InputNum == 5){
        InputInitials = "SMB";
      } 
      if(InputNum == 6){
        InputInitials = "STB";
      }      
      if(InputNum == 7){
        InputInitials = "KB";
      } 
      if(InputNum == 8){
        InputInitials = "AC";
      } 
      if(InputNum == 9){
        InputInitials = "SC";
      } 
      if(InputNum == 10){
        InputInitials = "JF";
      } 
      if(InputNum == 11){
        InputInitials = "EA";
      } 
      if(InputNum == 12){
        InputInitials = "NRF";
      }
      if(InputNum == 13){
        InputInitials = "NCF";
      } 
      if(InputNum == 14){
        InputInitials = "AWH";
      } 
      if(InputNum == 15){
        InputInitials = "TJHa";
      } 
      if(InputNum == 16){
        InputInitials = "NH";
      } 
      if(InputNum == 17){
        InputInitials = "DKH";
      } 
      if(InputNum == 18){
        InputInitials = "EH";
      } 
      if(InputNum == 19){
        InputInitials = "DRH";
      } 
      if(InputNum == 20){
        InputInitials = "TJHo";
      } 
      if(InputNum == 21){
        InputInitials = "ASH";
      } 
      if(InputNum == 22){
        InputInitials = "BH";
      } 
      if(InputNum == 23){
        InputInitials = "MH";
      }
      if(InputNum == 24){
        InputInitials = "WJ";
      } 
      if(InputNum == 25){
        InputInitials = "JK";
      } 
      if(InputNum == 26){
        InputInitials = "RL";
      } 
      if(InputNum == 27){
        InputInitials = "CL";
      }
      if(InputNum == 28){
        InputInitials = "JM";
      } 
      if(InputNum == 29){
        InputInitials = "JN";
      } 
      if(InputNum == 30){
        InputInitials = "DO";
      } 
      if(InputNum == 31){
        InputInitials = "GP";
      }
      if(InputNum == 32){
        InputInitials = "CSP";
      } 
      if(InputNum == 33){
        InputInitials = "CWP";
      } 
      if(InputNum == 34){
        InputInitials = "BR";
      } 
      if(InputNum == 35){
        InputInitials = "DCR";
      } 
      if(InputNum == 36){
        InputInitials = "GR";
      } 
      if(InputNum == 37){
        InputInitials = "DMR";
      } 
      if(InputNum == 38){
        InputInitials = "SS";
      } 
      if(InputNum == 39){
        InputInitials = "JPSa";
      }
      if(InputNum == 40){
        InputInitials = "JSS";
      } 
      if(InputNum == 41){
        InputInitials = "TS";
      } 
      if(InputNum == 42){
        InputInitials = "MS";
      } 
      if(InputNum == 43){
        InputInitials = "JPSh";
      }
      if(InputNum == 44){
        InputInitials = "RT";
      } 
      if(InputNum == 45){
        InputInitials = "CT";
      } 
      if(InputNum == 46){
        InputInitials = "SV";
      } 
      if(InputNum == 47){
        InputInitials = "AW";
      }
      if(InputNum == 48){
        InputInitials = "JW";
      } 
      if(InputNum == 49){
        InputInitials = "BY";
      }

      console.log(InputInitials);

    var data="";
    $.ajax({
      url:url,
      dataType:"json",
      async:true,
      success: function(data){
        student = data;
        generateCard();
      }

    });
    return false;
  });

  function generateCard(){

  //Set Partner Info Fields from JSON data
    if(InputInitials == "MC") {
      $('#congratstext').html("Professor Clement Doesn't NEED a Partner.");
    }
    $('#welcomeName').html(student[InputNum].name);
    $('#partnerName').html(student[InputNum].partnerName);
    $('#headerName').html(student[InputNum].partnerName)
    $('#bio').html(student[InputNum].bio);
    $('#picture').attr("src", student[InputNum].imageUrl);

    return true;
  }

});

