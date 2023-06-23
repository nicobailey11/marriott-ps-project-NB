// Task 0
// sign up for a mapbox account and add your access token to the variable below
mapboxgl.accessToken = "YOUR-ACCESS-TOKEN-HERE";

// Task 1
// filter places by type from user selection. Use the places "type" property
function filterPlacesByType(type) {
  // shortcut
  // return PLACES.filter((place) => place.type === type);
  // long way
  let filteredPlaces = [];
  for (let i = 1; i < PLACES.length; i++) {
    if (PLACES[i].type === type) {
      filteredPlaces.push(PLACES[i]);
    }
  }
  return filteredPlaces;
}

// Task 2
// populate cards based on filteredPlaces array
function populateRecommendations(filteredPlaces) {
  // find dom element for recommendations
  const recommendationsElement = document.getElementById("recommendations");
  // clear out recommendations
  recommendationsElement.innerHTML = "";
  for (let i = 0; i < filteredPlaces.length; i++) {
    // use createCard function for each place
    let placeCard = createCard(filteredPlaces[i]);
    // add card to recommendations dom element
    recommendationsElement.appendChild(placeCard);
  }
}

// Task 3
// find place object in places array by property "name" for displaying on the map
function findPlaceByName(name) {
  // shorthand
  // return PLACES.find((place) => place.name === placeName);
  // long way
  for (let i = 1; i < PLACES.length; i++) {
    if (PLACES[i].name === name) {
      return PLACES[i];
    }
  }
}
