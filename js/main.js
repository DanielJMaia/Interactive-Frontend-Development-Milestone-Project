   const baseURL = "https://api.magicthegathering.io/"
   
   function getData(type, cb) {
       var request = new XMLHttpRequest();
       
       request.open("GET", baseURL + type);
       request.send();

       request.onreadystatechange = function() {
           if (this.readyState == 4 && this.status == 200) {
               cb(JSON.parse(this.responseText));
           }
       };
   }
   
   function writeIdToDocument(type) {
       getData(type, function(data) {
           console.dir(data);
           document.getElementById("data").innerHTML += data.card.artist;
       });
   }
   
   function writeNameToDocument(type) {
       getData(type, function(data) {
           console.dir(data);
           document.getElementById("data").innerHTML += data.cards[0].cmc;
       });
   }
   
   
  
   function grabId(){
       // This line retrieves the value of the user input i.e. the card ID and prints it to console for debugging
       var idValue = document.getElementById("cardId").value;
       console.log(idValue);
       document.getElementById("buttonId").onclick = writeIdToDocument`('v1/cards/${idValue}')`;
     
   }
   
   
  
   