   //Get Data From API //

   const baseURL = "https://api.magicthegathering.io/";

   var enterClick = document.getElementById("cardName");
   enterClick.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
         event.preventDefault();
         grabName();
         clearChildrenFunction();
         document.getElementById("loader").style.display = "block";
      }
   });

   function grabName() {
      var nameValue = document.getElementById("cardName").value;
      console.log(nameValue);
      writeNameToDocument(`v1/cards?name=${nameValue}`);
   }

   function clearChildrenFunction() {
      const mainParent = document.getElementById("cardData");
      while (mainParent.firstChild) {
         mainParent.removeChild(mainParent.firstChild);
         mainParent.style.display = "none";
      }

      const dataParent = document.getElementById("cardData1");
      while (dataParent.firstChild) {
         dataParent.removeChild(dataParent.firstChild);
      }
   }

   function noDataFunction() {
      console.log("No matches");
      document.getElementById("loader").style.display = "none";
      document.getElementById("noResults").style.display = "block";
   }

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

   function writeNameToDocument(type) {
      // Retrieving the card data
      getData(type, function(data) {
         console.dir(data);
         if (data.cards.length === 0) {
            noDataFunction();
         }
         else {
            document.getElementById("noResults").style.display = "none";


            for (var i = 0; i <= data.cards.length - 1; i++) {

               var cardRow = document.createElement("div");
               cardRow.setAttribute("class", "row justify-content-center cardRowClass");
               cardRow.setAttribute("id", "cardRowId" + i);
               cardRow.setAttribute("align", "center");

               var imageDiv = document.createElement("div");
               imageDiv.setAttribute("class", "col-lg-6 col-sm-12");
               imageDiv.setAttribute("align", "center");

               var imageSrc = document.createElement("img");
               imageSrc.setAttribute("class", "img-fluid imgClass");
               imageSrc.setAttribute("id", "cardImage" + i);
               imageSrc.setAttribute("src", "");
               imageSrc.setAttribute("alt", "Card Image Not Available");

               var card = document.createElement("div");
               card.setAttribute("class", "col-md-6 col-sm-12");
               card.setAttribute("id", "cardMain" + i);
               card.setAttribute("align", "left");

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
               paragraphSet.setAttribute("class", "card-text noBorder");
               paragraphSet.setAttribute("id", "cardSet" + i);

               imageDiv.appendChild(imageSrc);
               body.append(header, paragraphType, paragraphCost, paragraphText, paragraphFlavour, paragraphRarity, paragraphPower, paragraphArtist, paragraphSet);
               card.appendChild(body);

               cardRow.appendChild(imageDiv);
               cardRow.appendChild(card);

               document.getElementById("cardData1").appendChild(cardRow);

               // Filling up the respecting Div with the data
               document.getElementById("cardTitle" + i).innerHTML = data.cards[i].name;
               document.getElementById("cardType" + i).innerHTML += "Type: " + data.cards[i].type;
               document.getElementById("cardCost" + i).innerHTML += "Cost: " + data.cards[i].manaCost;
               if (data.cards[i].text === undefined) { document.getElementById("cardText" + i).innerHTML += "This card has no descriptive text"; }
               else {
                  document.getElementById("cardText" + i).innerHTML += "Card Text: " + data.cards[i].text;
               }
               if (data.cards[i].flavor === undefined) { document.getElementById("cardFlavour" + i).innerHTML += "This card has no flavour text"; }
               else {
                  document.getElementById("cardFlavour" + i).innerHTML += "Flavour Text: " + data.cards[i].flavor;
               }
               document.getElementById("cardRarity" + i).innerHTML += "Rarity: " + data.cards[i].rarity;
               if (data.cards[i].power === undefined) { document.getElementById("cardPower" + i).innerHTML += "This card has no power and toughness values"; }
               else {
                  document.getElementById("cardPower" + i).innerHTML += "P/T: " + data.cards[i].power + " / " + data.cards[i].toughness;
               }
               document.getElementById("cardArtist" + i).innerHTML += "Artist: " + data.cards[i].artist;
               document.getElementById("cardSet" + i).innerHTML += "Set Name: " + data.cards[i].setName;
               if (data.cards[i].imageUrl === undefined) {
                  document.getElementById("cardImage" + i).src = "images/magicCardBack.jpg";
               }
               else {
                  document.getElementById("cardImage" + i).src = data.cards[i].imageUrl;
               }

               document.getElementById("pagination").style.display = "flex";
               document.getElementById("loader").style.display = "none";
            }
         }
      });
   }
   