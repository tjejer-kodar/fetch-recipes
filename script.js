// This file is where the magic happens! As always, feel
// free to change the styling and populate your cards with
// other/more data than we did.

// 1. Step 1 is to create a user with the edamam API:
//    https://developer.edamam.com/edamam-recipe-api
//    Choose Developer, Start now and sign up. After you've
//    signed up, click "Get an API-key now", then "View" (or
//    Create a new app if you don't have the "View" option).
//    Copy the Application ID and the Application Key, and
//    paste in the empty strings below 👇

const BASE_URL = "https://api.edamam.com/search"
const API_KEY = ""
const APP_ID = ""

// 2. A search query is needed to do an API call, so we
//    gave the search query a value. Feel free to change it
//    or connect it to an input field so the user can search
//    for whatever they like! Here you can find more information
//    about how to use the API:
//    https://developer.edamam.com/edamam-docs-recipe-api
let searchQuery = "vegetarian"

// 3. It's time to fetch! Remember how to put together strings
//    when they include JavaScript variables? Using template
//    literals! To get you started, this is how you do it. Just
//    remove the slashes before the fetch and you're good to go!
//    fetch(`${BASE_URL}?q=${searchQuery}&app_id=${APP_ID}&app_key=${API_KEY}`)

//    Hint! Log the response to the console to see that you're
//    recieving the data as you expect.

// 4. Did you get an array of vegetarian recipes in the console?
//    Awesome! Now it's time to use the data to populate the section
//    with class="all-recipes" and id="allRecipes".
//    Hint! You want to do something for every element so the forEach()
//    method is perfect!