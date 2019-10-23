   const baseURL = "https://api.magicthegathering.io/"
   
   function getData(type, cb) {
       var xhr = new XMLHttpRequest();
       
       xhr.open("GET", baseURL + type);
       xhr.send();

       xhr.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               cb(JSON.parse(this.responseText));
           }
       };
   }
   
   function writeIdToDocument(type) {
       getData(type, function(data) {
           console.dir(data);
           document.getElementById("data").innerHTML = data.card.artist;
       });
   }
   
   function writeNameToDocument(type) {
       getData(type, function(data) {
           console.dir(data);
           document.getElementById("data").innerHTML = data.cards[0].cmc;
       });
   }