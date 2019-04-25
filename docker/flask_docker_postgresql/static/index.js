window.onload = init;

function init(){
  console.log("javascript ready");
  var pic = document.getElementById("interactivePicture")
  var button = document.getElementById("pic");
  button.click(function(){
    console.log("clicked");
  });
  
  pic.addEventListener("click", addInteractive);
}

function addInteractive(e){
  
  console.log(e.target);
  e.target.idList.add("backgroundImage");
}
