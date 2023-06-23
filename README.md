# Portfolio Project: Marriot Bonvoy Hotels and Villas

## Contents

- Introduction
- Provided Code
- Deliverable

## Introduction

After you have identified and prioritized the tasks you need to complete, you're going to build out the code for the functionality. There are plenty of comments and scaffolding to help you get the job done in `script.js`.

The site will attempt to find user recommendations when the user clicks on a selection of "city", "beach", or "mountains" from the popup. Keep in mind that the functions build upon each other so **you should complete each task in order!**

> **🗒 Note:** The only file you'll need to code in to complete this project is `script.js`.

## Provided Code

**`PLACES`** - This is an array that lives in the `places.js` file. Go ahead and examine it to see what each place object in the array looks like. Each place has properties that you'll use for filtering.

**`createCard(place)`** - This is a function that will create a DOM element for a card using a place object. You'll need this in Task 2 to populate user recommendations in the "Recommended for You" section.

## Deliverable

### Task 0. **`mapboxgl.accessToken`**

You'll need to go to mapbox and [sign up for an API key](https://account.mapbox.com/auth/signup/). It's a free service and you can call on your map 50,000 times a month! If you can't sign up for your own key, ask the HelpHub and they can provide you with one temporarily.

Once you have your key, add it between the quotes. It should look something like this:

```js
mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuNXphZ2hpYW4iLCJhIjoiY2MDVkbTNrcWdreGhpNmVkdyJ9.1QGM2sWs-dwc5r8RiG1-VN";
```

<hr>

### Task 1. **`filterPlacesByType(typePreference)`**

| Parameter        | Type   | Example Argument |
| ---------------- | ------ | ---------------- |
| `typePreference` | String | `"beach"`        |

This function will return a filtered array of places based off the user's type preference.

To do this, you'll use the `typePreference` parameter to filter the array of `PLACES` where the `type` property matches. The function will return a new array of `filteredPlaces`.

<hr>

### Task 2. **`populateRecommendationCards(filteredPlaces)`**

| Parameter        | Type  | Example Argument                                                                                                                                                                                                                                                                                     |
| ---------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filteredPlaces` | Array | `[{name: "Algarve", location: "Portugal", long: -7.93044, lat: 37.019356, img: "assets/images/popular-destinations/algarve.jpg", type: "beach"}, {name: "Bali", location: "Indonesia", long: 115.188919, lat: -8.409518, img: "assets/images/popular-destinations/bali.jpg", type: "beach", }, ...]` |

This function takes in a filtered array of places (for example, all with the type "beach"). You'll start by finding the DOM element with the id of "recommendations" and clear it out.

Then you'll need to loop through the `filteredPlaces` and for each place, use the provided `createCard(place)` function to make a card DOM element.

Finally, you'll append each created card to the "recommendations" DOM element to populate the "Recommended for You" section.

<hr>

### Task 3. **`findPlaceByName(name)`**

| Parameter   | Type   | Example Argument |
| ----------- | ------ | ---------------- |
| `placeName` | String | `"Bali"`         |

This function will find an object in the `PLACES` array where the object's `name` property matches the `placeName` parameter. It's used to pin our place on the interactive map and fly to it when clicked from the dropdown menu or the "Recommended for You" section.

To do this, you'll loop through the array of `PLACES` and look for a place object where the `name` property is the same as the `placeName` parameter. The function will return that place object.
