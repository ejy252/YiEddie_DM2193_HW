var img = document.createElement("img");
var vid = document.createElement("VIDEO");
var last_img = true;
function closeModal(){
  document.getElementById('project_title').remove();
  document.getElementById('project_caption').remove();
  document.getElementById('my_modal').style.display="none";
}

function loadImg(imagePth, title, portrait,caption){
  document.getElementById('my_modal').style.display="block";

  //var btn = document.createElement("button");
  //document.getElementById('my_modal').appendChild(btn);
  //btn.innerText="click me"


  document.getElementById('project_img').appendChild(img);

  img.src=imagePth;
  img.style.top = "0";
  img.style.left = "0";
  if (portrait){
    img.style.width = "100%";
    img.style.height = "auto";
  }
  else{
    img.style.height = "300px";
    img.style.width = "auto";
  }
  var description = document.getElementById("modal_description");
  description.insertAdjacentHTML("afterbegin", ("<h3 id='project_title'>"+title+"</h3>"));
  description.insertAdjacentHTML("beforeend", ("<p id='project_caption'>"+caption+"</p>"));
  var last_img = true;
}

function closeVideoModal(){
  document.getElementById('project_title').remove();
  document.getElementById('project_caption').remove();
  document.getElementById('my_video_modal').style.display="none";
}
function loadVid(vidPth, title, portrait, caption){
  document.getElementById('my_video_modal').style.display="block";

  //var btn = document.createElement("button");
  //document.getElementById('my_modal').appendChild(btn);
  //btn.innerText="click me"


  document.getElementById('project_video').appendChild(vid);

  vid.src=vidPth;
  vid.style.top = "0";
  vid.style.left = "0";
  vid.controls = true;
  if (portrait){
    vid.style.width = "100%";
    vid.style.height= "auto";
  }
  else{
    vid.style.height = "300px";
    vid.style.width = "auto";
  }
  var description = document.getElementById("video_description");
  description.insertAdjacentHTML("afterbegin", ("<h3 id='project_title'>"+title+"</h3>"));
  description.insertAdjacentHTML("beforeend", ("<p id='project_caption'>"+caption+"</p>"));
  var last_img = false;
}
