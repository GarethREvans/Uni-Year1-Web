var TitleContainerWidth
var TitleContainerHeight
var TitleTextSize
var VideoWidth
var VideoHeight
var VSubContainerHeight;

var VideoId
var VP
var src
var VPwidth
var VPheight

function ContainerScale() {

  //Calculates the container width
  ContainerWidth = window.getComputedStyle(document.getElementById("HotLapsContainer1"), null).getPropertyValue("width");
  ContainerWidth = ContainerWidth.replace('px', '');

  //Work out margin for left and right of the container
  document.getElementById("HotLapsContainer1").style.marginRight =  Margin + "px";
  document.getElementById("HotLapsContainer1").style.marginLeft =  Margin + "px";

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
  document.getElementById("HotLapsTitle1").style.height = (TitleContainerHeight*(2/3)) + "px";

  //Set the paddingTop of the title
  document.getElementById("HotLapsTitle1").style.paddingTop = (TitleContainerHeight*(7/60)) + "px";

  //Set the paddingBottom of the title
  document.getElementById("HotLapsTitle1").style.paddingBottom = (TitleContainerHeight*(13/60)) + "px";

  // Work out the height of the Title text
  TitleTextSize = (TitleContainerHeight*(2/3));
  document.getElementById("HotLapsTitle1").style.fontSize = TitleTextSize + "px";

  var iframeElement = document.getElementById("VideoPlayer1");

  //Calculates the height of the video images
  VideoWidth = window.getComputedStyle(document.getElementById("Video1"), null).getPropertyValue("width");
  VideoWidth = VideoWidth.replace("px", "");
  VideoHeight = (VideoWidth*(315/560));

  //Sets the height of the video images
  document.getElementById("Video1").style.height = VideoHeight + "px";
  document.getElementById("Video2").style.height = VideoHeight + "px";
  document.getElementById("Video3").style.height = VideoHeight + "px";
  document.getElementById("Video4").style.height = VideoHeight + "px";
  document.getElementById("Video5").style.height = VideoHeight + "px";
  document.getElementById("Video6").style.height = VideoHeight + "px";
  document.getElementById("Video7").style.height = VideoHeight + "px";
  document.getElementById("Video8").style.height = VideoHeight + "px";
  document.getElementById("Video9").style.height = VideoHeight + "px";

  //Checks if an iframe exists and sets the heights and transitions of the video and VP containers accordingly
  if (iframeElement === null) {

    document.getElementById("VPContainer1").style.transition = "max-height 0s ease 0s";
    document.getElementById("VPContainer1").style.height = "0px";

    document.getElementById("VideosContainer1").style.transition = "max-height 0s ease 0s";
    VSubContainerHeight = window.getComputedStyle(document.getElementById("VideosSubContainer1"), null).getPropertyValue("height");
    VSubContainerHeight = VSubContainerHeight.replace("px", "");
    VSubContainerHeight = (+VSubContainerHeight + 6);
    document.getElementById("VideosContainer1").style.maxHeight = VSubContainerHeight + "px";

  } else {

    var iframeElement = document.getElementById("VideoPlayer1");

    VPwidth = window.getComputedStyle(document.getElementById("VideoPlayer1"), null).getPropertyValue("width");
    VPwidth = VPwidth.replace("px", "");
    VP.height = (VPwidth*(315/560)) + "px";

    document.getElementById("VPContainer1").style.transition = "max-height 0s ease 0s";
    document.getElementById("VPContainer1").style.height = (VPwidth*(315/560)) + "px";

    document.getElementById("VideosContainer1").style.transition = "max-height 0.5s ease 0s";
    document.getElementById("VideosContainer1").style.maxHeight = "6px";
  }

};

//Sets various container heights and transitions when a video image is clicked
function markActiveLink(el) {

  document.getElementById("VideosContainer1").style.transition = "max-height 0.5s ease 0s";
  document.getElementById("VideosContainer1").style.maxHeight = "6px";

  // Gets the id of the video image that was clicked
  VideoId = (el).getAttribute("id");

  // Calls a function to create an iframe
  createIframe();

  document.getElementById("VPContainer1").style.transition = "height 0.5s ease 0.5s";
  document.getElementById("VPContainer1").style.height = (VPwidth*(315/560)) + "px";

}

// Sets the properties of the iframe
function createIframe(){

  VP = document.createElement("iframe");
  VP.id = "VideoPlayer1";

  // Determines what the source of the iframe is, depending on what video image was clicked
  // Codemasters Birmingham. (c2016). F1 2015 [PlayStation 4 game]. Birmingham England: Codemasters
  // Evans, Gareth. [Gazza E]. (c2016). F1 2015 [YouTube Playlist]. Retrieved 27 April 2016, from https://www.youtube.com/playlist?list=PL_37eIOJws0EBIrTTLHhYIwElqpwy7OZN
  switch (VideoId) {
    case "Video1":
    src = "https://www.youtube.com/embed/WaajWhja_bg?rel=0&amp;controls=1&amp;showinfo=0";
    break;
    case "Video2":
    src = "https://www.youtube.com/embed/-d_gqX3U8-I?rel=0&amp;controls=1&amp;showinfo=0";
    break;
    case "Video3":
    src = "https://www.youtube.com/embed/xIKEKOiiKm8?rel=0&amp;controls=1&amp;showinfo=0";
    break;
    case "Video4":
    src = "https://www.youtube.com/embed/Y96FH8OMSag?rel=0&amp;controls=1&amp;showinfo=0";
    break;
    case "Video5":
    src = "https://www.youtube.com/embed/rgS-nciycxQ?rel=0&amp;controls=1&amp;showinfo=0";
    break;
    case "Video6":
    src = "https://www.youtube.com/embed/lo9aGWYSGnY?rel=0&amp;controls=1&amp;showinfo=0";
    break;
    case "Video7":
    src = "https://www.youtube.com/embed/ktJtQlFO6r8?rel=0&amp;controls=1&amp;showinfo=0";
    break;
    case "Video8":
    src = "https://www.youtube.com/embed/ZrTumuVMCMc?rel=0&amp;controls=1&amp;showinfo=0";
    break;
    case "Video9":
    src = "https://www.youtube.com/embed/YWYRey4UTFI?rel=0&amp;controls=1&amp;showinfo=0";
    break;
  }

  VP.src = src;

  VP.style.background = "#000000";
  VP.scrolling = "auto";
  VP.frameborder = "0";
  VP.setAttribute('allowFullScreen', '');
  VP.width = "100%";
  document.getElementById("VPContainer1").appendChild(VP);
  VPwidth = window.getComputedStyle(document.getElementById("VideoPlayer1"), null).getPropertyValue("width");
  VPwidth = VPwidth.replace("px", "");
  VP.height = (VPwidth*(315/560)) + "px";
  VP.style.position = "absolute";
  VP.style.zIndex = "9";

}

// Sets various height and transition properties of the content containers when the close video player button is clicked
function CBclick() {
  (document.getElementById("VPContainer1")).removeChild((document.getElementById("VideoPlayer1")));

  document.getElementById("VideosContainer1").style.transition = "max-height 0.5s ease 0.5s";
  VSubContainerHeight = window.getComputedStyle(document.getElementById("VideosSubContainer1"), null).getPropertyValue("height");
  VSubContainerHeight = VSubContainerHeight.replace("px", "");
  VSubContainerHeight = (+VSubContainerHeight + 6);
  document.getElementById("VideosContainer1").style.maxHeight = VSubContainerHeight + "px";

  document.getElementById("VPContainer1").style.transition = "height 0.5s ease 0s";
  document.getElementById("VPContainer1").style.height = "0px";
}

//Calls the ContainerScale function when the web page loads or if the browser window is resized
window.addEventListener("load", ContainerScale);
window.addEventListener("resize", ContainerScale);
