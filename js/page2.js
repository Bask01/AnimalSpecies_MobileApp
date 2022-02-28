var myName;
var myLastName;
var myID;
var myLogin;
var myHomeCountry;
var myProgram;

var category = new Array();
var details = new Array();
var choice;

//get doc ready
$(document).ready(function() {

   console.log("in doc ready");
   choice = localStorage.getItem("choice");
   category = JSON.parse(localStorage.getItem("cList"));;
   details = JSON.parse(localStorage.getItem("aDetailList"));

   

  //retrieve the local storage to save personal info into the variables
  myName = localStorage.getItem("myName");
  myLastName = localStorage.getItem("myLastName");
  myID = localStorage.getItem("myID");
  myLogin = localStorage.getItem("mylogin");
  myProgram = localStorage.getItem("myProgram");
  myHomeCountry = localStorage.getItem("myHomeCountry");


  
  //set the header
$("header").html(
  `<hr id="top"><h5> A2 / ${myName} ${myLastName} / ${myID} / ${myLogin}</h5><hr>`);
 $("header").addClass("headerClass");
 
    //set the footer
    $("footer").html
      (
       `<hr><h5>My Sheridan Program: ${myProgram}<br>
        My Home Country: ${myHomeCountry}<h5><hr id="foot">`
      ); 
    $("footer").addClass("footerClass");

//set the Title
$("h3").html(`Animals from the ${category[choice].cattype} Category`)
          .css("color", "maroon")
          .css("text-align", "center");

         
//display the selected type animals 
for (let x=0; x < details.length; x++){

  if (category[choice].cattype === details[x].category){
  
    $(".list").append(`<b>Name: ${details[x].animal}</b>
                      with scientific name of <b>${details[x].scientific}</b>
                      has a basic colour range of: <b>${details[x]. colors}</b><br>
                      <p><img src="${details[x].photoDepiction}" width="80"></img></p>`);     
}}
    $(".list").css("font-size","14px");
});

