console.log('Loaded!');
var img1 = document.getElementById('img1');
var marginLeft = 0;
function moveRight(){
   marginLeft = marginLeft+10;
   img1.style.marginLeft = marginLeft+'px';
};

var button = document.getElementById('counter');
button.onclick = function(){
    //make a request to counter endpoint
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readystate==XMLHttpRequest.DONE && request.status==200){
            var counter = request.responseText;
            var countSpan = document.getElementById('count');
    countSpan.innerHTML = counter.toString();
        }
    }
   request.open('GET','http://rijusiddique.imad.hasura-app.io/counter', true);
    request.send(null);
    
}