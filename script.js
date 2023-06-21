const PLACES = [
  {
    name: "Algarve, Portugal",
    long: -7.93044,
    lat: 37.019356,
    img: "assets/images/popular-destinations/algarve.jpg",
    category: "beach",
  },
  {
    name: "Atlanta, Georgia",
    long: -84.38633,
    lat: 33.753746,
    img: "assets/images/popular-destinations/atlanta.jpg",
    category: "city",
  },
  {
    name: "Bali, Indonesia",
    long: 115.188919,
    lat: -8.409518,
    img: "assets/images/popular-destinations/bali.jpg",
    category: "beach",
  },
  {
    name: "Bass Lake, California",
    long: -119.5664,
    lat: 37.3247,
    img: "assets/images/popular-destinations/bass-lake.jpg",
    category: "mountains",
  },
  {
    name: "Big Sky, Montana",
    long: -111.25312,
    lat: 45.26599,
    img: "assets/images/popular-destinations/big-sky.jpg",
    category: "mountains",
  },
  {
    name: "Delray Beach, Florida",
    long: -80.105545,
    lat: 26.459763,
    img: "assets/images/popular-destinations/delray-beach.jpg",
    category: "beach",
  },
  {
    name: "Marco Island, Florida",
    long: -81.714722,
    lat: 25.940556,
    img: "assets/images/popular-destinations/marco-island.jpg",
    category: "beach",
  },
  {
    name: "Nashville, Tennessee",
    long: -86.76796,
    lat: 36.174465,
    img: "assets/images/popular-destinations/nashville.jpg",
    category: "city",
  },
];

mapboxgl.accessToken = "KEY";
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-7.93044, 37.019356],
  zoom: 11.15,
});

PLACES.forEach((place) => {
  // add a dropdown item to the nav menu with goToMap function
  const megaMenuCol1 = document.getElementById("mega-menu-col-1");
  const megaMenuCol2 = document.getElementById("mega-menu-col-2");
  let menuItemContent = `
  <li onclick="goToMap('${place.name}')">
    <a class="dropdown-item" href="#">
      ${place.name}
    </a>
  </li>
  `;
  if (megaMenuCol1.childElementCount < 4) {
    megaMenuCol1.insertAdjacentHTML("beforeend", menuItemContent);
  } else {
    megaMenuCol2.insertAdjacentHTML("beforeend", menuItemContent);
  }

  // set a marker with a popup on the map
  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<p class="text-center">${place.name}</p> <img src="${place.img}" alt="" style="width: 200px; height: auto; border-radius: 4px;">`
  );
  new mapboxgl.Marker({ color: "black" })
    .setLngLat([place.long, place.lat])
    .setPopup(popup)
    .addTo(map);
});

function goToMap(placeName) {
  // find place object by name in PLACES array
  let placeObj = PLACES.find((place) => place.name === placeName);
  // TODO: scroll to map on page
  document.getElementById("map").scrollIntoView();

  map.flyTo({
    center: [placeObj.long, placeObj.lat],
  });
}
