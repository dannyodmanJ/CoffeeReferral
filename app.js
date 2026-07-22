const noteGroups = [
  {
    family: "Fruit",
    notes: ["berry", "citrus", "stone fruit", "tropical", "dried fruit"]
  },
  {
    family: "Sweet",
    notes: ["caramel", "honey", "vanilla", "brown sugar"]
  },
  {
    family: "Comfort",
    notes: ["chocolate", "nutty", "molasses", "spice"]
  },
  {
    family: "Bright",
    notes: ["floral", "tea-like", "winey", "herbal"]
  }
];

const coffeeCatalog = [
  {
    roaster: "Onyx Coffee Lab",
    coffee: "Southern Weather",
    city: "Rogers",
    state: "AR",
    region: "Southeast",
    website: "https://onyxcoffeelab.com",
    shopUrl: "https://onyxcoffeelab.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "caramel", "citrus"],
    process: "washed blend",
    price: "$$",
    adventure: 42,
    decaf: false,
    reason: "A polished house blend with enough sweetness for daily brewing and enough lift for filter coffee."
  },
  {
    roaster: "Black & White Coffee Roasters",
    coffee: "The Natural",
    city: "Raleigh",
    state: "NC",
    region: "Southeast",
    website: "https://www.blackwhiteroasters.com",
    shopUrl: "https://www.blackwhiteroasters.com/collections/all-things-coffee",
    roast: "light",
    brew: ["pour-over", "cold"],
    notes: ["berry", "winey", "tropical"],
    process: "natural blend",
    price: "$$",
    adventure: 88,
    decaf: false,
    reason: "Built for fruit-heavy cups, especially when you want the match to lean expressive and juicy."
  },
  {
    roaster: "Sey Coffee",
    coffee: "Rotating Washed Ethiopia",
    city: "Brooklyn",
    state: "NY",
    region: "Northeast",
    website: "https://www.seycoffee.com",
    shopUrl: "https://www.seycoffee.com/collections/coffee",
    roast: "light",
    brew: ["pour-over"],
    notes: ["floral", "citrus", "tea-like"],
    process: "washed single origin",
    price: "$$$",
    adventure: 76,
    decaf: false,
    reason: "A precise light-roast lane for delicate florals, citrus, and transparent filter brewing."
  },
  {
    roaster: "Passenger Coffee",
    coffee: "Agaro Reserve",
    city: "Lancaster",
    state: "PA",
    region: "Northeast",
    website: "https://www.passengercoffee.com",
    shopUrl: "https://www.passengercoffee.com/collections/coffee",
    roast: "light",
    brew: ["pour-over"],
    notes: ["stone fruit", "honey", "floral"],
    process: "washed single origin",
    price: "$$$",
    adventure: 72,
    decaf: false,
    reason: "Great for a clean, elegant filter cup with stone-fruit sweetness and a soft floral finish."
  },
  {
    roaster: "Little Wolf Coffee",
    coffee: "Keystone Blend",
    city: "Ipswich",
    state: "MA",
    region: "Northeast",
    website: "https://littlewolf.coffee",
    shopUrl: "https://littlewolf.coffee/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["chocolate", "caramel", "nutty"],
    process: "seasonal blend",
    price: "$$",
    adventure: 36,
    decaf: false,
    reason: "A friendly New England pick for balanced espresso, drip, and milk drinks."
  },
  {
    roaster: "George Howell Coffee",
    coffee: "Alchemy Espresso",
    city: "Acton",
    state: "MA",
    region: "Northeast",
    website: "https://georgehowellcoffee.com",
    shopUrl: "https://georgehowellcoffee.com/collections/all-coffee",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["caramel", "chocolate", "citrus"],
    process: "espresso blend",
    price: "$$",
    adventure: 40,
    decaf: false,
    reason: "A composed espresso pick with structure, sweetness, and enough brightness to stay lively."
  },
  {
    roaster: "Tandem Coffee",
    coffee: "Stoker",
    city: "Portland",
    state: "ME",
    region: "Northeast",
    website: "https://www.tandemcoffee.com",
    shopUrl: "https://www.tandemcoffee.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk", "cold"],
    notes: ["chocolate", "molasses", "spice"],
    process: "blend",
    price: "$$",
    adventure: 34,
    decaf: false,
    reason: "A sturdy, sweet blend that makes sense when comfort matters more than acidity."
  },
  {
    roaster: "Ceremony Coffee Roasters",
    coffee: "Thesis",
    city: "Annapolis",
    state: "MD",
    region: "Northeast",
    website: "https://ceremonycoffee.com",
    shopUrl: "https://ceremonycoffee.com/collections/all-coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["caramel", "citrus", "chocolate"],
    process: "blend",
    price: "$$",
    adventure: 45,
    decaf: false,
    reason: "A reliable all-rounder for someone who wants sweetness and structure without going dark."
  },
  {
    roaster: "Counter Culture Coffee",
    coffee: "Hologram",
    city: "Durham",
    state: "NC",
    region: "Southeast",
    website: "https://counterculturecoffee.com",
    shopUrl: "https://counterculturecoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["berry", "chocolate", "dried fruit"],
    process: "seasonal blend",
    price: "$$",
    adventure: 58,
    decaf: false,
    reason: "A sweet and fruit-toned blend that bridges classic chocolate and modern fruit character."
  },
  {
    roaster: "Blue Bottle Coffee",
    coffee: "Hayes Valley Espresso",
    city: "Oakland",
    state: "CA",
    region: "West Coast",
    website: "https://bluebottlecoffee.com",
    shopUrl: "https://bluebottlecoffee.com/us/eng/shop/coffee",
    roast: "dark",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "molasses", "spice"],
    process: "espresso blend",
    price: "$$",
    adventure: 28,
    decaf: false,
    reason: "A deeper espresso direction for dense sweetness, heavy body, and milk drink performance."
  },
  {
    roaster: "Verve Coffee Roasters",
    coffee: "Sermon",
    city: "Santa Cruz",
    state: "CA",
    region: "West Coast",
    website: "https://www.vervecoffee.com",
    shopUrl: "https://www.vervecoffee.com/collections/all-coffee",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["berry", "chocolate", "vanilla"],
    process: "blend",
    price: "$$",
    adventure: 52,
    decaf: false,
    reason: "A West Coast staple for fruit-leaning espresso that still has chocolate weight."
  },
  {
    roaster: "Cat & Cloud Coffee",
    coffee: "The Answer",
    city: "Santa Cruz",
    state: "CA",
    region: "West Coast",
    website: "https://catandcloud.com",
    shopUrl: "https://catandcloud.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk", "cold"],
    notes: ["chocolate", "caramel", "nutty"],
    process: "blend",
    price: "$$",
    adventure: 36,
    decaf: false,
    reason: "A crowd-friendly answer for rounded sweetness, approachable espresso, and easy daily cups."
  },
  {
    roaster: "Sightglass Coffee",
    coffee: "Blueboon",
    city: "San Francisco",
    state: "CA",
    region: "West Coast",
    website: "https://sightglasscoffee.com",
    shopUrl: "https://sightglasscoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["chocolate", "citrus", "stone fruit"],
    process: "blend",
    price: "$$",
    adventure: 48,
    decaf: false,
    reason: "A balanced San Francisco blend with enough fruit to keep the classic profile interesting."
  },
  {
    roaster: "Ritual Coffee Roasters",
    coffee: "Sweet Tooth",
    city: "San Francisco",
    state: "CA",
    region: "West Coast",
    website: "https://ritualcoffee.com",
    shopUrl: "https://ritualcoffee.com/collections/coffee",
    roast: "light",
    brew: ["pour-over"],
    notes: ["honey", "citrus", "floral"],
    process: "seasonal blend",
    price: "$$",
    adventure: 64,
    decaf: false,
    reason: "A brighter filter option for honeyed sweetness and a cleaner specialty profile."
  },
  {
    roaster: "Equator Coffees",
    coffee: "Eye of the Tiger",
    city: "San Rafael",
    state: "CA",
    region: "West Coast",
    website: "https://www.equatorcoffees.com",
    shopUrl: "https://www.equatorcoffees.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "caramel", "spice"],
    process: "espresso blend",
    price: "$$",
    adventure: 38,
    decaf: false,
    reason: "A grounded espresso profile with smooth sweetness and reliable milk compatibility."
  },
  {
    roaster: "Klatch Coffee",
    coffee: "WBC Espresso",
    city: "Rancho Cucamonga",
    state: "CA",
    region: "West Coast",
    website: "https://www.klatchcoffee.com",
    shopUrl: "https://www.klatchcoffee.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "berry", "spice"],
    process: "espresso blend",
    price: "$$",
    adventure: 46,
    decaf: false,
    reason: "A competition-style espresso profile with fruit depth and enough body for milk."
  },
  {
    roaster: "Heart Coffee Roasters",
    coffee: "Stereo Blend",
    city: "Portland",
    state: "OR",
    region: "Pacific Northwest",
    website: "https://www.heartroasters.com",
    shopUrl: "https://www.heartroasters.com/collections/coffee",
    roast: "light",
    brew: ["pour-over", "espresso"],
    notes: ["citrus", "honey", "stone fruit"],
    process: "blend",
    price: "$$",
    adventure: 62,
    decaf: false,
    reason: "A light, sweet Portland blend for clean cups with citrus and stone-fruit lift."
  },
  {
    roaster: "Coava Coffee Roasters",
    coffee: "Kilenso",
    city: "Portland",
    state: "OR",
    region: "Pacific Northwest",
    website: "https://coavacoffee.com",
    shopUrl: "https://coavacoffee.com/collections/coffee",
    roast: "light",
    brew: ["pour-over"],
    notes: ["floral", "tea-like", "citrus"],
    process: "washed single origin",
    price: "$$$",
    adventure: 78,
    decaf: false,
    reason: "A refined choice when you want tea-like clarity and high-definition aromatics."
  },
  {
    roaster: "Proud Mary Coffee",
    coffee: "Humbler",
    city: "Portland",
    state: "OR",
    region: "Pacific Northwest",
    website: "https://proudmarycoffee.com",
    shopUrl: "https://proudmarycoffee.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "caramel", "dried fruit"],
    process: "blend",
    price: "$$",
    adventure: 44,
    decaf: false,
    reason: "A grounded espresso pick from a roaster that also leaves room for adventurous seasonal bags."
  },
  {
    roaster: "Olympia Coffee",
    coffee: "Big Truck",
    city: "Olympia",
    state: "WA",
    region: "Pacific Northwest",
    website: "https://www.olympiacoffee.com",
    shopUrl: "https://www.olympiacoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "berry", "caramel"],
    process: "blend",
    price: "$$",
    adventure: 50,
    decaf: false,
    reason: "A versatile Pacific Northwest blend with sweetness, balance, and broad brew-method coverage."
  },
  {
    roaster: "Kuma Coffee",
    coffee: "Bright Blend",
    city: "Seattle",
    state: "WA",
    region: "Pacific Northwest",
    website: "https://www.kumacoffee.com",
    shopUrl: "https://www.kumacoffee.com/collections/coffee",
    roast: "light",
    brew: ["pour-over"],
    notes: ["berry", "citrus", "floral"],
    process: "seasonal blend",
    price: "$$",
    adventure: 70,
    decaf: false,
    reason: "A good fit for drinkers chasing lively acidity, florals, and colorful filter cups."
  },
  {
    roaster: "Elm Coffee Roasters",
    coffee: "Nine Swans",
    city: "Seattle",
    state: "WA",
    region: "Pacific Northwest",
    website: "https://elmcoffeeroasters.com",
    shopUrl: "https://elmcoffeeroasters.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["chocolate", "stone fruit", "caramel"],
    process: "blend",
    price: "$$",
    adventure: 48,
    decaf: false,
    reason: "A calm, sweet blend that stays specialty without demanding a fussy recipe."
  },
  {
    roaster: "Ruby Coffee Roasters",
    coffee: "Creamery",
    city: "Nelsonville",
    state: "WI",
    region: "Midwest",
    website: "https://rubycoffeeroasters.com",
    shopUrl: "https://rubycoffeeroasters.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["caramel", "nutty", "chocolate"],
    process: "blend",
    price: "$$",
    adventure: 36,
    decaf: false,
    reason: "A Midwest comfort pick with creamy texture, nutty sweetness, and daily-driver range."
  },
  {
    roaster: "Intelligentsia Coffee",
    coffee: "Black Cat Classic",
    city: "Chicago",
    state: "IL",
    region: "Midwest",
    website: "https://www.intelligentsia.com",
    shopUrl: "https://www.intelligentsia.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "molasses", "caramel"],
    process: "espresso blend",
    price: "$$",
    adventure: 32,
    decaf: false,
    reason: "A classic third-wave espresso lane for syrupy sweetness and steady milk drinks."
  },
  {
    roaster: "Metric Coffee",
    coffee: "Mothership",
    city: "Chicago",
    state: "IL",
    region: "Midwest",
    website: "https://metriccoffee.com",
    shopUrl: "https://metriccoffee.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["chocolate", "vanilla", "stone fruit"],
    process: "blend",
    price: "$$",
    adventure: 50,
    decaf: false,
    reason: "A flexible Chicago blend with approachable sweetness and a little fruit around the edges."
  },
  {
    roaster: "Madcap Coffee",
    coffee: "Third Coast",
    city: "Grand Rapids",
    state: "MI",
    region: "Midwest",
    website: "https://www.madcapcoffee.com",
    shopUrl: "https://www.madcapcoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["citrus", "caramel", "chocolate"],
    process: "blend",
    price: "$$",
    adventure: 46,
    decaf: false,
    reason: "A tidy specialty blend for drinkers who want sweetness, balance, and a gentle citrus edge."
  },
  {
    roaster: "PT's Coffee",
    coffee: "Flying Monkey",
    city: "Topeka",
    state: "KS",
    region: "Midwest",
    website: "https://ptscoffee.com",
    shopUrl: "https://ptscoffee.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "caramel", "dried fruit"],
    process: "espresso blend",
    price: "$$",
    adventure: 40,
    decaf: false,
    reason: "A sweet espresso blend with dried-fruit depth and a broad comfort zone."
  },
  {
    roaster: "Huckleberry Roasters",
    coffee: "Blue Orchid",
    city: "Denver",
    state: "CO",
    region: "Mountain",
    website: "https://huckleberryroasters.com",
    shopUrl: "https://huckleberryroasters.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["berry", "chocolate", "caramel"],
    process: "blend",
    price: "$$",
    adventure: 54,
    decaf: false,
    reason: "A playful Denver pick for sweetness, berry hints, and a modern but approachable profile."
  },
  {
    roaster: "Sweet Bloom Coffee",
    coffee: "Hometown",
    city: "Lakewood",
    state: "CO",
    region: "Mountain",
    website: "https://sweetbloomcoffee.com",
    shopUrl: "https://sweetbloomcoffee.com/collections/coffee",
    roast: "light",
    brew: ["pour-over", "espresso"],
    notes: ["citrus", "honey", "floral"],
    process: "blend",
    price: "$$",
    adventure: 66,
    decaf: false,
    reason: "A bright Mountain-region option for clean sweetness and a lighter roast preference."
  },
  {
    roaster: "Greater Goods Coffee",
    coffee: "Spark",
    city: "Austin",
    state: "TX",
    region: "Texas",
    website: "https://greatergoodsroasting.com",
    shopUrl: "https://greatergoodsroasting.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "citrus", "caramel"],
    process: "blend",
    price: "$$",
    adventure: 46,
    decaf: false,
    reason: "A balanced Austin selection with enough brightness for filter and enough body for espresso."
  },
  {
    roaster: "Merit Coffee",
    coffee: "Andino Leal",
    city: "San Antonio",
    state: "TX",
    region: "Texas",
    website: "https://meritcoffee.com",
    shopUrl: "https://meritcoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["stone fruit", "caramel", "chocolate"],
    process: "washed single origin",
    price: "$$",
    adventure: 56,
    decaf: false,
    reason: "A Texas match for clean sweetness and a single-origin profile that still feels approachable."
  },
  {
    roaster: "Panther Coffee",
    coffee: "West Coast Espresso",
    city: "Miami",
    state: "FL",
    region: "Southeast",
    website: "https://www.panthercoffee.com",
    shopUrl: "https://www.panthercoffee.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "caramel", "spice"],
    process: "espresso blend",
    price: "$$",
    adventure: 38,
    decaf: false,
    reason: "A Miami espresso option for classic sweetness, spice, and milk drink dependability."
  },
  {
    roaster: "PERC Coffee",
    coffee: "Brazil Daterra",
    city: "Savannah",
    state: "GA",
    region: "Southeast",
    website: "https://perccoffee.com",
    shopUrl: "https://perccoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "cold"],
    notes: ["nutty", "chocolate", "caramel"],
    process: "pulped natural",
    price: "$$",
    adventure: 34,
    decaf: false,
    reason: "A smooth Southern pick for lower-acid comfort, nuttiness, and cold-brew friendliness."
  },
  {
    roaster: "Brandywine Coffee Roasters",
    coffee: "Orbital Motion",
    city: "Wilmington",
    state: "DE",
    region: "Northeast",
    website: "https://www.brandywinecoffeeroasters.com",
    shopUrl: "https://www.brandywinecoffeeroasters.com/collections/all-coffee-1",
    roast: "light",
    brew: ["pour-over"],
    notes: ["tropical", "berry", "winey"],
    process: "experimental",
    price: "$$$",
    adventure: 92,
    decaf: false,
    reason: "A maximalist recommendation for colorful processing, loud fruit, and adventurous cups."
  },
  {
    roaster: "ReAnimator Coffee",
    coffee: "Foundation Blend",
    city: "Philadelphia",
    state: "PA",
    region: "Northeast",
    website: "https://www.reanimatorcoffee.com",
    shopUrl: "https://www.reanimatorcoffee.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["chocolate", "nutty", "caramel"],
    process: "blend",
    price: "$$",
    adventure: 35,
    decaf: false,
    reason: "A practical Philly blend for a classic cup with enough specialty polish."
  },
  {
    roaster: "Red Rooster Coffee",
    coffee: "Funky Chicken",
    city: "Floyd",
    state: "VA",
    region: "Southeast",
    website: "https://www.redroostercoffee.com",
    shopUrl: "https://www.redroostercoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["berry", "tropical", "winey"],
    process: "natural blend",
    price: "$$",
    adventure: 82,
    decaf: false,
    reason: "A fruit-forward Virginia pick when your note choices point toward fermented, juicy flavors."
  },
  {
    roaster: "Dune Coffee Roasters",
    coffee: "Zip Zinger",
    city: "Santa Barbara",
    state: "CA",
    region: "West Coast",
    website: "https://www.dunecoffee.com",
    shopUrl: "https://www.dunecoffee.com/collections/coffee",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["chocolate", "citrus", "caramel"],
    process: "blend",
    price: "$$",
    adventure: 48,
    decaf: false,
    reason: "A sunny California espresso blend with enough citrus to keep the profile crisp."
  },
  {
    roaster: "Methodical Coffee",
    coffee: "Belly Warmer",
    city: "Greenville",
    state: "SC",
    region: "Southeast",
    website: "https://methodicalcoffee.com",
    shopUrl: "https://methodicalcoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "caramel", "spice"],
    process: "blend",
    price: "$$",
    adventure: 36,
    decaf: false,
    reason: "A comforting Southeast blend for sweetness, mellow spice, and low-drama brewing."
  },
  {
    roaster: "Small Planes Coffee",
    coffee: "Arboretum",
    city: "Washington",
    state: "DC",
    region: "Northeast",
    website: "https://smallplanescoffee.com",
    shopUrl: "https://smallplanescoffee.com/collections/coffee",
    roast: "light",
    brew: ["pour-over"],
    notes: ["citrus", "floral", "tea-like"],
    process: "washed blend",
    price: "$$",
    adventure: 68,
    decaf: false,
    reason: "A clean DC filter pick for floral aromatics and crisp citrus."
  },
  {
    roaster: "Camber Coffee",
    coffee: "Skyline",
    city: "Bellingham",
    state: "WA",
    region: "Pacific Northwest",
    website: "https://cambercoffee.com",
    shopUrl: "https://cambercoffee.com/collections/coffee",
    roast: "light",
    brew: ["pour-over", "espresso"],
    notes: ["honey", "stone fruit", "citrus"],
    process: "blend",
    price: "$$",
    adventure: 60,
    decaf: false,
    reason: "A graceful Northwest pick for bright sweetness and clean daily filter brewing."
  },
  {
    roaster: "Counter Culture Coffee",
    coffee: "Slow Motion Decaf",
    city: "Durham",
    state: "NC",
    region: "Southeast",
    website: "https://counterculturecoffee.com",
    shopUrl: "https://counterculturecoffee.com/collections/coffee",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "caramel", "nutty"],
    process: "decaf",
    price: "$$",
    adventure: 28,
    decaf: true,
    reason: "A decaf-ready recommendation that keeps sweetness and everyday brew flexibility in play."
  },
  {
    roaster: "Verve Coffee Roasters",
    coffee: "Vancouver Swiss Water Decaf",
    city: "Santa Cruz",
    state: "CA",
    region: "West Coast",
    website: "https://www.vervecoffee.com",
    shopUrl: "https://www.vervecoffee.com/collections/decaf",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "brown sugar", "caramel"],
    process: "decaf",
    price: "$$",
    adventure: 30,
    decaf: true,
    reason: "A West Coast decaf path for sweet, rounded cups without flattening the coffee."
  }
];

const state = {
  wheelSelections: new Set(),
  notes: new Set(),
  roast: "any",
  brew: "any",
  region: "any",
  budget: "any",
  adventure: 55,
  decaf: false
};

const noteFamilyByNote = noteGroups.reduce((map, group) => {
  group.notes.forEach((note) => {
    map[note] = group.family;
  });
  return map;
}, {});

const dom = {
  flavorWheel: document.querySelector("#flavorWheel"),
  selectedFlavorList: document.querySelector("#selectedFlavorList"),
  selectedCount: document.querySelector("#selectedCount"),
  clearFlavorButton: document.querySelector("#clearFlavorButton"),
  selectionSummary: document.querySelector("#selectionSummary"),
  resultHeadline: document.querySelector("#resultHeadline"),
  primaryMatch: document.querySelector("#primaryMatch"),
  resultList: document.querySelector("#resultList"),
  roasterGrid: document.querySelector("#roasterGrid"),
  adventureRange: document.querySelector("#adventureRange"),
  adventureLabel: document.querySelector("#adventureLabel"),
  decafToggle: document.querySelector("#decafToggle"),
  regionSelect: document.querySelector("#regionSelect"),
  budgetSelect: document.querySelector("#budgetSelect"),
  resetButton: document.querySelector("#resetButton")
};

let wheelController;

function titleCase(value) {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text) {
    element.textContent = text;
  }
  return element;
}

function syncCanonicalNotes() {
  state.notes = CoffeeFlavorWheel.notesForSelections(state.wheelSelections);
}

function toggleWheelSelection(selection) {
  if (state.wheelSelections.has(selection)) {
    state.wheelSelections.delete(selection);
  } else {
    state.wheelSelections.add(selection);
  }

  syncCanonicalNotes();
  wheelController.update(state.wheelSelections);
  renderSelectedFlavors();
  updateRecommendations();
}

function renderSelectedFlavors() {
  dom.selectedFlavorList.innerHTML = "";
  dom.clearFlavorButton.hidden = state.wheelSelections.size === 0;

  if (state.wheelSelections.size === 0) {
    dom.selectedFlavorList.append(createElement("p", "", "No flavors selected yet."));
    return;
  }

  Array.from(state.wheelSelections).forEach((selection) => {
    const chip = createElement("button", "selected-flavor", `${selection} ×`);
    chip.type = "button";
    chip.setAttribute("aria-label", `Remove ${selection}`);
    chip.addEventListener("click", () => toggleWheelSelection(selection));
    dom.selectedFlavorList.append(chip);
  });
}

function renderFlavorWheel() {
  wheelController = CoffeeFlavorWheel.create({
    container: dom.flavorWheel,
    selections: state.wheelSelections,
    onToggle: toggleWheelSelection
  });
}

function scoreCoffee(coffee) {
  let score = 32;
  const selectedNotes = Array.from(state.notes);
  const matchedNotes = coffee.notes.filter((note) => state.notes.has(note));

  score += matchedNotes.length * 18;

  selectedNotes.forEach((note) => {
    const sameFamily = coffee.notes.some((coffeeNote) => noteFamilyByNote[coffeeNote] === noteFamilyByNote[note]);
    if (!coffee.notes.includes(note) && sameFamily) {
      score += 6;
    }
  });

  if (selectedNotes.length === 0) {
    score += 7;
  }

  if (state.roast === "any") {
    score += 4;
  } else if (state.roast === coffee.roast) {
    score += 14;
  } else if (Math.abs(roastWeight(state.roast) - roastWeight(coffee.roast)) === 1) {
    score += 5;
  } else {
    score -= 8;
  }

  if (state.brew === "any") {
    score += 4;
  } else if (coffee.brew.includes(state.brew)) {
    score += 14;
  } else {
    score -= 10;
  }

  if (state.region !== "any") {
    score += coffee.region === state.region ? 10 : -8;
  }

  if (state.budget !== "any") {
    score += coffee.price === state.budget ? 8 : -6;
  }

  if (state.decaf) {
    score += coffee.decaf ? 30 : -90;
  }

  const adventureDelta = Math.abs(coffee.adventure - state.adventure);
  score += Math.max(0, 18 - adventureDelta / 4);

  return Math.max(1, Math.min(99, Math.round(score)));
}

function roastWeight(roast) {
  return {
    light: 1,
    medium: 2,
    dark: 3
  }[roast] || 2;
}

function rankCatalog() {
  return coffeeCatalog
    .map((coffee) => ({
      ...coffee,
      score: scoreCoffee(coffee)
    }))
    .sort((first, second) => second.score - first.score);
}

function matchReason(coffee) {
  const matchedNotes = coffee.notes.filter((note) => state.notes.has(note));
  if (matchedNotes.length > 0) {
    return `Matches your ${matchedNotes.map(titleCase).join(", ")} direction with a ${coffee.process} profile. ${coffee.reason}`;
  }
  if (state.decaf && coffee.decaf) {
    return `Keeps the search decaf-ready while matching a ${coffee.roast} roast and ${coffee.price} budget. ${coffee.reason}`;
  }
  if (state.brew !== "any" && coffee.brew.includes(state.brew)) {
    return `A strong ${state.brew} fit with ${coffee.notes.map(titleCase).slice(0, 3).join(", ")} notes. ${coffee.reason}`;
  }
  return coffee.reason;
}

function renderCard(coffee, isPrimary = false) {
  const card = createElement("article", `result-card ${isPrimary ? "result-card--primary" : "result-card--small"}`);
  const content = createElement("div", "result-content");
  const meta = createElement("div", "result-meta");
  meta.append(createElement("span", "pill", `${coffee.score}% match`));
  meta.append(createElement("span", "pill pill--coral", titleCase(coffee.roast)));
  meta.append(createElement("span", "pill pill--blue", coffee.price));
  content.append(meta);

  const title = createElement(isPrimary ? "h3" : "h3", isPrimary ? "coffee-title" : "", coffee.coffee);
  content.append(title);

  const roaster = createElement("p", "roaster-name", `${coffee.roaster} | ${coffee.city}, ${coffee.state}`);
  content.append(roaster);

  content.append(createElement("p", "result-reason", matchReason(coffee)));

  const tags = createElement("ul", "card-tags");
  coffee.notes.forEach((note) => {
    tags.append(createElement("li", "", titleCase(note)));
  });
  content.append(tags);

  const foot = createElement("div", "card-foot");
  foot.append(createElement("span", "roaster-location", `${coffee.process} | ${coffee.region}`));

  const shopLink = createElement("a", "shop-link", "Open roaster shop");
  shopLink.href = coffee.shopUrl;
  shopLink.target = "_blank";
  shopLink.rel = "noreferrer";
  foot.append(shopLink);
  content.append(foot);

  card.append(content);

  if (isPrimary) {
    const scoreDial = createElement("div", "score-dial");
    const scoreValue = createElement("strong", "", String(coffee.score));
    const scoreLabel = createElement("span", "", "match");
    scoreDial.append(scoreValue, scoreLabel);
    card.append(scoreDial);
  }

  return card;
}

function updateRecommendations() {
  const ranked = rankCatalog();
  const [primary, ...rest] = ranked;

  dom.selectedCount.textContent = `${state.wheelSelections.size} selected`;
  dom.adventureLabel.textContent = adventureLabel(state.adventure);
  dom.resultHeadline.textContent = primary ? `${primary.coffee} from ${primary.roaster}` : "No match found";
  dom.selectionSummary.textContent = selectionSummary();

  dom.primaryMatch.innerHTML = "";
  dom.resultList.innerHTML = "";

  if (!primary) {
    return;
  }

  dom.primaryMatch.append(renderCard(primary, true));
  rest.slice(0, 6).forEach((coffee) => {
    dom.resultList.append(renderCard(coffee));
  });
}

function selectionSummary() {
  const parts = [];
  if (state.wheelSelections.size > 0) {
    const selections = Array.from(state.wheelSelections);
    const visibleSelections = selections.slice(0, 3).join(", ");
    const remainingCount = selections.length - 3;
    parts.push(remainingCount > 0 ? `${visibleSelections} +${remainingCount}` : visibleSelections);
  }
  if (state.roast !== "any") {
    parts.push(`${state.roast} roast`);
  }
  if (state.brew !== "any") {
    parts.push(state.brew);
  }
  if (state.region !== "any") {
    parts.push(state.region);
  }
  if (state.decaf) {
    parts.push("decaf-ready");
  }
  return parts.length > 0 ? parts.join(" | ") : "Choose a few notes to sharpen the ranking.";
}

function adventureLabel(value) {
  if (value < 25) {
    return "Comfort";
  }
  if (value < 55) {
    return "Balanced";
  }
  if (value < 80) {
    return "Curious";
  }
  return "Wild";
}

function renderRoasterIndex() {
  const uniqueRoasters = Array.from(
    new Map(coffeeCatalog.map((coffee) => [coffee.roaster, coffee])).values()
  ).sort((first, second) => first.roaster.localeCompare(second.roaster));

  dom.roasterGrid.innerHTML = "";

  uniqueRoasters.forEach((coffee) => {
    const tile = createElement("article", "roaster-tile");
    tile.append(createElement("h3", "", coffee.roaster));
    tile.append(createElement("p", "", `${coffee.city}, ${coffee.state} | ${coffee.region}`));
    const link = createElement("a", "", "Visit shop");
    link.href = coffee.shopUrl;
    link.target = "_blank";
    link.rel = "noreferrer";
    tile.append(link);
    dom.roasterGrid.append(tile);
  });

  document.querySelector('[data-stat="roasters"]').textContent = uniqueRoasters.length;
  document.querySelector('[data-stat="states"]').textContent = new Set(coffeeCatalog.map((coffee) => coffee.state)).size;
  document.querySelector('[data-stat="notes"]').textContent = CoffeeFlavorWheel.leafCount;
}

function bindChoiceGroups() {
  document.querySelectorAll("[data-choice-group]").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("button");
      if (!button) {
        return;
      }

      const key = group.dataset.choiceGroup;
      state[key] = button.dataset.value;
      group.querySelectorAll("button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      updateRecommendations();
    });
  });
}

function bindFormControls() {
  dom.regionSelect.addEventListener("change", () => {
    state.region = dom.regionSelect.value;
    updateRecommendations();
  });

  dom.budgetSelect.addEventListener("change", () => {
    state.budget = dom.budgetSelect.value;
    updateRecommendations();
  });

  dom.adventureRange.addEventListener("input", () => {
    state.adventure = Number(dom.adventureRange.value);
    updateRecommendations();
  });

  dom.decafToggle.addEventListener("change", () => {
    state.decaf = dom.decafToggle.checked;
    updateRecommendations();
  });

  dom.resetButton.addEventListener("click", resetMatcher);
  dom.clearFlavorButton.addEventListener("click", clearFlavorSelections);
}

function clearFlavorSelections() {
  state.wheelSelections.clear();
  syncCanonicalNotes();
  wheelController.update(state.wheelSelections);
  renderSelectedFlavors();
  updateRecommendations();
}

function resetMatcher() {
  state.wheelSelections.clear();
  state.notes.clear();
  state.roast = "any";
  state.brew = "any";
  state.region = "any";
  state.budget = "any";
  state.adventure = 55;
  state.decaf = false;

  document.querySelectorAll("[data-choice-group]").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.value === "any");
    });
  });

  dom.regionSelect.value = "any";
  dom.budgetSelect.value = "any";
  dom.adventureRange.value = "55";
  dom.decafToggle.checked = false;

  wheelController.update(state.wheelSelections);
  renderSelectedFlavors();
  updateRecommendations();
}

renderFlavorWheel();
renderSelectedFlavors();
renderRoasterIndex();
bindChoiceGroups();
bindFormControls();
updateRecommendations();
