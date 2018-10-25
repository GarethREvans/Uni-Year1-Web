var MenuWidth;
var BodyWidth;
var Margin;
var MenuHeight;
var px_per_cm;
var TextSize;
var LiHeight;
var aHeight;
var aPaddingTop;
var aPaddingBottom;
var MainMenuControl = true;

// Function for calculating the number of pixels per cm on a screen
// Jonathan. (2014, January 11). Getting height of a div in centemeter using jquery [Online forum comment]. Retrieved 27 April 2016, from https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/set-the-viewport?hl=en
function PixelDensityCalculator() {
  px_per_cm = window.getComputedStyle(document.getElementById("PixelDensity1"), null).getPropertyValue("height");
  px_per_cm = px_per_cm.replace("px", "");
  px_per_cm = px_per_cm / 1000;
  (document.getElementById("MainBody1")).removeChild((document.getElementById("PixelDensity1")));
}

function MainMenuScale() {

  // Get width of Main Menu container
  MenuWidth = window.getComputedStyle(document.getElementById("MainMenuContainer1"), null).getPropertyValue("width");
  MenuWidth = MenuWidth.replace('px', '');

  // Get width of page body
  BodyWidth = (window.getComputedStyle(document.getElementById("MainBody1"), null).getPropertyValue("width"));
  BodyWidth = BodyWidth.replace('px', '');

  //Work out margin for left and right of Main Menu container
  Margin = ((BodyWidth-MenuWidth)/2);
  document.getElementById("MainMenuContainer1").style.marginRight =  Margin + "px";
  document.getElementById("MainMenuContainer1").style.marginLeft =  Margin + "px";


  if(MainMenuControl === false) {
  document.getElementById("MainMenuContainer1").style.transition = "height 0.5s";
  } else {
  document.getElementById("MainMenuContainer1").style.transition = "none";
  }

  //Checks if the container and body width are the same
  if (BodyWidth == MenuWidth){
    //Checks if the container is less than a particular width and sets values accordingly
    if(MenuWidth <= 7*px_per_cm) {
      MenuHeight = (MenuWidth*(226.766/264));
    }
    else { //Set height of menu container if statement is false
      MenuHeight = px_per_cm*6;
    }

    //Set the height of the main menu container and the gradient background
    document.getElementById("MainMenuContainer1").style.height = "0px";
    document.getElementById("GradientBackground1").style.height = "0px";

    // Set the height of the show main menu button
    document.getElementById("ShowMainMenuContainer1").style.height = (MenuHeight/5) + "px";
    document.getElementById("ShowMainMenuButton1").style.height = (MenuHeight/5) + "px";
    document.getElementById("ShowMainMenuLink1").style.height = ((MenuHeight/5)*0.54) + "px";
    document.getElementById("ShowMainMenuLink1").style.paddingTop = ((MenuHeight/5)*0.18) + "px";
    document.getElementById("ShowMainMenuLink1").style.paddingBottom = ((MenuHeight/5)*0.28) + "px";
    document.getElementById("ShowMainMenuContainer1").style.fontSize = ((MenuHeight/5)*0.54) + "px";

    // Set the height of the list items
    document.getElementById("ListItem1").style.height = "0px";
    document.getElementById("ListItem2").style.height = "0px";
    document.getElementById("ListItem3").style.height = "0px";
    document.getElementById("ListItem4").style.height = "0px";
    document.getElementById("ListItem5").style.height = "0px";

    // Set the width of the list items
    document.getElementById("ListItem1").style.width = "0px"
    document.getElementById("ListItem2").style.width = "0px";
    document.getElementById("ListItem3").style.width = "0px";
    document.getElementById("ListItem4").style.width = "0px";
    document.getElementById("ListItem5").style.width = "0px";

  } else {

    MenuHeight = (MenuWidth*0.05);

    //Set the height of the main menu container and the gradient background
    document.getElementById("MainMenuContainer1").style.height = MenuHeight + "px";
    document.getElementById("GradientBackground1").style.height = MenuHeight + "px";

    // Set the height of the show main menu button
    document.getElementById("ShowMainMenuContainer1").style.height = "0px";
    document.getElementById("ShowMainMenuButton1").style.height = "0px";
    document.getElementById("ShowMainMenuLink1").style.height = "0px";
    document.getElementById("ShowMainMenuLink1").style.paddingTop = "0px";
    document.getElementById("ShowMainMenuLink1").style.paddingBottom = "0px";
    document.getElementById("ShowMainMenuContainer1").style.fontSize = "0px";

    // Set the height of the list items
    document.getElementById("ListItem1").style.height = (MenuHeight) + "px";
    document.getElementById("ListItem2").style.height = (MenuHeight) + "px";
    document.getElementById("ListItem3").style.height = (MenuHeight) + "px";
    document.getElementById("ListItem4").style.height = (MenuHeight) + "px";
    document.getElementById("ListItem5").style.height = (MenuHeight) + "px";

    // Set the width of the list items
    document.getElementById("ListItem1").style.width = (MenuWidth*(11/60)) + "px";
    document.getElementById("ListItem2").style.width = (MenuWidth*(8/60)) + "px";
    document.getElementById("ListItem3").style.width = (MenuWidth*(15/60)) + "px";
    document.getElementById("ListItem4").style.width = (MenuWidth*(15/60)) + "px";
    document.getElementById("ListItem5").style.width = (MenuWidth*(11/60)) + "px";

  }

  document.getElementById("GradientBackground1").style.width = MenuWidth + "px";

  LiHeight = (window.getComputedStyle(document.getElementById("ListItem1"), null).getPropertyValue("height"));
  LiHeight = LiHeight.replace("px", "");
  TextSize = (LiHeight*0.54);
  document.getElementById("MainMenuContainer1").style.fontSize = TextSize + "px";


  //Work out height and padding of <a> tags for the menu items
  aHeight = LiHeight*0.54;
  aPaddingTop = LiHeight*0.18;
  aPaddingBottom = LiHeight*0.28;

  //Set the height of the <a> tag Main Menu items
  document.getElementById("MainMenuItem1").style.height = aHeight + "px";
  document.getElementById("MainMenuItem2").style.height = aHeight + "px";
  document.getElementById("MainMenuItem3").style.height = aHeight + "px";
  document.getElementById("MainMenuItem4").style.height = aHeight + "px";
  document.getElementById("MainMenuItem5").style.height = aHeight + "px";

  //Set the paddingTop of the <a> tag Main Menu items
  document.getElementById("MainMenuItem1").style.paddingTop = aPaddingTop + "px";
  document.getElementById("MainMenuItem2").style.paddingTop = aPaddingTop + "px";
  document.getElementById("MainMenuItem3").style.paddingTop = aPaddingTop + "px";
  document.getElementById("MainMenuItem4").style.paddingTop = aPaddingTop + "px";
  document.getElementById("MainMenuItem5").style.paddingTop = aPaddingTop + "px";

  //Set the paddingBottom of the <a> tag Main Menu items
  document.getElementById("MainMenuItem1").style.paddingBottom = aPaddingBottom + "px";
  document.getElementById("MainMenuItem2").style.paddingBottom = aPaddingBottom + "px";
  document.getElementById("MainMenuItem3").style.paddingBottom = aPaddingBottom + "px";
  document.getElementById("MainMenuItem4").style.paddingBottom = aPaddingBottom + "px";
  document.getElementById("MainMenuItem5").style.paddingBottom = aPaddingBottom + "px";

  // Change the class name to apply different css properties to the triangle symbol
  document.getElementById("TriangleSymbol1").className="out";
  MainMenuControl = true;
};

//Function for removing the Loader, when loading has finished
function LoaderRemove() {
  document.getElementById("LoaderContainer1").style.transition = "opacity 1s ease, height 0s ease 1s";
  document.getElementById("LoaderContainer1").style.opacity = "0";
  document.getElementById("LoaderContainer1").style.height = "0px";
}

function ShowMainMenu() {

  // Get width of Main Menu container
  MenuWidth = window.getComputedStyle(document.getElementById("MainMenuContainer1"), null).getPropertyValue("width");
  MenuWidth = MenuWidth.replace('px', '');

  //Checks if the container and body width are the same
  if (MenuWidth == BodyWidth){
    //Checks if the container is less than a particular width and sets values accordingly
    if(MenuWidth <= 7*px_per_cm) {
      MenuHeight = (MenuWidth*(226.766/264));
    }
    else {//Set height of the main menu container if statement is false
      MenuHeight = px_per_cm*6;
    }
  }

  //Set the height of the list items
  document.getElementById("ListItem1").style.height = ((MenuHeight/5)) + "px";
  document.getElementById("ListItem2").style.height = ((MenuHeight/5)) + "px";
  document.getElementById("ListItem3").style.height = ((MenuHeight/5)) + "px";
  document.getElementById("ListItem4").style.height = ((MenuHeight/5)) + "px";
  document.getElementById("ListItem5").style.height = ((MenuHeight/5)) + "px";

  // Set the width of the list items
  document.getElementById("ListItem1").style.width = MenuWidth + "px";
  document.getElementById("ListItem2").style.width = MenuWidth + "px";
  document.getElementById("ListItem3").style.width = MenuWidth + "px";
  document.getElementById("ListItem4").style.width = MenuWidth + "px";
  document.getElementById("ListItem5").style.width = MenuWidth + "px";

  // Set the height and width of the main menu and gradient background
  document.getElementById("MainMenuContainer1").style.height = MenuHeight + "px";
  document.getElementById("GradientBackground1").style.height = MenuHeight + "px";
  document.getElementById("GradientBackground1").style.width = MenuWidth + "px";

  //Calculate the height of the list items and set the text height
  LiHeight = (window.getComputedStyle(document.getElementById("ListItem1"), null).getPropertyValue("height"));
  LiHeight = LiHeight.replace("px", "");
  TextSize = (LiHeight*0.54);
  document.getElementById("MainMenuContainer1").style.fontSize = TextSize + "px";


  //Work out height and padding of <Li> and <a> tags for the menu items
  aHeight = LiHeight*0.54;
  aPaddingTop = LiHeight*0.18;
  aPaddingBottom = LiHeight*0.28;

  //Set the height of the <a> tag Main Menu items
  document.getElementById("MainMenuItem1").style.height = aHeight + "px";
  document.getElementById("MainMenuItem2").style.height = aHeight + "px";
  document.getElementById("MainMenuItem3").style.height = aHeight + "px";
  document.getElementById("MainMenuItem4").style.height = aHeight + "px";
  document.getElementById("MainMenuItem5").style.height = aHeight + "px";

  //Set the paddingTop of the <a> tag Main Menu items
  document.getElementById("MainMenuItem1").style.paddingTop = aPaddingTop + "px";
  document.getElementById("MainMenuItem2").style.paddingTop = aPaddingTop + "px";
  document.getElementById("MainMenuItem3").style.paddingTop = aPaddingTop + "px";
  document.getElementById("MainMenuItem4").style.paddingTop = aPaddingTop + "px";
  document.getElementById("MainMenuItem5").style.paddingTop = aPaddingTop + "px";

  //Set the paddingBottom of the <a> tag Main Menu items
  document.getElementById("MainMenuItem1").style.paddingBottom = aPaddingBottom + "px";
  document.getElementById("MainMenuItem2").style.paddingBottom = aPaddingBottom + "px";
  document.getElementById("MainMenuItem3").style.paddingBottom = aPaddingBottom + "px";
  document.getElementById("MainMenuItem4").style.paddingBottom = aPaddingBottom + "px";
  document.getElementById("MainMenuItem5").style.paddingBottom = aPaddingBottom + "px";

}


//A function that determines what the state of the main menu should be
function MainMenuState() {

  document.getElementById("MainMenuContainer1").style.background = "#000000";
  document.getElementById("MainMenuContainer1").style.transition = "height 0.5s";

  if (MainMenuControl) {

    document.getElementById("TriangleSymbol1").className="over";
    ShowMainMenu();
    MainMenuControl = false;
  }
  else {
    document.getElementById("TriangleSymbol1").className="out";
    MainMenuScale();
    MainMenuControl = true;
  }

}

window.addEventListener("load", PixelDensityCalculator);
window.addEventListener("load", MainMenuScale);
window.addEventListener("load", LoaderRemove);
window.addEventListener("resize", MainMenuScale);
