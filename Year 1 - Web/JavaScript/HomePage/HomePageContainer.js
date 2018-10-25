var MainIntroductionContainerWidth
var LargeImageWidth
var LargeImageMargin
var LargeImageContainerWidth

function ContainerScale() {

  //Calculates the container width
  MainIntroductionContainerWidth = (window.getComputedStyle(document.getElementById("MainIntroductionContainer1"), null).getPropertyValue("width"));
  MainIntroductionContainerWidth = MainIntroductionContainerWidth.replace('px', '');

  //Checks whether the body width and container width are the same and works out the width of the large image container
  if (BodyWidth == MainIntroductionContainerWidth) {

    LargeImageWidth = (1185.44/37.795)*px_per_cm;
    LargeImageContainerWidth = (window.getComputedStyle(document.getElementById("ImageContainer1"), null).getPropertyValue("width"));
    LargeImageContainerWidth = LargeImageContainerWidth.replace('px', '');

    //Checks if the containerwidth is below a certain width and calculates the large images width and margin accordingly
    if (MainIntroductionContainerWidth <= ((403/37.795)*px_per_cm)) {

      LargeImageWidth = LargeImageWidth - ((1185.44/403)*(((403/37.795)*px_per_cm) - LargeImageContainerWidth));

      LargeImageMargin = ((LargeImageWidth-LargeImageContainerWidth)/2);

      document.getElementById("LargeImage1").style.width = LargeImageWidth + "px";
      document.getElementById("LargeImage1").style.marginLeft = "-" + LargeImageMargin + "px";
      document.getElementById("LargeImage1").style.marginRight = "-" + LargeImageMargin + "px";

    } else {

      LargeImageMargin = ((LargeImageWidth-LargeImageContainerWidth)/2);

      document.getElementById("LargeImage1").style.width = LargeImageWidth + "px";
      document.getElementById("LargeImage1").style.marginLeft = "-" + LargeImageMargin + "px";
      document.getElementById("LargeImage1").style.marginRight = "-" + LargeImageMargin + "px";

    }

  } else {// Sets the width of the image to fill its container of the statement os false
    document.getElementById("LargeImage1").style.width = "100%";
    document.getElementById("LargeImage1").style.marginLeft = "0px";
    document.getElementById("LargeImage1").style.marginRight= "0px";
  }
}

//Calls the ContainerScale function when the web page loads or if the browser window is resized
window.addEventListener("load", ContainerScale);
window.addEventListener("resize", ContainerScale);
