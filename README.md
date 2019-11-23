## Interactive Frontend Development Project
This is a project designed to help Magic the gathering players easily find cards. 

## UX 
This website is an easy to use way of viewing the 25 thousand or more MTG cards. It offers filtering functionality allowing for very specific card searches. This website allows users to see card art, as well as additional information including casting cost, spell type, card descriptions, card abilities, power and toughness values and the artist who drew the art for that specific card. The user can filter these cards based off the formats in which the card is legal, the card type and the card rarity. 
- The website would appeal mostly to a variety of different MTG players, but newcomers could also find it's an interesting discovery tool.
    - Competitive players can quickly search up cards to see their cost and abilities and determine if they want to include them in their decks. They can also check if cards are legal in the format they're competing in, for illegal cards will result in immediate disqualification. 
    - All players that are building decks for specific formats would benefit greatly from being able to select the formats filter and run their cards through the application to make sure they're all legal.
    - Collectors can see all the different versions of a card that's been released to ensure that they've got every single one. In magic the gathering, they are always releasing new cards as well as re-printing old ones, and being able to easily see which set each version belongs too would be highly beneficial to a collector.
    - Casual players can browse different cards and determine if they'd be interested in buying any based off abilities or simply nice looking art.
    - Individuals interested in browsing various cards for the art alone can see every variation of a card, Magic has been out for nearly 30 years and has gone through a ton of art styles/artists.
- Initial wireframes can be found in the issues sections of GitHub [here](https://github.com/DanielJMaia/Interactive-Frontend-Development-Milestone-Project/issues/1#issue-526619594)
    - Final Look 
        - Desktop 1080p: [screenshots](https://github.com/DanielJMaia/Interactive-Frontend-Development-Milestone-Project/issues/2)
        - Desktop 1440p: [screenshots](https://github.com/DanielJMaia/Interactive-Frontend-Development-Milestone-Project/issues/3)
        - Tablet: [screenshots](https://github.com/DanielJMaia/Interactive-Frontend-Development-Milestone-Project/issues/5)
        - Mobile: [screenshots](https://github.com/DanielJMaia/Interactive-Frontend-Development-Milestone-Project/issues/4)

## Features

### Existing Features

- Main search bar which the user can type any card name into. This is the primary part of the project.
- A random button, which displays 100 random cards.
- A show filters button, which displays three additional filtering categories and a search button.
    - The first dropdown allows the user to select which format the cards are legal in. If the user is building a standard legal deck for example and want to quickly check that their favourite cards can go in their deck.
    - The second dropdown allows the user to filter results based off the type, for example Creature cards.
    - The third allows the user to select card rarity. 
    - The final element that appears when the user clicks show filters is a search button. This button isn't 100% necessary since it executes the same code as pressing enter in the input field, but if the user is already using their mouse to select dropdown options it seems appropriate to include a search button.
- The slideshow which shows the main events in the MTG world, such as latest expansions and tournaments.
- Below the slideshow are short articles that would be updated regularly concerning the most relevant news.
- A footer with a link to the API, some additional information about the API and a short disclaimer.

### Features That Could Be Implemented In The Future

- Additional filtering functionality could be added for nearly every aspect of card Data available such as sets, colours, languages etc.
- Wishlist && Favourites
    - Both these features would involve creating an account system which is beyond the scope of this project. 

### Features Left to Implement

- An unnecessary quality of life improvement would be to use similar code as can be found for the Cost icons in the card descriptions to also replace the {} string segments in card descriptions with images. This would involve looping through the strings and using template literals to replace each instance of {...} with an image. 

## Technologies Used

- HTML
    - This was used to create the page layout.
- CSS
    - This was used to style the page.
- Bootstrap
    - This was used for the mobile first approach and the carousel.  
- JavaScript
    - This was the main technology used for the project. It was used for:
       - Calling the API and retrieving the data.
       - Event listeners such as pressing enter and using the mouse to click "next" for pagination.
       - Retrieving the user text input and inserting that into the API URL to request and display only certain cards.
       - Changing the API Url call depending on filters selected by the user from the additional filters section.
       - Clearing certain parts of the HTML in the index.html body and dynamically creating HTML depending on the amount of data that needs to be presented.
       - Inserting the relevant API response object fields into the appropriate divs in the HTML. i.e. card 0, text field inserted into the first row's paragraph named "cardText0" which has been dynamically created.
       - Replacing all the symbols for mana and special actions which are shown in the API as {G} with pictures by looping through the string, extracting characters between curly brackets, inserting them into a ministring, and then inserting those strings into an array. Then the array values are retrieved and injected them into an html string which selects the specific image I need based off that character.
       - Dynamically hiding and showing error messages, pagination, the slideshow section with the promitional information, additional filtering options and loading gifs.
       - Pagination. The approach taken was to create 5 rows for the first 5 items in the API array, then the next 5 if next was pressed and so on. When prev and  next are pressed, the page clears the previous rows and goes back to the top.
- magicthegathering.io API

## Testing

### Approach to Testing
- Planning
    - When I began this project I knew I was going to be undertaking the most difficult Web Development project so far, and so I knew that proper testing of each feature was going to be very important. This led to several testing strategies as detailed below. 
- Implementation
    - First and foremost, I kept all my new code separate from my main, functining project. I had a testing.js file where I wasn't afraid to break everything in order to try new things. Once I got the very basic API call working,  testing.js became the latest copy of main.js so that I was sure that I was working properly with the data, and that when I copied the code into main.js I didn't have to adapt it significantly to work on the main project. Each new block of functionality was therefore first tested in the test file.
    - The Chrome Dev tools were used, specifically the console.log functionality and breakpoints. Being able to log the value of variables throughought the process was fundamental in debugging the code. An example of when this was paramount was when I was replacing the values between curly brackets {} with images. There's a string variable, ministring variable, array and all those are being changed throughout the for while loop.
    - The website was viewed in Firefox Developer edition, Chrome and Microsoft Edge. 
- Results
    - The result of this testing was being able pinpoint problems with the code and debug it significantly faster, instead of just changing things and hoping to find the issues. The result of using breakpoints was that I was able to work on things that are only on the page for a fraction of a second, such as the styling for the loading gif. 

### Main functionality

- Testing was done by trying to break the program as best I could.
    - On the main page before a card name is typed in I ensured the carousel worked correctly, and that all the links were working.
    - When a card name is typed in, I ensured that if the API returns 0 results the user gets an error message. This is for when a user types in a card that doesn't exist, mistypes it, or adds there simply aren't any cards that meet all the requirements the user added in the additional filters section.
    - The appropriate mana image is replacing the symbols returned by the API. For example, the string {G} is properly replaced by the image of the Green mana icon.
    - The appropriate data is filling the correspoding dynamically generated div. The description string isn't being put in the Cost paragraph and so on.
    - If the API doesn't return a value for the specific data meant for a div, it returns a descriptive message instead of "undefined". This is key since a lot of cards in Magic don't have certain values. For example, creature type cards have power and toughness values, but Sorceries, Enchantments etc. don't.
    - Pressing previous on page 1 doesn't return an error message.
    - Pressing next on the final page loops the user back to page 1.
    - Special characters suck as % / and & don't have unintended effects when put into the search bar.

### Mobile Approach (And 1440p, 4k)

- The entire website was viewed and tested in every single of the Chrome developer tool presets, in this case the Galaxy S5, Pixel 2, Pixel 2 SL, iPhone 5/SE, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhone X, iPad, iPad Pro.
- It was also viewed in the resolutions 2560 x 1440 and 4096 x 2160. 1440p and 4k displays are more and more common, and I viewed these as important resolutions to consider.

### Bugs / Problems Encountered

- One of the main issues that's been present througout the entirety of the project is an access denied error. Seemingly randomly, the API call will give the error "Access to XMLHttpRequest at 'URL' has been blocked by CORS policy. No 'Access-Control-Allow-Origin' header is present on the requested resource." I have not found a fix for this issue except to use a Chrome extension throughout development.
- Similarly, the API is not amazing and sometimes the TTFB (time to first byte) can be up to 20 seconds. This results in a bad user experience, it feels like the website is extremely slow. In fact, it can load up to 100 results in under a second when working properly. This has been very frustrating throughought development but I do not believe is something that can be fixed on my end. 
- When I was talking to my tutor I noticed the styling was slightly different for her when she was accessing the website on a Mac using the Chrome browser. I've tested all browsers available to me on PC but I do not have access to any mac computers myself, and therefore am not able to see the differences between viewing my page using Chrome on a Windows PC and on a Mac. In a professional environment I expect I'd have access to Mac, Windows and Linux machines. If not I could create VMs for testing.
- Pagination was initially challenging since my approach was to create the appropriate amount of rows and load everything into them, then show/hide the rows according to functions assosciated with the next/prev buttons. The fix was to never create more than 5 rows, and then change those pagination functions to just clear those 5 rows. A pageNumber variable was created, and the existing loop was modified to retrieve data based off a formula that uses the page number. 
- Replacing the {g} strings being returned by the API with images. This was the most challenging aspect of the project and required tutor support. As detailed above, it involved saving the characters between {} as a ministring, pushing those strings to the array and then referencing that array when creating the HTML image tags in order to retrieve the exact image. 
- Retrieving user inputs and inserting that into the URL was intially challenging, but thankfully the API has a lot of different ways of retrieving data. The final approach was to take the user input and insert that string directly into a URL which doesn't require the input to match 100% in order to return certain cards i.e. typing ae results all cards that contain ae in their name, not just cards named "ae".
- The initial approach was to insert the data into existing HTML like shown in the lesson "Working with External Resources > Data & The DOM", but that proved impossible. The result of that approach was a single card with up to 100 names, costs, abilities, artists etc. The solution was to generate a row for each new card as part of the loop. 
- The for loop which creates the HTML rows had some very simple parameters initially, and as a result created too many rows which ended up being big empty blocks underneath the cards. This was corrected by simply fixing the i variable parameters.
- Additional filtering functionality was intially approached with the mindset of retrieving data, then filtering through the data depending on certain parameters. For example, a user wants a Creature card with the word Goblin in it's name. The API call is made for all cards with Goblin in their name, and then only the creatures are displayed. The issue with this is that the API returns a maximum of 100 results. So it would return 100 cards with Goblin in their name of a variety of types, then only show the creatures which could be only 30 of those 100 cards, and not all the goblin creatures available. The fix to this was to instead make an API call with additional filters and therefore get up to 100 results but with those filters of "name includes Goblin and type=creature" already implemented.
- The additional filters dropdowns had to either have display: block or display: flex depending on the screen size. Therefore, it became necessary to define those properties in JavaScript using the screen width property instead of simple CSS. As a result, if the user opens the additional filters and then resizes the page from desktop to mobile sizes it won't resize the filters properly, they have to hide and then show the filters. This isn't important because regular users don't resize pages when they're working on them.
- When the user clicks next, the first result was the same as the last one on the previous page. This was fixed by fixing the formula in the first condition in the for loop. It was intially multiplying it by 4 instead of 5. 
- The random parameter is currently broken for the API. In the documentation it describes it as a parameter used to "Fetch any number of cards (controlled by pageSize) randomly", but at the moment it simply returns the first cards in alphabetical order. I've kept the button on the application however, since I believe this is something that will get fixed on their end. 
- This isn't really a bug but more of a slight issue. I used to have a lot of comments describing each section of my code, but my tutor informed me that it was better practice to try to name functions/classes in a way that explains their functionality and what they're for instead of simply describing them in comments. This led to a shift in naming functions in a way that's as descriptive as possible. 


## Deployment
Throughout development version control was handled using Git, and at every significant milestone was uploaded to a gitHub repository named Interactive-Frontend-Development-Milestone-Project. Once the final project was complete, I decided to use GitHub Pages to deploy the project. Since the repository contains the entire project and nothing else, I was comfortable allowing the page to be built from the master branch. There is no separate git branch for development. GitHub Pages is easy to use and very intuitive, and it was not necessary to use Jekyll, nor change the site URL. The final version of the website can be found [here](https://danieljmaia.github.io/Interactive-Frontend-Development-Milestone-Project/)
Throughout development the code was run using AWS Cloud9 workspace, and it was previewed using AWS browser preview utility. I also saved copies of the files locally in case somehow the code was lost. If the code was to be run locally I do not believe there would be a need for any changes.

## Credits

### Content

- The magicthegathering.io API was used for the data.

### Media

- The icons were taken from here https://mtg.gamepedia.com/Category:Mana_symbols
- Carousel images were retrieved from 
   - Core Set 2020 found [here](https://www.google.com/search?sxsrf=ACYBGNQ7YUfVBvn6q4me9Y4izIHFbJINQg:1574342826995&q=magic+the+gathering+core+set+2020&tbm=isch&tbs=simg:CAQSkwEJ1ayOcbM_1T2IahwELEKjU2AQaAAwLELCMpwgaYgpgCAMSKJAX-haKEZEXiRH3Fo0RgBeNF4UM8iPzI_1Aj4yHxI-oo5Cj1IboshSAaMBhvBB3u293vpQ9BllsqIJ4QvRVKela--XVTsSJO6riYR-zUNhiFhiBqRfI7pwIzKCAEDAsQjq7-CBoKCggIARIEVleO7Aw&sa=X&ved=2ahUKEwj8qdSHtPvlAhXFQUEAHYA5ARUQwg4oAHoECAgQKA&biw=1920&bih=937)
   - FNM Chaos Draft placeholder image found [here](https://firstplayer.nu/event/friday-night-magic-2018-12-28/)
   - Throne of Eldraine promo image found [here](https://www.google.com/search?sxsrf=ACYBGNRKcjma37Zoaso3MXVUemPWnQeawA:1574342832177&q=mtg+throne+of+eldraine&tbm=isch&tbs=simg:CAQSkwEJYt94JYYWeCkahwELEKjU2AQaAAwLELCMpwgaYgpgCAMSKO0W_1wutGb8M7xefGZUZ7haWBOsW8iPPLM4sqyHFJoQ66Cm3IcMm0yYaMDUtFWHQyFpLX52pnWwuxI-cBl9oIAzJbxhEt8I2bHrecyRGikPps9ZR9LrReNNf7SAEDAsQjq7-CBoKCggIARIEmVyy2ww&sa=X&ved=2ahUKEwie05CKtPvlAhUPUcAKHcNwBKMQwg4oAHoECAQQKA&biw=1920&bih=937)
 
### Acknowledgements
- Thank you to my mentor, Antonija Simic
- Thank you to the tutors Stephen and Kevin for helping me out with the more challenging aspects of the project.
- I'd also like to thank the team over at magicthegathering.io for creating this API and making it available to the public.