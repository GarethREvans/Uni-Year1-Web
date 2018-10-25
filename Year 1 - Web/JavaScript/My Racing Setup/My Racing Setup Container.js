var TitleContainerWidth
var TitleContainerHeight
var TitleTextSize

function ContainerScale() {

  //Calculates the container width
  ContainerWidth = window.getComputedStyle(document.getElementById("MyRacingSetupContainer1"), null).getPropertyValue("width");
  ContainerWidth = ContainerWidth.replace('px', '');

  //Work out margin for left and right of the container
  document.getElementById("MyRacingSetupContainer1").style.marginRight =  Margin + "px";
  document.getElementById("MyRacingSetupContainer1").style.marginLeft =  Margin + "px";

  //Checks if the container and body width are the same
  if (BodyWidth == ContainerWidth){
    //Checks if the container is less than a particular width and sets values accordingly
    if(ContainerWidth <= 7*px_per_cm) {
      TitleContainerHeight = (ContainerWidth*(45.3438/287));
    }
    else {
      TitleContainerHeight = px_per_cm*1.2;
    }
  } else { //Set height of title container if statement is false
    TitleContainerHeight = (ContainerWidth*0.05);
  }

  //Set the height of the title
  document.getElementById("MyRacingSetupTitle1").style.height = (TitleContainerHeight*(2/3)) + "px";

  //Set the paddingTop of the title
  document.getElementById("MyRacingSetupTitle1").style.paddingTop = (TitleContainerHeight*(7/60)) + "px";

  //Set the paddingBottom of the title
  document.getElementById("MyRacingSetupTitle1").style.paddingBottom = (TitleContainerHeight*(13/60)) + "px";

  // Work out the height of the Title text
  TitleTextSize = (TitleContainerHeight*(2/3));
  document.getElementById("MyRacingSetupTitle1").style.fontSize = TitleTextSize + "px";
}

//Calls the ContainerScale function when the web page loads or if the browser window is resized
window.addEventListener("load", ContainerScale);
window.addEventListener("resize", ContainerScale);
