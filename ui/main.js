console.log('Loaded!');
var img1 = document.getElementById('img1');
var marginLeft = 0;
function moveRight(){
   marginLeft = marginLeft+10;
   img1.style.marginLeft = marginLeft+'px';
};
var counter = 0;
var button = document.getElementById('counter');
button.onclick = function(){
    //make a request to counter endpoint
    
    //capture the response and store it in a variable
    
    //render the variable in the span for showing count
    counter = counter+1;
    var countSpan = document.getElementbyId("count");
    countSpan.innerHTML = counter.toString();
}