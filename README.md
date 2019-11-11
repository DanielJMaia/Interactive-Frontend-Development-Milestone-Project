## Concerns and Improvements
- Significant improvements to JavaScript are needed in terms of shortening it and generally making it more efficient.
- Additional filtering isn't possible at the moment because instead of simply downloading all the data I'm referring to the API. Out of tens of thounsands of possible results it can only show the top 100, which means that if I try to search for all "elementals" for example, it simply filters though those 100 instead of everything.
- Mixed content errors 
    - The page at 'https://34448f84a6de4fc99440293ea8169274.vfs.cloud9.us-east-1.amazonaws.com/_static/index.html' was loaded over HTTPS, but requested an insecure image 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=600&type=card'. This content should also be served over HTTPS.
    - index.html:1 A cookie associated with a cross-site resource at http://wizards.com/ was set without the `SameSite` attribute. A future release of Chrome will only deliver cookies with cross-site requests if they are set with `SameSite=None` and `Secure`. You can review cookies in developer tools under Application>Storage>Cookies and see more details at https://www.chromestatus.com/feature/5088147346030592 and https://www.chromestatus.com/feature/5633521622188032.
- Concerned that I'm not following proper procedure when calling an API.
- Replacing symbols in JS results. SEE LINE 201 IN TESTING.JS. Not really working with divID.replace method because the symbols I'm trying to replace are in the form {B}. 
- Additional header missing problem that I'm not managing to currently replicate. 



## Interactive Frontend Development Project
This is a project designed to help Magic the gathering players easily find cards. 

## UX 
This website is an easy to use way of viewing the 25 thousand or more MTG cards. It can be very easily adapted to have significant filtering functionality. 
- Variety of different MTG players
    - Competitive players
    - Collectors
    - Casual players
*INSERT WIREFRAMES & MOCKUPS HERE

## Features

### Existing Features

- Main search bar which the user can type any cards into. 
- The slideshow which shows the main events in the MTG world, such as latest expansions and tournaments.
- Below the slideshow are short articles that would be updated regularly concerning the most relevant news. 

### Features Left To Implement

- Additional filtering functionality in the form of the search bar having a drop down?
- Wishlist
- Favourites

### Technologies Used

- HTML
- CSS
- JavaScript
- Scryfall API

## Testing

### index.html

### main.js

### style.css

## Deployment

## Credits

### Content

### Media

### Acknowledgements