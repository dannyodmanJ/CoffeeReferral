const photoLibrary = [
  {
    url: "https://images.unsplash.com/photo-1515592302748-6c5ea17e2f0e?auto=format&fit=crop&w=1400&q=84",
    alt: "Three ceramic cups with detailed latte art on a cafe table",
    caption: "A table full of rosettas—exactly the kind of visual review BeanBound highlights."
  },
  {
    url: "https://images.unsplash.com/photo-1523247140972-52cc3cdd2715?auto=format&fit=crop&w=1400&q=84",
    alt: "Rosetta latte art in a white cup",
    caption: "A clean rosetta pour with fine, even lines and glossy milk texture."
  },
  {
    url: "https://images.unsplash.com/photo-1771333105706-5598d83224a3?auto=format&fit=crop&w=1400&q=84",
    alt: "Barista working behind a specialty cafe espresso machine",
    caption: "The bar in motion during the morning rush."
  },
  {
    url: "https://images.unsplash.com/photo-1770991954295-b1127cee8b01?auto=format&fit=crop&w=1400&q=84",
    alt: "Warm specialty coffee bar with plants and espresso equipment",
    caption: "Warm light, a serious espresso setup, and a room made for lingering."
  },
  {
    url: "https://images.unsplash.com/photo-1757439569315-523fd61dc2dc?auto=format&fit=crop&w=1400&q=84",
    alt: "Latte art in a handmade ceramic cup",
    caption: "A precise pour served in a cup with plenty of character."
  },
  {
    url: "https://images.unsplash.com/photo-1524671710025-d79530c2f957?auto=format&fit=crop&w=1400&q=84",
    alt: "Cappuccino with swirling latte art viewed from above",
    caption: "The overhead proof: balanced foam, clean contrast, no shortcuts."
  },
  {
    url: "https://images.unsplash.com/photo-1571814521680-da02a7da9c97?auto=format&fit=crop&w=1400&q=84",
    alt: "Cappuccino in a ceramic cup and saucer",
    caption: "A classic cappuccino with a soft, centered heart."
  }
];

const cityDirectory = [
  {
    label: "New York, NY",
    coordinates: [40.7128, -74.006],
    blurb: "Tiny bars, ambitious milk programs, and a great cup every few blocks.",
    cafes: [
      ["Common Thread Coffee", "Lower East Side", 0.006, 0.009, 4.9, ["latte-art", "bakery"], "A tiny room with a very serious flat white."],
      ["Pocket Atlas", "East Village", 0.014, 0.021, 4.8, ["latte-art", "laptop"], "Beautiful pours, fast service, and a corner seat worth waiting for."],
      ["First Light Espresso", "Tribeca", -0.005, -0.009, 4.7, ["latte-art", "roasts"], "The cortado is dialed in and the baristas love a coffee question."]
    ]
  },
  {
    label: "Portland, OR",
    coordinates: [45.5152, -122.6784],
    blurb: "Neighborhood cafes, thoughtful sourcing, and enough ceramics to start a collection.",
    cafes: [
      ["Alder Street Coffee", "Pearl District", 0.006, 0.004, 4.9, ["latte-art", "roasts"], "A silky oat latte and a window seat that makes the morning disappear."],
      ["Morrow Coffee Bar", "Buckman", -0.004, 0.014, 4.8, ["latte-art", "bakery"], "The seasonal danish is almost as photogenic as the tulip pour."],
      ["Red Cedar Coffee", "Northwest District", 0.015, -0.009, 4.7, ["latte-art", "laptop"], "Calm tables, excellent batch brew, and an unhurried bar team."]
    ]
  },
  {
    label: "Seattle, WA",
    coordinates: [47.6062, -122.3321],
    blurb: "A deep espresso bench with views, weather, and plenty of room for another cup.",
    cafes: [
      ["Northline Espresso", "Belltown", 0.009, -0.008, 4.9, ["latte-art", "roasts"], "A textbook cappuccino in a room that still feels like a neighborhood secret."],
      ["Rainshadow Coffee", "Capitol Hill", 0.011, 0.016, 4.8, ["latte-art", "laptop"], "Bright espresso, friendly regulars, and a generous row of outlets."],
      ["Harborlight Cafe", "Pioneer Square", -0.006, -0.004, 4.7, ["latte-art", "bakery"], "Go for the maple knot, stay for the view from the back table."]
    ]
  },
  {
    label: "Austin, TX",
    coordinates: [30.2672, -97.7431],
    blurb: "Sunny patios, creative signatures, and espresso that keeps pace with the city.",
    cafes: [
      ["Mesa House Coffee", "Downtown", 0.004, 0.002, 4.9, ["latte-art", "bakery"], "The honey latte lands sweet, balanced, and finished with a crisp rosetta."],
      ["Violet Crown Coffee", "East Austin", -0.006, 0.012, 4.8, ["latte-art", "roasts"], "A shaded patio and a rotating espresso menu made for return visits."],
      ["Slow Bloom", "Clarksville", 0.01, -0.01, 4.7, ["latte-art", "laptop"], "Quiet before ten, lively after, and consistently excellent milk texture."]
    ]
  },
  {
    label: "Los Angeles, CA",
    coordinates: [34.0522, -118.2437],
    blurb: "Design-forward rooms, playful menus, and coffee stops that become destinations.",
    cafes: [
      ["Sunroom Coffee", "Arts District", 0.006, -0.003, 4.9, ["latte-art", "bakery"], "The room glows, the ceramicware pops, and the cappuccino backs it all up."],
      ["Golden Hour Coffee", "Historic Core", -0.004, -0.007, 4.8, ["latte-art", "laptop"], "A calm upstairs perch with one of the prettiest flat whites downtown."],
      ["Little Palm Espresso", "Echo Park", 0.011, -0.018, 4.7, ["latte-art", "roasts"], "House-roasted espresso with a soft tropical finish and confident pours."]
    ]
  },
  {
    label: "Chicago, IL",
    coordinates: [41.8781, -87.6298],
    blurb: "Architecture, serious pastry counters, and cafes built for cold-weather lingering.",
    cafes: [
      ["Field Notes Coffee", "The Loop", 0.006, 0, 4.9, ["latte-art", "laptop"], "Fast enough for a commute, careful enough for a second look at the cup."],
      ["Lake & Lark", "West Loop", -0.002, -0.014, 4.8, ["latte-art", "bakery"], "The morning bun disappears quickly; the heart-topped latte should not."],
      ["Midway Coffee Room", "River North", 0.013, 0.006, 4.7, ["latte-art", "roasts"], "A polished bar with approachable single-origin espresso and no pretense."]
    ]
  },
  {
    label: "Denver, CO",
    coordinates: [39.7392, -104.9903],
    blurb: "High-altitude roasting, bright rooms, and a strong all-day cafe culture.",
    cafes: [
      ["Highline Coffee", "Capitol Hill", 0.005, -0.008, 4.9, ["latte-art", "roasts"], "A sweet, structured espresso and some of the cleanest tulips in town."],
      ["Alpine Standard", "Golden Triangle", -0.004, 0.004, 4.8, ["latte-art", "laptop"], "Big windows, small tables, and a reliably thoughtful milk menu."],
      ["Copper Cup", "RiNo", 0.012, 0.005, 4.7, ["latte-art", "bakery"], "The cardamom roll and cappuccino are a very convincing pair."]
    ]
  },
  {
    label: "Nashville, TN",
    coordinates: [36.1627, -86.7816],
    blurb: "Friendly counters, music-neighborhood energy, and carefully built comfort drinks.",
    cafes: [
      ["Terracotta Coffee", "SoBro", -0.005, 0.009, 4.9, ["latte-art", "bakery"], "Warm service, a polished cortado, and a pastry case with no weak links."],
      ["Golden Sound Coffee", "The Gulch", 0.003, -0.008, 4.8, ["latte-art", "roasts"], "A lively room and espresso roasted just a few feet from the bar."],
      ["Eastside Steam", "East Nashville", 0.012, 0.022, 4.7, ["latte-art", "laptop"], "Plenty of room to work without losing the feel of a neighborhood cafe."]
    ]
  }
];

const featureLabels = {
  "latte-art": "Latte art",
  laptop: "Laptop friendly",
  bakery: "Great pastries",
  roasts: "Roasts here"
};

const ratingTiers = {
  walk: {
    id: "walk",
    label: "Worth a walk",
    description: "Rated 4.5–4.79"
  },
  drive: {
    id: "drive",
    label: "Worth a drive",
    description: "Rated 4.8–4.89"
  },
  roadtrip: {
    id: "roadtrip",
    label: "Worth a road trip",
    description: "Rated 4.9+"
  }
};

const cafeCatalog = cityDirectory.flatMap((city, cityIndex) =>
  city.cafes.map((cafe, cafeIndex) => ({
    id: `${city.label.split(",")[0].toLowerCase().replace(/\s+/g, "-")}-${cafeIndex + 1}`,
    name: cafe[0],
    neighborhood: cafe[1],
    city: city.label,
    latitude: city.coordinates[0] + cafe[2],
    longitude: city.coordinates[1] + cafe[3],
    rating: cafe[4],
    features: cafe[5],
    review: cafe[6],
    reviewCount: 84 + cityIndex * 17 + cafeIndex * 23,
    reviewer: ["Maya", "Theo", "Nina"][cafeIndex],
    photoCount: 8 + cityIndex + cafeIndex * 3,
    photos: [
      photoLibrary[(cityIndex + cafeIndex) % photoLibrary.length],
      photoLibrary[(cityIndex + cafeIndex + 2) % photoLibrary.length],
      photoLibrary[(cityIndex + cafeIndex + 4) % photoLibrary.length]
    ]
  }))
);

const defaultCity = cityDirectory[0];
const state = {
  latitude: defaultCity.coordinates[0],
  longitude: defaultCity.coordinates[1],
  locationLabel: defaultCity.label,
  radius: 10,
  ratingTier: "all",
  activeFeatures: new Set(["latte-art"]),
  saved: loadSavedCafes(),
  galleryCafe: null,
  galleryIndex: 0
};

const dom = {
  locationForm: document.querySelector("#locationForm"),
  locationInput: document.querySelector("#locationInput"),
  locationStatus: document.querySelector("#locationStatus"),
  cityOptions: document.querySelector("#cityOptions"),
  useLocationButton: document.querySelector("#useLocationButton"),
  ratingTierFilters: document.querySelector("#ratingTierFilters"),
  featureFilters: document.querySelector("#featureFilters"),
  radiusSelect: document.querySelector("#radiusSelect"),
  resultsList: document.querySelector("#resultsList"),
  resultsSummary: document.querySelector("#resultsSummary"),
  mapPins: document.querySelector("#mapPins"),
  mapLocationLabel: document.querySelector("#mapLocationLabel"),
  mapCount: document.querySelector("#mapCount"),
  resetMapButton: document.querySelector("#resetMapButton"),
  cityGrid: document.querySelector("#cityGrid"),
  galleryDialog: document.querySelector("#galleryDialog"),
  galleryClose: document.querySelector("#galleryClose"),
  galleryPrev: document.querySelector("#galleryPrev"),
  galleryNext: document.querySelector("#galleryNext"),
  galleryImage: document.querySelector("#galleryImage"),
  galleryPosition: document.querySelector("#galleryPosition"),
  galleryTitle: document.querySelector("#galleryTitle"),
  galleryCaption: document.querySelector("#galleryCaption")
};

function loadSavedCafes() {
  try {
    return new Set(JSON.parse(localStorage.getItem("beanbound:saved") || "[]"));
  } catch {
    return new Set();
  }
}

function persistSavedCafes() {
  localStorage.setItem("beanbound:saved", JSON.stringify([...state.saved]));
}

function track(eventName, properties = {}) {
  window.BeanBoundAnalytics?.track(eventName, properties);
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function distanceInMiles(latitudeOne, longitudeOne, latitudeTwo, longitudeTwo) {
  const earthRadiusMiles = 3958.8;
  const latitudeDelta = toRadians(latitudeTwo - latitudeOne);
  const longitudeDelta = toRadians(longitudeTwo - longitudeOne);
  const firstLatitude = toRadians(latitudeOne);
  const secondLatitude = toRadians(latitudeTwo);
  const haversine =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(firstLatitude) * Math.cos(secondLatitude) * Math.sin(longitudeDelta / 2) ** 2;
  return earthRadiusMiles * 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
}

function formatDistance(distance) {
  if (distance < 0.1) return "Around the corner";
  if (distance < 10) return `${distance.toFixed(1)} mi away`;
  return `${Math.round(distance)} mi away`;
}

function formatTravelTime(distance) {
  if (distance <= 2.2) {
    const minutes = Math.max(2, Math.round((distance / 2.8) * 60));
    return `${minutes} min walk`;
  }
  if (distance <= 25) {
    return `${Math.max(5, Math.round((distance / 22) * 60))} min drive`;
  }
  return "Travel stop";
}

function directionsUrl(cafe) {
  const query = encodeURIComponent(`${cafe.name}, ${cafe.neighborhood}, ${cafe.city}`);
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

function ratingTierFor(rating) {
  if (rating >= 4.9) return ratingTiers.roadtrip;
  if (rating >= 4.8) return ratingTiers.drive;
  return ratingTiers.walk;
}

function rankedCafes() {
  const radius = state.radius === "all" ? Infinity : Number(state.radius);
  return cafeCatalog
    .map((cafe) => ({
      ...cafe,
      ratingTier: ratingTierFor(cafe.rating),
      distance: distanceInMiles(state.latitude, state.longitude, cafe.latitude, cafe.longitude)
    }))
    .filter((cafe) => cafe.distance <= radius)
    .filter((cafe) => state.ratingTier === "all" || cafe.ratingTier.id === state.ratingTier)
    .filter((cafe) => [...state.activeFeatures].every((feature) => cafe.features.includes(feature)))
    .sort((first, second) => first.distance - second.distance || second.rating - first.rating);
}

function cafeCard(cafe, index) {
  const article = document.createElement("article");
  article.className = "cafe-card";
  article.id = `cafe-${cafe.id}`;
  const tags = cafe.features.map((feature) => `<li>${featureLabels[feature]}</li>`).join("");
  const photos = cafe.photos
    .map(
      (photo, photoIndex) => `
        <button class="cafe-card__photo" type="button" data-photo-index="${photoIndex}" aria-label="Open photo ${photoIndex + 1} of ${cafe.name}">
          <img src="${photo.url}" alt="${photo.alt}" loading="lazy">
          ${photoIndex === 2 ? `<span class="photo-count">+${cafe.photoCount - 3} photos</span>` : ""}
        </button>
      `
    )
    .join("");
  const isSaved = state.saved.has(cafe.id);

  article.innerHTML = `
    <div class="cafe-card__gallery">${photos}</div>
    <div class="cafe-card__body">
      <div class="cafe-card__topline">
        <span class="distance-badge">${index === 0 ? "Closest · " : ""}${formatDistance(cafe.distance)}</span>
        <button class="save-button ${isSaved ? "is-saved" : ""}" type="button" aria-label="${isSaved ? "Remove" : "Save"} ${cafe.name}" aria-pressed="${isSaved}">${isSaved ? "♥" : "♡"}</button>
      </div>
      <h3>${cafe.name}</h3>
      <p class="cafe-card__location">${cafe.neighborhood} · ${cafe.city}</p>
      <div class="rating-line">
        <span class="stars" aria-label="${cafe.rating} out of 5 stars">★★★★★</span>
        <strong>${cafe.rating.toFixed(1)}</strong>
        <span>${cafe.reviewCount} reviews</span>
      </div>
      <div class="rating-tier rating-tier--${cafe.ratingTier.id}">
        <span>${cafe.ratingTier.label}</span>
        <small>${cafe.ratingTier.description}</small>
      </div>
      <ul class="cafe-tags">${tags}</ul>
      <p class="review-quote">“${cafe.review}” — ${cafe.reviewer}</p>
      <div class="cafe-card__footer">
        <span class="travel-time">${formatTravelTime(cafe.distance)} · estimated</span>
        <a class="directions-link" href="${directionsUrl(cafe)}" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
      </div>
    </div>
  `;

  article.querySelectorAll("[data-photo-index]").forEach((button) => {
    button.addEventListener("click", () => openGallery(cafe, Number(button.dataset.photoIndex)));
  });

  article.querySelector(".save-button").addEventListener("click", (event) => {
    if (state.saved.has(cafe.id)) {
      state.saved.delete(cafe.id);
    } else {
      state.saved.add(cafe.id);
    }
    persistSavedCafes();
    event.currentTarget.classList.toggle("is-saved", state.saved.has(cafe.id));
    event.currentTarget.textContent = state.saved.has(cafe.id) ? "♥" : "♡";
    event.currentTarget.setAttribute("aria-pressed", String(state.saved.has(cafe.id)));
    event.currentTarget.setAttribute("aria-label", `${state.saved.has(cafe.id) ? "Remove" : "Save"} ${cafe.name}`);
    track("save_cafe", { cafe_id: cafe.id, saved: state.saved.has(cafe.id) });
  });

  article.querySelector(".directions-link").addEventListener("click", () => {
    track("click_directions", {
      cafe_id: cafe.id,
      distance_miles: Number(cafe.distance.toFixed(1)),
      result_position: index + 1
    });
  });

  return article;
}

function renderResults() {
  const cafes = rankedCafes();
  dom.resultsList.replaceChildren();
  dom.mapLocationLabel.textContent = state.locationLabel;
  dom.mapCount.textContent = `${cafes.length} nearby`;

  const radiusLabel = state.radius === "all" ? "at any distance" : `within ${state.radius} miles`;
  const tierLabel = state.ratingTier === "all" ? "" : ` in the “${ratingTiers[state.ratingTier].label}” category`;
  dom.resultsSummary.textContent = cafes.length
    ? `${cafes.length} prototype ${cafes.length === 1 ? "cafe" : "cafes"}${tierLabel} ${radiusLabel} of ${state.locationLabel}.`
    : `No prototype cafes${tierLabel} ${radiusLabel} of ${state.locationLabel}.`;

  if (!cafes.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <h3>No cafes match these choices.</h3>
      <p>Try another rating category or expand the distance to see more prototype listings.</p>
      <button type="button">Reset category and show closest cafes</button>
    `;
    empty.querySelector("button").addEventListener("click", () => {
      state.radius = "all";
      state.ratingTier = "all";
      dom.radiusSelect.value = "all";
      syncRatingTierButtons();
      renderResults();
    });
    dom.resultsList.append(empty);
  } else {
    cafes.slice(0, 8).forEach((cafe, index) => dom.resultsList.append(cafeCard(cafe, index)));
  }

  renderMapPins(cafes.slice(0, 8));
  track("receive_matches", {
    location_label: state.locationLabel,
    result_count: cafes.length,
    radius: String(state.radius),
    rating_tier: state.ratingTier,
    active_features: [...state.activeFeatures].join(",")
  });
}

function syncRatingTierButtons() {
  dom.ratingTierFilters.querySelectorAll("[data-rating-tier]").forEach((button) => {
    const isActive = button.dataset.ratingTier === state.ratingTier;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function renderMapPins(cafes) {
  dom.mapPins.replaceChildren();
  const fallbackPositions = [
    [28, 28],
    [66, 24],
    [74, 61],
    [35, 73],
    [17, 56],
    [55, 43],
    [45, 17],
    [80, 42]
  ];

  cafes.forEach((cafe, index) => {
    const isLocal = cafe.distance < 50;
    const left = isLocal ? clamp(50 + (cafe.longitude - state.longitude) * 1550, 11, 89) : fallbackPositions[index][0];
    const top = isLocal ? clamp(50 - (cafe.latitude - state.latitude) * 1200, 11, 89) : fallbackPositions[index][1];
    const pin = document.createElement("button");
    pin.className = "map-pin";
    pin.type = "button";
    pin.style.left = `${left}%`;
    pin.style.top = `${top}%`;
    pin.setAttribute("aria-label", `${index + 1}. ${cafe.name}, ${formatDistance(cafe.distance)}`);
    pin.innerHTML = `<span>${index + 1}</span>`;
    pin.addEventListener("click", () => highlightCafe(cafe.id, pin));
    dom.mapPins.append(pin);
  });
}

function highlightCafe(cafeId, pin) {
  document.querySelectorAll(".cafe-card.is-highlighted").forEach((card) => card.classList.remove("is-highlighted"));
  document.querySelectorAll(".map-pin.is-active").forEach((mapPin) => mapPin.classList.remove("is-active"));
  const card = document.querySelector(`#cafe-${cafeId}`);
  if (!card) return;
  card.classList.add("is-highlighted");
  pin.classList.add("is-active");
  card.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderCities() {
  dom.cityOptions.innerHTML = cityDirectory.map((city) => `<option value="${city.label}"></option>`).join("");
  dom.cityGrid.replaceChildren();
  cityDirectory.forEach((city) => {
    const card = document.createElement("button");
    card.className = "city-card";
    card.type = "button";
    card.dataset.letter = city.label.charAt(0);
    card.innerHTML = `<span>${city.cafes.length} preview stops</span><strong>${city.label}</strong>`;
    card.setAttribute("aria-label", `Explore cafes near ${city.label}. ${city.blurb}`);
    card.addEventListener("click", () => chooseCity(city));
    dom.cityGrid.append(card);
  });
}

function chooseCity(city) {
  state.latitude = city.coordinates[0];
  state.longitude = city.coordinates[1];
  state.locationLabel = city.label;
  state.radius = 10;
  dom.radiusSelect.value = "10";
  dom.locationInput.value = city.label;
  dom.locationStatus.textContent = `Previewing ${city.label} with prototype listings.`;
  renderResults();
  document.querySelector("#nearby").scrollIntoView({ behavior: "smooth", block: "start" });
  track("search_location", { method: "city", location_label: city.label });
}

function findCity(value) {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return null;
  return cityDirectory.find((city) => {
    const label = city.label.toLowerCase();
    const cityName = label.split(",")[0];
    return label === normalized || cityName === normalized || label.startsWith(normalized);
  });
}

function requestCurrentLocation() {
  if (!navigator.geolocation) {
    dom.locationStatus.textContent = "This browser does not support location. Choose one of the preview cities instead.";
    return;
  }

  dom.useLocationButton.disabled = true;
  dom.useLocationButton.textContent = "Finding your location…";
  dom.locationStatus.textContent = "Checking what is close to you…";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.latitude = position.coords.latitude;
      state.longitude = position.coords.longitude;
      state.locationLabel = "Your current location";
      dom.locationInput.value = "";
      dom.locationStatus.textContent = "Location found. Cafe recommendations are now sorted nearest first.";
      dom.useLocationButton.disabled = false;
      dom.useLocationButton.innerHTML = '<span aria-hidden="true">◎</span> Update my current location';
      renderResults();
      document.querySelector("#nearby").scrollIntoView({ behavior: "smooth", block: "start" });
      track("search_location", { method: "geolocation", accuracy_meters: Math.round(position.coords.accuracy) });
    },
    (error) => {
      const denied = error.code === error.PERMISSION_DENIED;
      dom.locationStatus.textContent = denied
        ? "Location access was not enabled. Choose a preview city to keep exploring."
        : "We could not determine your location. Choose a preview city to keep exploring.";
      dom.useLocationButton.disabled = false;
      dom.useLocationButton.innerHTML = '<span aria-hidden="true">◎</span> Try my current location again';
      track("location_error", { code: error.code });
    },
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
  );
}

function openGallery(cafe, index) {
  state.galleryCafe = cafe;
  state.galleryIndex = index;
  updateGallery();
  if (typeof dom.galleryDialog.showModal === "function") {
    dom.galleryDialog.showModal();
  } else {
    dom.galleryDialog.setAttribute("open", "");
  }
  track("open_photo_gallery", { cafe_id: cafe.id, photo_position: index + 1 });
}

function updateGallery() {
  if (!state.galleryCafe) return;
  const photo = state.galleryCafe.photos[state.galleryIndex];
  dom.galleryImage.src = photo.url;
  dom.galleryImage.alt = photo.alt;
  dom.galleryPosition.textContent = `Photo ${state.galleryIndex + 1} of ${state.galleryCafe.photos.length}`;
  dom.galleryTitle.textContent = state.galleryCafe.name;
  dom.galleryCaption.textContent = photo.caption;
}

function moveGallery(direction) {
  if (!state.galleryCafe) return;
  state.galleryIndex =
    (state.galleryIndex + direction + state.galleryCafe.photos.length) % state.galleryCafe.photos.length;
  updateGallery();
}

dom.locationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = findCity(dom.locationInput.value);
  if (city) {
    chooseCity(city);
    return;
  }
  dom.locationStatus.textContent = "Try one of the eight preview cities listed in the search suggestions.";
  dom.locationInput.focus();
});

dom.useLocationButton.addEventListener("click", requestCurrentLocation);

dom.ratingTierFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rating-tier]");
  if (!button) return;
  state.ratingTier = button.dataset.ratingTier;
  syncRatingTierButtons();
  renderResults();
  track("filter_rating_tier", { rating_tier: state.ratingTier });
});

dom.featureFilters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-feature]");
  if (!button) return;
  const feature = button.dataset.feature;
  if (state.activeFeatures.has(feature)) {
    state.activeFeatures.delete(feature);
  } else {
    state.activeFeatures.add(feature);
  }
  button.classList.toggle("is-active", state.activeFeatures.has(feature));
  button.setAttribute("aria-pressed", String(state.activeFeatures.has(feature)));
  renderResults();
  track("filter_cafes", { feature, active: state.activeFeatures.has(feature) });
});

dom.radiusSelect.addEventListener("change", () => {
  state.radius = dom.radiusSelect.value;
  renderResults();
  track("change_radius", { radius: String(state.radius) });
});

dom.resetMapButton.addEventListener("click", () => {
  document.querySelectorAll(".cafe-card.is-highlighted").forEach((card) => card.classList.remove("is-highlighted"));
  document.querySelectorAll(".map-pin.is-active").forEach((pin) => pin.classList.remove("is-active"));
  dom.resultsList.scrollIntoView({ behavior: "smooth", block: "start" });
});

dom.galleryClose.addEventListener("click", () => dom.galleryDialog.close());
dom.galleryPrev.addEventListener("click", () => moveGallery(-1));
dom.galleryNext.addEventListener("click", () => moveGallery(1));
dom.galleryDialog.addEventListener("click", (event) => {
  if (event.target === dom.galleryDialog) dom.galleryDialog.close();
});
dom.galleryDialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") moveGallery(-1);
  if (event.key === "ArrowRight") moveGallery(1);
});

renderCities();
renderResults();
