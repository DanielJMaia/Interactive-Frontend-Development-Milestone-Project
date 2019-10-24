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


   //Retrieval Functions

   function grabId() {
       // This line retrieves the value of the user input i.e. the card ID and prints it to console for debugging
       var idValue = document.getElementById("cardId").value;
       console.log(idValue);
       writeIdToDocument(`v1/cards/${idValue}`);
   }

   function writeIdToDocument(type) {
       getData(type, function(data) {
           console.dir(data);

           var i = 0;
           for (i = 0; i < 10; i++) {
               document.getElementById("data").innerHTML += data.card.name;
           }

       });
   }


   function grabName() {
       var nameValue = document.getElementById("cardName").value;
       console.log(nameValue);
       writeNameToDocument(`v1/cards?name=${nameValue}`);
   }

   function writeNameToDocument(type) {
       getData(type, function(data) {
           console.dir(data);

           var i = 0;
           for (i = 0; i < 10; i++) {
               document.getElementById("data").innerHTML += "<p>" + data.cards[i].cmc + "<p>";
           }

       });
   }
   