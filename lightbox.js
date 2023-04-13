function includePopupHTML(){
    let html = '<div id="vis-popup"><span id="close" onclick="closePopUp()"><img id="npop" src="lightbox/img2/imagecross.png.jpg" alt=""></span><img id="leftarrow" src="lightbox/img2/imageleft.png.png" alt=""><img id="rightarrow" src="lightbox/img2/imagesright.png.png" alt=""><img id="mainPopImage" src="img1/photo1.jpg.avif" alt=""></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv, document.body.firstChild);
}
let img;
let current;
//funtion to init pluging 
function imagePopupInit(target){

    //select all images with class

   img = document.getElementsByClassName(target);

  // add eventlistner all selected images

  for(var i = 0; i < img.length; i++){
     // add pointer
     img[i].style.cursor = 'pointer';

     img[i].addEventListener("click",function(){
        document.getElementById("mainPopImage").src = this.src;
        document.getElementById("vis-popup").style.display = 'block';
        checkArrow();
     });
  }

    includePopupHTML();


//next button
document.getElementById('rightarrow').addEventListener('click',function(){
    nextimg();
});


//prev button

document.getElementById('leftarrow').addEventListener('click',function(){
    previmg();
});

}
//close button

function closePopUp(){
    document.getElementById("mainPopImage").src = "";
    document.getElementById("vis-popup").style.display = 'none';
}

//next image
function nextimg(){
    getCurrentImage();
    current++;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}

// prev image
function previmg(){
    getCurrentImage();
    current--;
    document.getElementById("mainPopImage").src = img[current].src;
    checkArrow();
}

function getCurrentImage(){
    for(var i = 0; i < img.length; i++){
        if(img[i].src == document.getElementById("mainPopImage").src){
          current = i;
        }
    }
}


function checkArrow(){

    getCurrentImage();
    if(current == "0"){
      document.getElementById('leftarrow').style.display = 'none';
      document.getElementById('rightarrow').style.display = 'block';

    }
    else if(current == img.length - 1){
        document.getElementById('rightarrow').style.display = 'none';
        document.getElementById('leftarrow').style.display = 'block';
    }
    else{
        document.getElementById('leftarrow').style.display = 'block';
        document.getElementById('rightarrow').style.display = 'block';
    }
}