console.log('Loaded!');
var img1 = document.getElementById('img1');
var marginLeft = 0;
function moveRight(){
   marginLeft = marginLeft+10;
   img1.style.marginLeft = marginLeft+'px';
};
img1.onclick=function(){
    alert("moving image");
    var interval = setInterval(moveRight,100);
};