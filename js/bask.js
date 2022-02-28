var myName;
var myLastName;
var myID;
var myLogin;
var myHomeCountry;
var myProgram;

var cList = new Array();
var aDetailList = new Array();


class Category {
  constructor(cattype, logo) {
    this.cattype = cattype;
    this.logo = logo;
  }
}

class AnimalDetails {
  constructor(animal, category, scientific, colors, photoDepiction) {
    this.animal = animal;
    this.category = category;
    this.scientific = scientific;
    this.colors = colors;
    this.photoDepiction = photoDepiction;
  }
}

//get doc ready
$(document).ready(function() {

  console.log("in doc ready");

   //retrieve JSON file
 $.getJSON("data/A2-JSON.json", function(data) {

  //delete the local storage
  localStorage.clear();

  let myInfo = data.A2Personal;
  //save personal data to local
  localStorage.setItem("myName", myInfo.FirstName);
  localStorage.setItem("myLastName", myInfo.LastName);
  localStorage.setItem("myID", myInfo.StudentID);
  localStorage.setItem("mylogin", myInfo.UserName);
  localStorage.setItem("myProgram", myInfo.Program);
  localStorage.setItem("myHomeCountry", myInfo.HomeCountry);

  //save personal data into the variables
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
      `<hr>
       <h5>My Sheridan Program: ${myProgram}<br>
       My Home Country: ${myHomeCountry}<h5><hr id="foot">
      `
     ); 
     $("footer").addClass("footerClass");
   
    for (cats of data.Categories) {
      var categories = new Array();
      categories.push(cats);
      console.log(categories);
      cList.push(new Category(cats.cattype, cats.logo));
    }//end of for loop

    localStorage.setItem("cList", JSON.stringify(cList));	

    for (a of data.AnimalDetails) {
      var aDetails = new Array();
      aDetails.push(a);
      console.log(aDetails);
      aDetailList.push(new AnimalDetails(a.animal, a.category, a.scientific, a.colors, a.photoDepiction));
    }//end of for loop

    localStorage.setItem("aDetailList", JSON.stringify(aDetailList));
  
    mainScreen(data);
 
  });//end of getJSON


   
});//end of doc ready

// mainScreen function
function mainScreen(data) {
	//display data on screen

  $("anList").html("");
  $("imgList").html("");
	for(let x=0; x < cList.length; x++) {
		$("#anList").append(
			`
				<li id='${x}'>
					<a href='pages/animalType.html'>
						${cList[x].cattype}
					</a>
				</li> 
        <p>
      `
    )
    $("#images").append(
			`	<li id='${x}'>
          <img src="images/${cList[x].logo}"></img>
        </li> 
       <p>
      `
    )   
  }//end of for loop
}//end of function

 // Save data to local storage
$(document).on("click", "#anList > li", function() {
	localStorage.setItem(
		"choice",
		$(this).closest("li").attr("id")
	);// localStorage.setItem("countryName", countryName);
});