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

   //Trigger grabname() on enter click/////////////////////////////////////////////////////////////////////////////////////////////////////////

   var enterClick = document.getElementById("cardName");
   enterClick.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
         event.preventDefault();
         grabName();
      }
   });

   //Retrieval Functions //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


    //     var i = 0;
    //     for (i = 0; i < 100; i++) {
            document.getElementById("cardTitle").innerHTML +=data.cards[0].name;
            document.getElementById("cardType").innerHTML +="Type: " + data.cards[0].originalType;
            document.getElementById("cardCost").innerHTML +="Cost: " + data.cards[0].manaCost;
            document.getElementById("cardText").innerHTML +="Card Text: " + data.cards[0].text;
            document.getElementById("cardFlavour").innerHTML +="Flavour Text: " + data.cards[0].flavor;
            document.getElementById("cardRarity").innerHTML +="Rarity: " + data.cards[0].rarity;
            document.getElementById("cardPower").innerHTML +="P/T: " + data.cards[0].power + " / " + data.cards[0].toughness;
            document.getElementById("cardArtist").innerHTML +="Artist: " + data.cards[0].artist;
            document.getElementById("cardSet").innerHTML +="Set Name: " + data.cards[0].setName;
  //       }

      });
   }
   