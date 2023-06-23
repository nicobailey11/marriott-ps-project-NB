// trigger sweet alert on page load
swal({
  title: "Where do you want to go?",
  icon: "assets/images/destination-types.png",
  buttons: {
    city: {
      text: "City",
      value: "city",
    },
    beach: {
      text: "Beach",
      value: "beach",
    },
    mountains: {
      text: "Mountains",
      value: "mountains",
    },
  },
}).then((value) => {
  let typePreference = value;
  console.log(typePreference);
  findRecommendations(typePreference);
});

// create map using token
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-7.93044, 37.019356],
  zoom: 11.15,
});

// find recommendations based on type
function findRecommendations(type) {
  // use filterPlacesByType function to filter places array
  let filteredPlaces = filterPlacesByType(type);

  // loop through filteredPlaces and do 3 things with each place:
  // 1. Add place to megamenu using addPlaceToMegaMenu function
  // 2. Add a card to the recommended for you section
  populateRecommendations(filteredPlaces);
  // 3. Create a marker on the map using addMarkerToMap function
  filteredPlaces.forEach((place) => {
    addPlaceToMegaMenu(place);
    // addCardToRecommendations(place);
    addMarkerToMap(place);
  });
}

// DOM nodes for megamenu columns
const _megaMenuCol1 = document.getElementById("mega-menu-col-1");
const _megaMenuCol2 = document.getElementById("mega-menu-col-2");

function addPlaceToMegaMenu(place) {
  // nav button populating place name and scroll to map
  let menuItemContent = `
    <li onclick="centerPlaceOnMap('${place.name}')">
      <a class="dropdown-item" href="#map">
        ${place.name}
      </a>
    </li>
    `;
  // add a dropdown item to the nav menu with centerPlaceOnMap function
  if (_megaMenuCol1.childElementCount < 4) {
    _megaMenuCol1.insertAdjacentHTML("beforeend", menuItemContent);
  } else {
    _megaMenuCol2.insertAdjacentHTML("beforeend", menuItemContent);
  }
}

function createCard(place) {
  const placeCard = document.createElement("div");
  placeCard.classList.add("col");
  placeCard.innerHTML = `
  <div class="col">
    <div class="card" onclick="centerPlaceOnMap('${place.name}')">
      <div class="row g-0">
        <div class="col-md-4">
          <div
            class="image-container"
            style="
              background-image: url('${place.img}');
            "
          ></div>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${place.name}</h5>
            <p class="card-text">${place.location}</p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  return placeCard;
}

// add a mapbox marker to the map based on a place
function addMarkerToMap(place) {
  // set a marker with a popup on the map
  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<p class="text-center">${place.name}</p> <img src="${place.img}" alt="" style="width: 200px; height: auto; border-radius: 4px;">`
  );
  new mapboxgl.Marker({ color: "black" })
    .setLngLat([place.long, place.lat])
    .setPopup(popup)
    .addTo(map);
}

// fly to a specific place on the map by name
function centerPlaceOnMap(placeName) {
  // find place object by name in PLACES array using findPalceByName function
  let placeObj = findPlaceByName(placeName);

  // fly map to the marker clicked on
  map.flyTo({
    center: [placeObj.long, placeObj.lat],
  });
}
