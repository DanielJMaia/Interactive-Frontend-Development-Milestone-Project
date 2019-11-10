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



         //Removing all child elements

         const mainParent = document.getElementById("cardData");
         while (mainParent.firstChild) {
            mainParent.removeChild(mainParent.firstChild);
            mainParent.style.display = "none";
         }

         const dataParent = document.getElementById("cardData1");
         while (dataParent.firstChild) {
            dataParent.removeChild(dataParent.firstChild);
         }


         // No results
         if (data.cards.length === 0) {
            console.log("No matches");
            
            document.getElementById("noResults").style.display = "block";
         }

         else {
            document.getElementById("noResults").style.display = "none";
            // beginning of for loop
            for (var i = 0; i <= data.cards.length - 1; i++) {

               // removes all results without an image
               if (data.cards[i].imageUrl === undefined) { continue; }

               // No results

               // Creating the Divs

               var cardRow = document.createElement("div");
               cardRow.setAttribute("class", "row justify-content-center");
               cardRow.setAttribute("id", "cardRowId");
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

               document.getElementById("cardData1").appendChild(cardRow);

               // Clearing the innerHTML of new results so that they don't keep adding on when a new card is inputted


               //            var innerId = document.getElementById("cardTitle" + i);
               //            var innerId1 = document.getElementById("cardType" + i);
               //            var innerId2 = document.getElementById("cardCost" + i);
               //            var innerId3 = document.getElementById("cardText" + i);
               //            var innerId4 = document.getElementById("cardFlavour" + i);
               //            var innerId5 = document.getElementById("cardRarity" + i);
               //            var innerId6 = document.getElementById("cardPower" + i);
               //            var innerId7 = document.getElementById("cardArtist" + i);
               //            var innerId8 = document.getElementById("cardSet" + i);
               //            var innerId9 = document.getElementById("cardImage" + i);

               //            innerId.innerHTML = `<img src="images/loader.gif">`;
               //            innerId1.innerHTML = "";
               //            innerId2.innerHTML = "";
               //            innerId3.innerHTML = "";
               //            innerId4.innerHTML = "";
               //            innerId5.innerHTML = "";
               //            innerId6.innerHTML = "";
               //            innerId7.innerHTML = "";
               //            innerId8.innerHTML = "";
               //            innerId9.src = "images/loader.gif";

               // Filling up the respecting Div with the data
               document.getElementById("cardTitle" + i).innerHTML = data.cards[i].name;
               document.getElementById("cardType" + i).innerHTML += "Type: " + data.cards[i].originalType;
               document.getElementById("cardCost" + i).innerHTML += "Cost: " + data.cards[i].manaCost;
               if (data.cards[i].text === undefined) {document.getElementById("cardText" + i).innerHTML += "This card has no descriptive text";}
               else {
               document.getElementById("cardText" + i).innerHTML += "Card Text: " + data.cards[i].text;
               }
               if (data.cards[i].flavor === undefined) {document.getElementById("cardFlavour" + i).innerHTML += "This card has no flavour text";}
               else {
               document.getElementById("cardFlavour" + i).innerHTML += "Flavour Text: " + data.cards[i].flavor;
               }
               document.getElementById("cardRarity" + i).innerHTML += "Rarity: " + data.cards[i].rarity;
               if (data.cards[i].power === undefined) {document.getElementById("cardPower" + i).innerHTML += "This card has no power and toughness values";}
               else {
               document.getElementById("cardPower" + i).innerHTML += "P/T: " + data.cards[i].power + " / " + data.cards[i].toughness;
               }
               document.getElementById("cardArtist" + i).innerHTML += "Artist: " + data.cards[i].artist;
               document.getElementById("cardSet" + i).innerHTML += "Set Name: " + data.cards[i].setName;
               document.getElementById("cardImage" + i).src = data.cards[i].imageUrl;
            }
         }

      });
      
      
   }
   