var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' : {
        title: 'Rijus first web app',
        //heading: 'Article one',
        content: '    <p>    <h1>    This is my first article    </h1></p>    '
    },
     'article-two' : {
        title: 'Rijus second web app',
        //heading: 'Article one',
        content: '    <p>    <h1>    This is my second article    </h1></p>    '
    },
     'article-three' : {
        title: 'Rijus third web app',
        //heading: 'Article one',
        content: '    <p>    <h1>    This is my third article    </h1></p>    '
    }
};
function createTemplate(data){
    var title = data.title;
    var content = data.content;
   var htmltemplate = `<html><head><link href="/"><title>
   ${title}</title> <link href="/ui/style.css" rel="stylesheet">  </head> <body> <div class="container"><p><h1>
   ${content}</h1></div></body></html>`; 
   return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
