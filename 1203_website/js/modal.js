var img = document.createElement("img");

function closeModal(){
  document.getElementById('my_modal').style.display="none";
  document.getElementById('my_modal').removeChild(img);
}

function loadImg(imagePth){
  document.getElementById('my_modal').style.display="block";

  //var btn = document.createElement("button");
  //document.getElementById('my_modal').appendChild(btn);
  //btn.innerText="click me"


  document.getElementById('project_page').appendChild(img);

  img.src=imagePth;
  img.style.position = "fixed";
  img.style.top = "0";
  img.style.left = "0";

}
