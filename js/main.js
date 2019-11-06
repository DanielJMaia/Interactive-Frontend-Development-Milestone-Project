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
      // Getting the card data
      getData(type, function(data) {
         console.dir(data);
         
         for (var i = 0; i <= data.cards.length; i++) {
            // Creating the Divs

            var cardRow = document.createElement("div");
            cardRow.setAttribute("class", "row");

            var imageDiv = document.createElement("div");
            imageDiv.setAttribute("class", "col-6 image");
            imageDiv.setAttribute("align", "right");

            var imageSrc = document.createElement("img");
            imageSrc.setAttribute("class", "img-fluid");
            imageSrc.setAttribute("id", "cardImage" + i);
            imageSrc.setAttribute("src", "");
            imageSrc.setAttribute("alt", "Card Image Not Available");

            var card = document.createElement("div");
            card.setAttribute("class", "col-6 card");
            card.setAttribute("id", "cardMain" + i);
            card.setAttribute("style", "width: 18rem;");

            var body = document.createElement("div");
            body.setAttribute("class", "card-body");

            var header = document.createElement("h5");
            header.setAttribute("class", "card-title");
            header.setAttribute("id", "cardTitle" + i);

            var paragraphType = document.createElement("p");
            paragraphType.setAttribute("class", "card-text");
            paragraphType.setAttribute("id", "cardType" + i);

            var paragraphCost = document.createElement("p");
            paragraphCost.setAttribute("class", "card-text");
            paragraphCost.setAttribute("id", "cardCost" + i);

            var paragraphText = document.createElement("p");
            paragraphText.setAttribute("class", "card-text");
            paragraphText.setAttribute("id", "cardText" + i);

            var paragraphFlavour = document.createElement("p");
            paragraphFlavour.setAttribute("class", "card-text");
            paragraphFlavour.setAttribute("id", "cardFlavour" + i);

            var paragraphRarity = document.createElement("p");
            paragraphRarity.setAttribute("class", "card-text");
            paragraphRarity.setAttribute("id", "cardRarity" + i);

            var paragraphPower = document.createElement("p");
            paragraphPower.setAttribute("class", "card-text");
            paragraphPower.setAttribute("id", "cardPower" + i);

            var paragraphArtist = document.createElement("p");
            paragraphArtist.setAttribute("class", "card-text");
            paragraphArtist.setAttribute("id", "cardArtist" + i);

            var paragraphSet = document.createElement("p");
            paragraphSet.setAttribute("class", "card-text");
            paragraphSet.setAttribute("id", "cardSet" + i);

            imageDiv.appendChild(imageSrc);
            body.appendChild(header);
            body.appendChild(paragraphType);
            body.appendChild(paragraphCost);
            body.appendChild(paragraphText);
            body.appendChild(paragraphFlavour);
            body.appendChild(paragraphRarity);
            body.appendChild(paragraphPower);
            body.appendChild(paragraphArtist);
            body.appendChild(paragraphSet);
            card.appendChild(body);

            cardRow.appendChild(imageDiv);
            cardRow.appendChild(card);

            document.getElementById("cardData").appendChild(cardRow);
            
            // Clearing the innerHTML of new results so that they don't keep adding on when a new card is inputted
            var innerId = document.getElementById("cardTitle" + i);
            var innerId1 = document.getElementById("cardType" + i);
            var innerId2 = document.getElementById("cardCost" + i);
            var innerId3 = document.getElementById("cardText" + i);
            var innerId4 = document.getElementById("cardFlavour" + i);
            var innerId5 = document.getElementById("cardRarity" + i);
            var innerId6 = document.getElementById("cardPower" + i);
            var innerId7 = document.getElementById("cardArtist" + i);
            var innerId8 = document.getElementById("cardSet" + i);
            var innerId9 = document.getElementById("cardImage" + i);

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

           // Filling up the respecting Div with the data

            document.getElementById("cardTitle" + i).innerHTML = data.cards[i].name;
            document.getElementById("cardType" + i).innerHTML += "Type: " + data.cards[i].originalType;
            document.getElementById("cardCost" + i).innerHTML += "Cost: " + data.cards[i].manaCost;
            document.getElementById("cardText" + i).innerHTML += "Card Text: " + data.cards[i].text;
            document.getElementById("cardFlavour" + i).innerHTML += "Flavour Text: " + data.cards[i].flavor;
            document.getElementById("cardRarity" + i).innerHTML += "Rarity: " + data.cards[i].rarity;
            document.getElementById("cardPower" + i).innerHTML += "P/T: " + data.cards[i].power + " / " + data.cards[i].toughness;
            document.getElementById("cardArtist" + i).innerHTML += "Artist: " + data.cards[i].artist;
            document.getElementById("cardSet" + i).innerHTML += "Set Name: " + data.cards[i].setName;
            document.getElementById("cardImage" + i).src = data.cards[i].imageUrl;
         }

      });
   }
