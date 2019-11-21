## Interactive Frontend Development Project
This is a project designed to help Magic the gathering players easily find cards. 

## UX 
This website is an easy to use way of viewing the 25 thousand or more MTG cards. It can be very easily adapted to have significant filtering functionality. This website allows users to see card art, as well as additional information including casting cost, spell type, card descriptions, card abilities, power and toughness values and the artist who drew the art for that specific card.
- The website would appeal mostly to a variety of different MTG players, but newcomers could also find it's an interesting discovery tool.
    - Competitive players can quickly search up cards to see their cost and abilities and determine if they want to include them in their decks.
    - Collectors can see all the different versions of a card that's been released to ensure that they've got every single one. In magic the gathering, they are always releasing new cards and being able to easily see which set each version belongs too would be highly beneficial to a collector.
    - Casual players can browse different cards and determine if they'd be interested in buying any based of abilities or simply nice looking art.
    - Individuals interested in browsing various cards for the art alone can see every variation of a card, Magic has been out for nearly 30 years and has gone through a ton of art styles/artists.
- Wireframes can be found in the issues sections of GitHub [here](https://github.com/DanielJMaia/Interactive-Frontend-Development-Milestone-Project/issues/1#issue-526619594)

## Features

### Existing Features

- Main search bar which the user can type any card name into. This is the primary part of the project.
- The slideshow which shows the main events in the MTG world, such as latest expansions and tournaments.
- Below the slideshow are short articles that would be updated regularly concerning the most relevant news. 

### Features That Could Be Implemented In The Future

- Additional filtering functionality in the form of the search bar having a drop down. The reason this doesn't work at the moment is that I want to demonstrate my use of an API and thus haven't downloaded all the data and stored it locally. The API returns a maximum of 100 results, so the filtering would only apply to those 100 results instead of the entire database.
- Wishlist
- Favourites
    - Both these features would involve creating an account system which is beyond the scope of this project. 

### Features Left to Implement

- None

## Technologies Used

- HTML
    - This was used to create the page layout.
- CSS
    - This was used to style the page.
- JavaScript
    - This was the main technology used for the project. It was used for:
       - Calling the API and retrieving the data.
       - Event listeners such as pressing enter and using the mouse to click "next" for pagination.
       - Retrieving the user text input and inserting that into the API URL to request and display only certain cards.
       - Clearing certain parts of the HTML in the index.html body and dynamically creating HTML depending on the amount of data that needs to be presented.
       - Inserting the relevant API response object fields into the appropriate divs in the HTML. i.e. card 0, text field inserted into the first row's paragraph named "cardText0" which has been dynamically created.
       - Replacing all the symbols for mana and special actions which are shown in the API as {G} with pictures by looping through the string, extracting characters between curly brackets and saving them as an array, then retrieving the array values and injecting them into an html string which selects the specific image I need based off that character.
       - Dynamically hiding and showing error messages, pagination, the slideshow section with the promitional information and loading gifs.
       - Pagination. The approach taken was to create 5 rows for the first 5 items in the API array, then the next 5 if next was pressed and so on. When prev and  next are pressed, the page clears the previous rows and goes back to the top.
- magicthegathering.io API

## Testing

### Approach to Testing
- Planning
    - When I began this project I knew I was going to be undertaking the most difficult Web Development project so far, and so I knew that proper testing of each feature was going to be very important. This led to several testing strategies as detailed below. 
- Implementation
    - First and foremost, I kept all my new code separate from my main, functining project. I had a testing.js file where I wasn't afraid to break everything in order to try new things. Once I got the very basic API call working,  testing.js became the latest copy of main.js so that I was sure that I was working properly with the data, and that when I copied the code into main.js I didn't have to adapt it significantly to work on the main project. Each new block of functionality was therefore first tested in the test file.
    - The Chrome Dev tools were used, specifically the console.log functionality and breakpoints. Being able to log the value of variables throughought the process was fundamental in debugging the code. An example of when this was paramount was when I was replacing the values between curly brackets {} with images. There's a string variable, ministring variable, array and all those are being changed throughout the for while loop.
- Results
    - The result of this testing was being able pinpoint problems with the code and debug it significantly faster, instead of just changing things and hoping to find the issues. The result of using breakpoints was that I was able to work on things that are only on the page for a fraction of a second, such as the styling for the loading gif. 

### Main functionality

- Testing was done by trying to break the program as best I could.
    - On the main page before a card name is typed in I ensured the carousel worked correctly, and that all the links were working.
    - When a card name is typed in, I ensured that if the API returns 0 results the user gets an error message. This is for when a user types in a card that doesn't exist, or mistypes it.
    - The appropriate mana image is replacing the symbols returned by the API. For example, the string {G} is properly replaced by the image of the Green mana icon.
    - The appropriate data is filling the correspoding dynamically generated div. The description isn't being put in the Cost section and so on.
    - If the API doesn't return a value for the specific data meant for a div, it returns a descriptive message instead of "undefined". This is key since a lot of cards in Magic don't have certain values. For example, creature type cards have power and toughness values, but Sorceries, Enchantments etc. don't.
    - Pressing previous on page 1 doesn't return an error message.
    - Pressing next on the final page loops the user back to page 1.

### Mobile Approach (And 1440p, 4k)

- The entire website was viewed and tested in every single of the Chrome developer tool presets, in this case the Galaxy S5, Pixel 2, Pixel 2 SL, iPhone 5/SE, iPhone 6/7/8, iPhone 6/7/8 Plus, iPhone X, iPad, iPad Pro.
- It was also viewed in the resolutions 2560 x 1440 and 4096 x 2160. 1440p and 4k displays are more and more common, and I viewed these as important resolutions to consider.

### Bugs / Problems Encountered

- Pagination was initially challenging since my approach was to create the appropriate amount of rows and load everything into them, then show/hide the rows according to functions assosciated with the next/prev buttons. The fix was to never create more than 5 rows, and then change those pagination functions to just clear those 5 rows. A pageNumber variable was created, and the existing loop was modified to retrieve data based off a formula that uses the page number. 
- Replacing the {g} strings being returned by the API with images. This was the most challenging aspect of the project and required tutor support.
- Retrieving user inputs and inserting that into the URL.
- The initial approach was to insert the data into existing HTML, but that proved impossible. The result of trying was a single card with up to 100 names, costs, abilities, artists etc. 
- The for loop which creates the HTML rows had some very simple parameters initially, and as a result created too many rows which ended up being big empty blocks underneath the cards. This was corrected by simply fixing the i variable parameters.
- One of the main issues that's been present througout the entirety of the project is an access denied error. Seemingly randomly, the API call will give the error "Access to XMLHttpRequest at 'URL' has been blocked by CORS policy. No 'Access-Control-Allow-Origin' header is present on the requested resource." 

## Deployment

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