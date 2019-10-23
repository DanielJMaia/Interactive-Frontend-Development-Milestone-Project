   function getData(type, cb) {
       var xhr = new XMLHttpRequest();
       xhr.open("GET", "https://api.magicthegathering.io/v1/cards/1");
       xhr.send();

       xhr.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               cb(JSON.parse(this.responseText));
           }
       };
   }
   
   function writeToDocument(type) {
       getData(type, function(data) {
           document.getElementById("data").innerHTML = data;
       })
   }