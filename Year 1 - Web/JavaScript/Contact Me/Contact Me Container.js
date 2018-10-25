var TitleContainerWidth
var TitleContainerHeight
var TitleTextSize

var NameContent
var EmailContent
var MessageContent
var EmailIndex

var NameContentCheck = true
var EmailContentCheck = true
var MessageContentCheck = true

function ContainerScale() {

  var submitButton = document.getElementById('submit');

  //Performs function when button is clicked
  submitButton.addEventListener('click', submitAction);

  //Function to validate the user input in to the form
  function submitAction(e) {
    // Remove refresh from submit
    e.preventDefault();

    //Set variables equal to what the user has inputted in to the form
    NameContent = document.getElementById("NameContent").value;
    EmailContent = document.getElementById("EmailAddressContent").value;
    MessageContent = document.getElementById("MessageContent").value;

    //Checks if the content of the name input box is empty and sets property values if the statement is true
    if (NameContent.length <= 0) {
      document.getElementById("NameContent").placeholder = "* This field must be filled in!";
      document.getElementById("NameContent").style.border = "2px solid #cc0000";
      document.getElementById("NameContent").style.boxShadow = "0px 0px 3px 1px #CC0000 inset";
      NameContentCheck = false;
    } else { //Sets property values if the statement is false
      document.getElementById("NameContent").placeholder = "Type here.";
      document.getElementById("NameContent").style.border = "2px solid #00e600";
      document.getElementById("NameContent").style.boxShadow = "0px 0px 3px 1px #00e600 inset";
      NameContentCheck = true;
    }

    //Checks the E-Mail input box for an "@" symbol and returns that symbols index
    EmailIndex = EmailContent.indexOf("@");

    //Checks if the content of the E-Mail input box is empty and sets property values if the statement is true
    if (EmailContent.length <= 0) {
      document.getElementById("EmailAddressContent").placeholder = "* This field must be filled in!";
      document.getElementById("EmailAddressContent").style.border = "2px solid #cc0000";
      document.getElementById("EmailAddressContent").style.boxShadow = "0px 0px 3px 1px #CC0000 inset";
      EmailContentCheck = false;
    } else if ( EmailIndex <= -1) { //Checks if the content of the E-Mail input box has an "@" symbol in it and sets property values if the statement is true
      document.getElementById("EmailAddressContent").placeholder = '* "@" not detected! Please use a valid Email address.';
      document.getElementById("EmailAddressContent").style.border = "2px solid #cc0000";
      document.getElementById("EmailAddressContent").style.boxShadow = "0px 0px 3px 1px #CC0000 inset";
      EmailContentCheck = false;
    } else { //Sets property values if both statements are false
      document.getElementById("EmailAddressContent").placeholder = "Type here.";
      document.getElementById("EmailAddressContent").style.border = "2px solid #00e600";
      document.getElementById("EmailAddressContent").style.boxShadow = "0px 0px 3px 1px #00e600 inset";
      EmailContentCheck = true;
    }

    //Checks if the content of the Message input box is empty and sets property values if the statement is true
    if (MessageContent.length <= 0) {
      document.getElementById("MessageContent").placeholder = "* Please insert a mesage for me to read.";
      document.getElementById("MessageContent").style.border = "2px solid #cc0000";
      document.getElementById("MessageContent").style.boxShadow = "0px 0px 3px 1px #CC0000 inset";
      MessageContentCheck = false;
    } else { //Sets property values if the statement is false
      document.getElementById("MessageContent").placeholder = "Type here.";
      document.getElementById("MessageContent").style.border = "2px solid #00e600";
      document.getElementById("MessageContent").style.boxShadow = "0px 0px 3px 1px #00e600 inset";
      MessageContentCheck = true;
    }

    //If the statement is true, return a message to the user that their E-Mail has been sent
    if (NameContentCheck == true && EmailContentCheck == true && MessageContentCheck == true) {
      document.getElementById("UserMessage").innerHTML = "Thank you for getting in touch " + NameContent + "!"
    } else { //If the statement is false, return a message to the user that their E-Mail hasn't been sent
      document.getElementById("UserMessage").innerHTML = "Please check the contact form for any errors!";
    }

    //Clear the input boxes
    document.getElementById("NameContent").value = "";
    document.getElementById("EmailAddressContent").value = "";
    document.getElementById("MessageContent").value = "";

  }

  //Calculates the container width
  ContainerWidth = window.getComputedStyle(document.getElementById("ContactMeContainer1"), null).getPropertyValue("width");
  ContainerWidth = ContainerWidth.replace('px', '');

  //Work out margin for left and right of the container
  document.getElementById("ContactMeContainer1").style.marginRight =  Margin + "px";
  document.getElementById("ContactMeContainer1").style.marginLeft =  Margin + "px";

  //Checks whether the body width and container width are the same
  if (BodyWidth == ContainerWidth){
    //Checks whether the container is below a certain width or not and sets height values accordingly
    if(ContainerWidth <= 7*px_per_cm) {
      TitleContainerHeight = (ContainerWidth*(45.3438/287));
    }
    else {//Sets a different height for the title container of statement is false
      TitleContainerHeight = px_per_cm*1.2;
    }
  } else {//Set height of title container if statement is false
    TitleContainerHeight = (ContainerWidth*0.05);
  }

  //Set the height of the title
  document.getElementById("ContactMeTitle1").style.height = (TitleContainerHeight*(2/3)) + "px";

  //Set the paddingTop of the title
  document.getElementById("ContactMeTitle1").style.paddingTop = (TitleContainerHeight*(7/60)) + "px";

  //Set the paddingBottom of the title
  document.getElementById("ContactMeTitle1").style.paddingBottom = (TitleContainerHeight*(13/60)) + "px";

  // Work out the height of the Title text
  TitleTextSize = (TitleContainerHeight*(2/3));
  document.getElementById("ContactMeTitle1").style.fontSize = TitleTextSize + "px";
}

//Calls the ContainerScale function when the web page loads or if the browser window is resized
window.addEventListener("load", ContainerScale);
window.addEventListener("resize", ContainerScale);
