var TitleContainerWidth
var TitleContainerHeight
var TitleTextSize
var TrackWidth
var TrackHeight
var TSubContainerHeight;

var ClickedId
var TIheight
var TrackViewerHeight
var DLheight

var ImgPresent = "1";

var Country
var TrackName
var NumberofCorners
var MyHotLapTime
var TrackDescription

function ContainerScale() {

  //Calculates the container width
  ContainerWidth = window.getComputedStyle(document.getElementById("TrackInformationContainer1"), null).getPropertyValue("width");
  ContainerWidth = ContainerWidth.replace('px', '');

  //Work out margin for left and right of the container
  document.getElementById("TrackInformationContainer1").style.marginRight =  Margin + "px";
  document.getElementById("TrackInformationContainer1").style.marginLeft =  Margin + "px";

  //Checks if the container and body width are the same
  if (BodyWidth == ContainerWidth){
    //Checks if the container is less than a particular width and sets values accordingly
    if(ContainerWidth <= 7*px_per_cm) {
      TitleContainerHeight = (ContainerWidth*(45.3438/287));
    }
    else {
      TitleContainerHeight = px_per_cm*1.2;
    }
  } else {//Set height of title container if statement is false
    TitleContainerHeight = (ContainerWidth*0.05);
  }

  //Set the height of the title
  document.getElementById("TrackInformationTitle1").style.height = (TitleContainerHeight*(2/3)) + "px";

  //Set the paddingTop of the title
  document.getElementById("TrackInformationTitle1").style.paddingTop = (TitleContainerHeight*(7/60)) + "px";

  //Set the paddingBottom of the title
  document.getElementById("TrackInformationTitle1").style.paddingBottom = (TitleContainerHeight*(13/60)) + "px";

  // Work out the height of the Title text
  TitleTextSize = (TitleContainerHeight*(2/3));
  document.getElementById("TrackInformationTitle1").style.fontSize = TitleTextSize + "px";

  //Calculates the height of the track choice images
  TrackWidth = window.getComputedStyle(document.getElementById("Track1"), null).getPropertyValue("width");
  TrackWidth = TrackWidth.replace("px", "");
  TrackHeight = (TrackWidth*(784/1280));

  //Sets the height of the tract choice images
  document.getElementById("Track1").style.height = TrackHeight + "px";
  document.getElementById("Track2").style.height = TrackHeight + "px";
  document.getElementById("Track3").style.height = TrackHeight + "px";
  document.getElementById("Track4").style.height = TrackHeight + "px";
  document.getElementById("Track5").style.height = TrackHeight + "px";
  document.getElementById("Track6").style.height = TrackHeight + "px";
  document.getElementById("Track7").style.height = TrackHeight + "px";
  document.getElementById("Track8").style.height = TrackHeight + "px";
  document.getElementById("Track9").style.height = TrackHeight + "px";

  //Checks what the value of the variable is and sets the heights and transitions of the video and VP containers accordingly
  if (ImgPresent === "1") {

    document.getElementById("TIContainer1").style.transition = "max-height 0s ease 0s";
    document.getElementById("TIContainer1").style.height = "0px";

    document.getElementById("TracksContainer1").style.transition = "max-height 0s ease 0s";
    TSubContainerHeight = window.getComputedStyle(document.getElementById("TracksSubContainer1"), null).getPropertyValue("height");
    TSubContainerHeight = TSubContainerHeight.replace("px", "");
    TSubContainerHeight = (+TSubContainerHeight + 6);
    document.getElementById("TracksContainer1").style.maxHeight = TSubContainerHeight + "px";

  } else {

    TrackViewerHeight = window.getComputedStyle(document.getElementById("TrackViewer1"), null).getPropertyValue("height");
    TrackViewerHeight = TrackViewerHeight.replace("px", "");

    DLheight = window.getComputedStyle(document.getElementById("TrackInfoList1"), null).getPropertyValue("height");
    DLheight = DLheight.replace("px", "");

    document.getElementById("TIContainer1").style.transition = "max-height 0s ease 0s";
    document.getElementById("TIContainer1").style.height = (+DLheight + +TrackViewerHeight) + "px";

    document.getElementById("TracksContainer1").style.transition = "max-height 0s ease 0s";
    document.getElementById("TracksContainer1").style.maxHeight = "6px";

  }

};

//Sets various container heights and transitions when a track choice image is clicked
function ImgChange(id) {
  ImgPresent = "2"
  document.getElementById("TracksContainer1").style.transition = "max-height 0.5s ease 0s";
  document.getElementById("TracksContainer1").style.maxHeight = "6px";

  // Gets the id of the track choice image that was clicked
  ClickedId = (id).getAttribute("id");

  // Determines what the source of the image is, depending on what video image was clicked, and sets the relevant information in the definition list
  // Formula1.com. (c2016). FIA Formula One World Championship Race Calendar [Online image]. Retrieved 27 April 2016, from https://www.formula1.com/content/fom-website/en/championship/races/2016.html
  switch (ClickedId) {
    case "Track1":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/1 - Australia.png";
    Country = "Australia";
    TrackName = "Melbourne Grand Prix Circuit";
    NumberofCorners = "16";
    MyHotLapTime = "01:25.317";
    TrackDescription = "The Melbourne Grand Prix Circuit is a fast flowing circuit with narrow sections of track and grassy run off areas, which punish those who put a wheel off the track. This track requires a car with fairly low rear downforce, to reduce the amount of time lost on the fairly long straight sections, and positive front end with a bit of front wing to help carry more speed through the fast corners. Traction is not such an issue on this track.";
    break;
    case "Track2":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/2 - Malaysia.png";
    Country = "Malaysia";
    TrackName = "Sepang International Circuit";
    NumberofCorners = "15";
    MyHotLapTime = "01:36.527";
    TrackDescription = "The Sepang International Circuit is a circuit which requires good traction, because of its stop start nature. Fairly low downforce is needed for this track and the downforce between front and rear should be fairly balanced. Care must be taken when creating a setup, to make sure the car does not have much understeer, as there a few fast corners where a lot of time can be lost.";
    break;
    case "Track3":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/3 - China.png";
    Country = "China";
    TrackName = "Shanghai International Circuit";
    NumberofCorners = "16";
    MyHotLapTime = "01:36.110";
    TrackDescription = "The Shanghai International Circuit is a circuit which requires a car with good corner exit traction. A small amount of oversteer can help greatly in turns 3-4 and 12-13 as this will reduce the time taken to get the car turned, allowing you to apply full throttle as early as pssible. Low downforce is also required, as there is a very long straight at this circuit.";
    break;
    case "Track4":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/4 - Bahrain.png";
    Country = "Bahrain";
    TrackName = "Bahrain International Circuit";
    NumberofCorners = "15";
    MyHotLapTime = "01:31.022";
    TrackDescription = "The Bahrain International Circuit is a circuit which requires a positive front end, to help carry as much speed through the medium speed corners of this track as possible. A positive front end also help make the car more agile for the quick changes of direction that need to be made in sector 2. Trail braking can really help some corners, as this will help to get the car turned in, if the car is runningrelatively low downforce (which I recommend).";
    break;
    case "Track5":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/5 - Spain.png";
    Country = "Spain";
    TrackName = "Circuit de Barcelona-Catalunya";
    NumberofCorners = "16";
    MyHotLapTime = "01:21.379";
    TrackDescription = 'The Circuit de Barcelona-Catalunya is a Circuit, which requires good "turn in" at all speeds of corners and generally a good all round setup. The first couple of corners are long and fast and care should be taken during turn 3 with throttle application. Patience is key here at this corner. Turn 7 can also be a tricky corner because the camber of the track changes and can cause the car to oversteer if throttle application and turning are too aggresive.';
    break;
    case "Track6":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/6 - Monaco.png";
    Country = "Monaco";
    TrackName = "Circuit de Monaco";
    NumberofCorners = "19";
    MyHotLapTime = "01:15.106";
    TrackDescription = "The Circuit de Monaco is a very narrow circuit with barriers sitting very close to the track, meaning that the track barely has any run off areas. A fairly high downforce set up is required to maximise the speed in the slow to medium speed corners that this track has. A high level of downforce also helps with traction at this track, as there are many corners where you'll be exiting in 2nd or 3rd gear. Confidence is key to producing the best time at this track.";
    break;
    case "Track7":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/7 - Canada.png";
    Country = "Canada";
    TrackName = "Circuit Gilles-Villeneuve";
    NumberofCorners = "14";
    MyHotLapTime = "01:12.771";
    TrackDescription = 'The Circuit Gilles-Villeneuve is a quick circuit which requires a low rear downforce setup, and a positive front end to help carry as much speed in to the medium to high speed corners as possible. The majority of corners are this circuit are fast and require you to be patient on the throttle. The use of kerbs on this track is very important, as this will help you to take the multiple "S bends" as straight as possible.';
    break;
    case "Track8":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/8 - Austria.png";
    Country = "Austria";
    TrackName = "Red Bull Ring";
    NumberofCorners = "9";
    MyHotLapTime = "01:07.277";
    TrackDescription = "The Red Bull Ring is a relatively short circuit with only 9 corners. The beginning of the lap has a medium speed corner, followed by a very slow 2nd gear corner that requires heavy braking. The rest of the track gets faster and faster from there, with the 2nd to last corner being taken in 6th gear. Low rear downforce and a positive front end are really needed here.There should be some consideration for turn 2 though as you will be pressing the brakes hard leading up to this corner, and you will lose a lot of time if the car isn't very balanced." ;
    break;
    case "Track9":
    document.getElementById("TrackViewer1").src = "F1 Images/Track Information/Tracks/9 - United Kingdom.png";
    Country = "United Kingdom";
    TrackName = "Silverstone Circuit";
    NumberofCorners = "18";
    MyHotLapTime = "01:32.674";
    TrackDescription = "The Silverstone Circuit is fairly long circuit where an agile car really helps. The track is fairly wide and has a lot of fast corners. The car setup shouldn't have a lot of downforce in general, as there are a lot of medium to long straights on this track, but a slightly positive front will help you to maintain a lot of speed through the fast corners. A good car balance is important though, as the end of Sector 3 and the start of Sector 1 have a couple of heavy braking corners, where car stability is key.";
    break;
  }

  // Sets the information in the definition list
  document.getElementById("TrackInfo1").innerHTML = Country;
  document.getElementById("TrackInfo2").innerHTML = TrackName;
  document.getElementById("TrackInfo3").innerHTML = NumberofCorners;
  document.getElementById("TrackInfo4").innerHTML = MyHotLapTime;
  document.getElementById("TrackInfo5").innerHTML = TrackDescription;

  TrackViewerHeight = window.getComputedStyle(document.getElementById("TrackViewer1"), null).getPropertyValue("height");
  TrackViewerHeight = TrackViewerHeight.replace("px", "");

  DLheight = window.getComputedStyle(document.getElementById("TrackInfoList1"), null).getPropertyValue("height");
  DLheight = DLheight.replace("px", "");

  document.getElementById("TIContainer1").style.transition = "height 0.5s ease 0.5s";
  document.getElementById("TIContainer1").style.height = (+DLheight + +TrackViewerHeight) + "px";

}

// Sets various height and transition properties of the content containers when the close button is clicked
function CBclick() {
  ImgPresent = "1"
  document.getElementById("TracksContainer1").style.transition = "max-height 0.5s ease 0.5s";
  TSubContainerHeight = window.getComputedStyle(document.getElementById("TracksSubContainer1"), null).getPropertyValue("height");
  TSubContainerHeight = TSubContainerHeight.replace("px", "");
  TSubContainerHeight = (+TSubContainerHeight + 6);
  document.getElementById("TracksContainer1").style.maxHeight = TSubContainerHeight + "px";

  document.getElementById("TIContainer1").style.transition = "height 0.5s ease 0s";
  document.getElementById("TIContainer1").style.height = "0px";
}

//Calls the ContainerScale function when the web page loads or if the browser window is resized
window.addEventListener("load", ContainerScale);
window.addEventListener("resize", ContainerScale);
