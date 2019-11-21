   //Get Data From API //

   const baseURL = "https://api.magicthegathering.io/";
   var pageNumber = 1;

   var enterClick = document.getElementById("cardName");
   enterClick.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
         event.preventDefault();
         grabName();
         clearChildrenFunction();
      }
   });

   document.getElementById("nextClick").addEventListener("click", nextPagination);
   document.getElementById("previousClick").addEventListener("click", previousPagination);
   document.getElementById("randomButton").addEventListener("click", randomCards);
   document.getElementById("additionalFilters").addEventListener("click", showAdditionalFilters);

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

   function showAdditionalFilters() {
      var filterToggle = document.getElementById("additionalSearchQueries");
      if (filterToggle.style.display == "block") {
         filterToggle.style.display = "none";
      }
      else {
         filterToggle.style.display = "block";
      }
   }

   function previousPagination() {
      if (pageNumber == 1) {
         document.body.scrollTop = document.documentElement.scrollTop = 0;
         clearChildrenFunction();
         document.getElementById("loader").style.display = "block";
         grabName();
      }
      else {
         document.body.scrollTop = document.documentElement.scrollTop = 0;
         pageNumber--;
         clearChildrenFunction();
         document.getElementById("loader").style.display = "block";
         grabName();
      }
   }

   function nextPagination() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      pageNumber++;
      clearChildrenFunction();
      document.getElementById("loader").style.display = "block";
      grabName();
   }


   function grabName() {
      document.getElementById("noResults").style.display = "none";
      document.getElementById("loader").style.display = "block";
      var nameValue = document.getElementById("cardName").value;
      var legalityValue = document.getElementById("legalityDropdown").value;
      var typeValue = document.getElementById("typeDropdown").value;
      var rarityValue = document.getElementById("rarityDropdown").value;
      console.log(nameValue);

      if (legalityValue == "" && typeValue == "" && rarityValue == "") {
         writeNameToDocument(`v1/cards?name=${nameValue}`);
          console.log("no additional values");
      }
      else if (legalityValue == "" && typeValue == "") {
         writeNameToDocument(`v1/cards?name=${nameValue}&rarity=${rarityValue}`);
          console.log("rarity");
      }
      else if (legalityValue == "" && rarityValue == "") {
         writeNameToDocument(`v1/cards?name=${nameValue}&type=${typeValue}`);
          console.log("type");
      }
      else if (typeValue == "" && rarityValue == "") {
         writeNameToDocument(`v1/cards?name=${nameValue}&gameFormat=${legalityValue}`);
          console.log("legality");
      }
      else if (typeValue == ""){
         writeNameToDocument(`v1/cards?name=${nameValue}&gameFormat=${legalityValue}&rarity=${rarityValue}`);
          console.log("legality and rarity");
      }
      else if (rarityValue == ""){
       writeNameToDocument(`v1/cards?name=${nameValue}&gameFormat=${legalityValue}&type=${typeValue}`);
        console.log("type and legality");
      }
      else if (legalityValue == ""){
        writeNameToDocument(`v1/cards?name=${nameValue}&type=${typeValue}&rarity=${rarityValue}`);
        console.log("type and rarity");
    }
      else {
         writeNameToDocument(`v1/cards?name=${nameValue}&type=${typeValue}&rarity=${rarityValue}&gameFormat=${legalityValue}`);
          console.log("all");
      }
   }

   function randomCards() {
      clearChildrenFunction();
      document.getElementById("loader").style.display = "block";
      document.getElementById("randomButton").style.display = "none";
      writeNameToDocument(`v1/cards?random`);
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


   function writeNameToDocument(type) {
      // Retrieving the card data
      getData(type, function(data) {
         console.dir(data);
         if (data.cards.length === 0) {
            noDataFunction();
         }
         else {
            document.getElementById("noResults").style.display = "none";
            for (var i = (pageNumber - 1) * 4; i <= ((pageNumber - 1) * 4) + 4 && i <= data.cards.length - 1; i++) {

               var cardRow = document.createElement("div");
               cardRow.setAttribute("class", "row justify-content-center cardRowClass");
               cardRow.setAttribute("id", "row" + i);
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
               if (data.cards[i].manaCost === undefined) { document.getElementById("cardCost" + i).innerHTML += "This card has no casting cost." }
               else {
                  document.getElementById("cardCost" + i).innerHTML += "Cost: ";
                  // Replace all the symbols for mana and tapping.
                  var symbolArray = [];
                  var miniString = "";
                  var initialString = data.cards[i].manaCost;
                  var replacedString = initialString.replace(/\//g, "");
                  for (var z = 0; z < replacedString.length; z++) {
                     if (replacedString.charAt(z) == '{') {
                        z++;
                        while (replacedString.charAt(z) != '}') {
                           miniString += replacedString.charAt(z);
                           z++;
                        }
                     }
                     symbolArray.push(miniString);
                     miniString = "";
                  }
                  for (var y = 0; y < symbolArray.length; y++) {
                     var imgString = "<image class =\"symbolImg\" src=\"images/symbols/" + symbolArray[y] + ".svg\">";
                     document.getElementById("cardCost" + i).innerHTML += imgString;
                  }
               }


               if (data.cards[i].text === undefined) { document.getElementById("cardText" + i).innerHTML += "This card has no descriptive text"; }
               else {
                  // working on text bit

                  document.getElementById("cardText" + i).innerHTML = "Description: ";

                  // Replace all the symbols for mana and tapping.

                  var symbolArray1 = [];
                  var miniString1 = "";
                  var initialString1 = data.cards[i].text;
                  var replacedString1 = initialString1.replace(/\//g, "");
                  for (var x = 0; x < replacedString1.length; x++) {
                     if (replacedString1.charAt(x) == '{') {
                        x++;
                        while (replacedString1.charAt(x) != '}') {
                           miniString1 += replacedString1.charAt(x);
                           x++;
                        }
                     }
                     symbolArray1.push(miniString1);
                     miniString1 = "";
                  }

                  // Clear empty array fields
                  var filtered = symbolArray1.filter(Boolean);
                  // End of clearing empty array fields

                  document.getElementById("cardText" + i).innerHTML += data.cards[i].text;
                  for (var v = 0; v < filtered.length; v++) {
                     var imgString1 = "<image class =\"symbolImg\" src=\"images/symbols/" + filtered[v] + ".svg\">";

                     var replaceRegEx = document.getElementById("cardText" + i).innerHTML.replace(/\{d+\}/g, imgString1);
                     console.log("replaceVariable = " + replaceRegEx);
                     document.getElementById("cardText" + i).innerHTML = replaceRegEx;
                     //document.getElementById("cardText" + i).innerHTML += imgString1;

                  }
               }
               // End of text bit

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
               document.getElementById("paginationId").style.display = "flex";
            }

            if (document.getElementById("cardData1").innerHTML === "") {
               pageNumber = 1;
               grabName();
            }
            document.getElementById("loader").style.display = "none";


         }
      });
   }
   