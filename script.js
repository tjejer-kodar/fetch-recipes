/* I den här filen ska du jobba! Som vanligt får du ändra
stylingen och vilken data du vill visa i dina kort - vårt
dummy-kort är bara ett exempel på hur det kan se ut. */

/* 1. Första steget är att skapa en användare för Edamam API:
https://developer.edamam.com/edamam-recipe-api. Välj "Developer",
"Start now" och skapa din användare. Efter att du skapat en
användare, klicka på "Get an API-key now", sen "View" (eller 
"Create a new app" om du inte har alternativet "View"). Kopiera
sedan Application ID och Application Key och klista in i de
tomma strängarna nedan: */

const BASE_URL = "https://api.edamam.com/search"
const API_KEY = ""
const APP_ID = ""

/* 2. Ett sökord (query) behövs för att göra en förfrågan till
API:et, så vi har skapat en variabel här. Du kan antingen ändra
den till något annat eller koppla den till ett input-fält så
användaren själv kan söka efter vilka recept hen vill. Här kan
du hitta mer information om hur du använder API:et:
https://developer.edamam.com/edamam-docs-recipe-api */
let searchQuery = "vegetarian"


/* 3. Dags för fetch()! Fetch-funktionen vill ha en URL i form av
en sträng som argument. Strängen ska innehålla URL:en till API:et
plus dess olika parametrar (som app_id och app_key) */

  /*3.a) Minns du hur du sätter ihop strängar när de innehåller
  JavaScript-variabler? Då använder vi template literals som skrivs
  med grav accent. Börja därför med att skriva fetch(``). Inuti ``
  ska vi sedan pussla ihop vår URL. */

  /*3.b) För att skriva JavaScript inuti strängen, skriver vi
  dollar-tecken och måsvingar, såhär ${nameOfVariable}. Vi behöver
  också specificera vad våra olika parametrar heter (all denna info
  finns i API:ets dokumentation) men för att du snabbt ska komma
  igång har vi satt ihop den här:
  `${BASE_URL}?q=${searchQuery}&app_id=${APP_ID}&app_key=${API_KEY}`
  */

/* 4. Fetch returnerar ett promise, ett löfte om att svaret kommer så
småningom. Detta är ett sätt att hantera att förfrågan tar lite tid att
processa. Vi skickar iväg en förfrågan mot internet och svaret kan dröja
allt från några millisekunder upp till flera sekunder (eller minuter) och
vi vill agera först när svaret på vår förfrågan har kommit tillbaka. */

  /* 4.a) När vi väl fått svaret väntar vi på att vi hämtat hem all data
  eftersom responsen kan vara väldigt stor. Om du loggar svaret till konsollen
  genom att skriva .then(response => console.log(response)) ser du att body:n
  inte är läsbar. Det är i body:n all data finns så vi formatterar om responsen
  till JSON (JavaScript Object Notation) för att få en bättre överblick. Det
  gör vi i en .then-funktion genom att skriva t.ex:
  .then(response => response.json()).
  "response" är ett namn vi ger datan, du kan välja själv vad det ska
  stå men många döper den till res eller response. Vad du än väljer -
  kom ihåg att skriva samma sak på båda sidor om pilen.
  */

  /* 4.b) .then och response.json() returnerar också ett löfte. I detta steg
  väntar vi på att formatteringen till JSON ska bli klar innan vi går vidare.
  Så fort datan är omgjord till JSON kan vi äntligen bestämma vad vi ska göra
  med den! Ett hett tips är att börja med att logga datan till konsollen. Det
  gör vi också i en .then-funktion, genom att skriva t.ex:
  .then(data => console.log(data))
  Även "data" är ett variabelnamn så här kan du också välja om den ska heta
  t.ex. data eller json.
  */

  /* 5. Fick du ett objekt i konsollen med properties som "count" och "hits"?
  Perfekt! Arrayen "hits" är den vi vill använda för att fylla HTML:en med
  recept. Närmare bestämt är det HTML-elementet med klassnamnet "all-recipes"
  och id:t "allRecipes" som vi vill fylla.
  Hint! Du vill göra något
  för varje element så forEach()-metoden passar bra här.*/