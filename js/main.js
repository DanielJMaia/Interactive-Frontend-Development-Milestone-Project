   //Get Data From API //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

   //Generate Table Headers //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   function getTableHeaders(obj) {
      var tableHeaders = [];

      Object.keys(obj).forEach(function(key) {
         tableHeaders.push(`<td>${key}</td>`);
      });

      return `<tr>${tableHeaders}</tr>`;
   }

   //Retrieval Functions //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   function grabName() {
      var nameValue = document.getElementById("cardName").value;
      console.log(nameValue);
      writeNameToDocument(`v1/cards?name=${nameValue}`);
   }

   function writeNameToDocument(type) {
      var el = document.getElementById("dataName");
      el.innerHTML = "";
      
      getData(type, function(data) {
         console.dir(data);

         var i = 0;
         for (i = 0; i < 10; i++) {
            document.getElementById("dataName").innerHTML += "<p>" + data.cards[i].name + "</p>";
            document.getElementById("dataName").innerHTML += "<p>" + data.cards[i].artist + "</p>";
            document.getElementById("dataName").innerHTML += "<p>" + data.cards[i].manaCost + "</p>";
            document.getElementById("dataName").innerHTML += "<p>" + data.cards[i].originalText + "</p><br>";
         }

      });
   }



   function grabType() {
      var typeValue = document.getElementById("cardType").value;
      console.log(typeValue);
      writeTypeToDocument(`v1/cards?types=${typeValue}`);
   }

   function writeTypeToDocument(type) {
      var el = document.getElementById("dataType");
      el.innerHTML = "";
      getData(type, function(data) {
         console.dir(data);

         var i = 0;
         for (i = 0; i < 10; i++) {
            document.getElementById("dataType").innerHTML += "<p>" + data.cards[i].name + "</p>";
            document.getElementById("dataType").innerHTML += "<p>" + data.cards[i].artist + "</p>";
            document.getElementById("dataType").innerHTML += "<p>" + data.cards[i].manaCost + "</p>";
            document.getElementById("dataType").innerHTML += "<p>" + data.cards[i].originalText + "</p><br>";
         }

      });
   }
   
   
   
   function grabId() {
      // This line retrieves the value of the user input i.e. the card ID and prints it to console for debugging
      var idValue = document.getElementById("cardId").value;
      console.log(idValue);
      writeIdToDocument(`v1/cards/${idValue}`);
   }

   function writeIdToDocument(type) {
      var el = document.getElementById("dataId");
      el.innerHTML = "";
      getData(type, function(data) {
         console.dir(data);
         document.getElementById("dataId").innerHTML += "<p>" + data.card.name + "</p>";
      });
   }