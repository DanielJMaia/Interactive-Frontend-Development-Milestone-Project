var cars = 'Saab,Volvo,BMW,GMC,Nissan,Ford'.split(',');
for (var c in cars) {
    var newElement = document.createElement('div');
    newElement.id = cars[c]; newElement.className = "car";
    newElement.innerHTML = cars[c];
    document.body.appendChild(newElement);
}


///////////////////////////


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


      // Clearing the innerHTML of new results so that they don't keep adding on when a new card is inputted
      var innerId = document.getElementById("cardTitle");
      var innerId1 = document.getElementById("cardType");
      var innerId2 = document.getElementById("cardCost");
      var innerId3 = document.getElementById("cardText");
      var innerId4 = document.getElementById("cardFlavour");
      var innerId5 = document.getElementById("cardRarity");
      var innerId6 = document.getElementById("cardPower");
      var innerId7 = document.getElementById("cardArtist");
      var innerId8 = document.getElementById("cardSet");
      var innerId9 = document.getElementById("cardImage");

      innerId.innerHTML = `<img src="images/loader.gif">`;
      innerId1.innerHTML = "";
      innerId2.innerHTML = "";
      innerId3.innerHTML = "";
      innerId4.innerHTML = "";
      innerId5.innerHTML = "";
      innerId6.innerHTML = "";
      innerId7.innerHTML = "";
      innerId8.innerHTML = "";
      innerId9.src = "images/loader.gif";

      // Filling the card data

      getData(type, function(data) {
         console.dir(data);
         document.getElementById("cardImage").style.visibility = "visible";
         document.getElementById("cardMain").style.visibility = "visible";
         var i = 0;
         var string = "";
         for (i = 0; i < 100; i++) {
            document.getElementById("cardTitle").innerHTML = data.cards[i].name;
            document.getElementById("cardType").innerHTML += "Type: " + data.cards[i].originalType;
            document.getElementById("cardCost").innerHTML += "Cost: " + data.cards[i].manaCost;
            document.getElementById("cardText").innerHTML += "Card Text: " + data.cards[i].text;
            document.getElementById("cardFlavour").innerHTML += "Flavour Text: " + data.cards[i].flavor;
            document.getElementById("cardRarity").innerHTML += "Rarity: " + data.cards[i].rarity;
            document.getElementById("cardPower").innerHTML += "P/T: " + data.cards[i].power + " / " + data.cards[i].toughness;
            document.getElementById("cardArtist").innerHTML += "Artist: " + data.cards[i].artist;
            document.getElementById("cardSet").innerHTML += "Set Name: " + data.cards[i].setName;
            document.getElementById("cardImage").src = data.cards[i].imageUrl;
         }

      });
   }
   