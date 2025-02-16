// Task 0
// Sign up for a Mapbox account and add your access token below. Remove YOUR-ACCESS-TOKEN-HERE, and put your token between the quotes
mapboxgl.accessToken = "pk.eyJ1Ijoibmljb2JhaWxleTExIiwiYSI6ImNscGtzMWV6ejAyb24ycW9hZG9obTZmeWcifQ.ojFMK1AlYu1Lb52bg-pNmw";

// Task 1
function filterPlacesByType(typePreference) {
  // Step 1: Create a new filteredPlaces array and store it in a variable
  // Step 2: Loop through PLACES
  // Step 3: If a place object's type property matches the typePreference parameter, add it to filteredPlaces
  // Step 4: After the loop, return filteredPlaces

  let filteredPlaces = []; 
  for (let i = 0; i < PLACES.length; i++) {
    if (PLACES[i].type == typePreference) {
      filteredPlaces.push(PLACES[i]);
    }
  }

  return filteredPlaces;
}


// Task 2
function createCard(place) {
  // Step 1: Create a new div element and store it in a variable
  // Step 2: Add the col class to the new div element
  // Step 3: Set the innerHTML of the div with a template string. It should resemble the structure shown in the readme. Interpolate the values for place.name, place.img, and place.location where needed. More info - https://wesbos.com/template-strings-html
  // Step 4: Return the element
  const cardContent = `
      <div class="card h-100" onclick="centerPlaceOnMap('${place.name}')">
        <img src="${place.img}" class="card-img-top h-100" alt="...">
        <div class="card-body">
          <h5 class="card-title">${place.name}</h5>
          <p class="card-text">${place.location}</p>
        </div>
      </div>`;
  
  let card = document.createElement("div");
  card.setAttribute("class","col");
  card.innerHTML = cardContent;

  return card;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  // Step 1: Store the DOM element with the id "recommendations" in a variable
  // Step 2: Clear the "recommendations" innerHTML
  // Step 3: Loop through the filteredPlaces array
  // Step 4: Create a card for each place using the createCard function
  // Step 5: Add/append each card to the recommendations DOM element
  let recommendations = document.getElementById("recommendations");
  recommendations.innerHTML = "";

  for (let i = 0; i < filteredPlaces.length; i++) {
    let card = createCard(filteredPlaces[i]);
    recommendations.appendChild(card); 
  }
  
}

// Task 4
function findPlaceByName(placeName) {
  // Step 1: Loop through the PLACES array
  // Step 2: If a place object's name property matches the placeName parameter, return that place object
  for (let i = 0; i < PLACES.length; i++) {
    if (placeName == PLACES[i].name) {
      console.log("findPlace was found");
      return PLACES[i];
    }
  }
  
}