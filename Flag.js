var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
var req;
request.onload=function(){
    var req = JSON.parse(request.response);
    console.log(req);

    for(var i=0;i<=req.length;i++){
        console.log(req[i].flags)
     }
}