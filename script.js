const PLACES = [
  {
    long: -7.93044,
    lat: 37.019356,
    description: "Algarve, Portugal",
    img: "assets/images/popular-destinations/algarve.jpg",
  },
  {
    long: -84.38633,
    lat: 33.753746,
    description: "Atlanta, Georgia",
    img: "assets/images/popular-destinations/atlanta.jpg",
  },
  {
    long: 115.188919,
    lat: -8.409518,
    description: "Bali, Indonesia",
    img: "assets/images/popular-destinations/bali.jpg",
  },
  {
    long: -119.5664,
    lat: 37.3247,
    description: "Bass Lake, California",
    img: "assets/images/popular-destinations/bass-lake.jpg",
  },
  {
    long: -111.25312,
    lat: 45.26599,
    description: "Big Sky, Montana",
    img: "assets/images/popular-destinations/big-sky.jpg",
  },
  {
    long: -80.105545,
    lat: 26.459763,
    description: "Delray Beach, Florida",
    img: "assets/images/popular-destinations/delray-beach.jpg",
  },
  {
    long: -81.714722,
    lat: 25.940556,
    description: "Marco Island, Florida",
    img: "assets/images/popular-destinations/marco-island.jpg",
  },
  {
    long: -86.76796,
    lat: 36.174465,
    description: "Nashville, Tennessee",
    img: "assets/images/popular-destinations/nashville.jpg",
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
  //   var popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
  var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
    `<p class="text-center">${place.description}</p> <img src="${place.img}" alt="" style="width: 200px; height: auto; border-radius: 4px;">`
  );
  new mapboxgl.Marker({ color: "black" })
    .setLngLat([place.long, place.lat])
    .setPopup(popup)
    .addTo(map);
});
