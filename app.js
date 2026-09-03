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
    productUrl: "https://onyxcoffeelab.com/products/southern-weather",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "stone fruit", "nutty", "citrus"],
    process: "washed blend",
    price: "$$",
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
    productUrl: "https://www.blackwhiteroasters.com/products/the-natural",
    roast: "light",
    brew: ["pour-over", "cold"],
    notes: ["berry", "chocolate", "citrus"],
    process: "natural blend",
    price: "$$",
    decaf: false,
    reason: "Built for fruit-heavy cups, especially when you want the match to lean expressive and juicy."
  },
  {
    roaster: "Sey Coffee",
    coffee: "Siti",
    city: "Brooklyn",
    state: "NY",
    region: "Northeast",
    website: "https://www.seycoffee.com",
    productUrl: "https://www.seycoffee.com/collections/coffee/products/2026-siti-ethiopia",
    roast: "light",
    brew: ["pour-over"],
    notes: ["stone fruit", "floral", "citrus"],
    process: "washed single origin",
    price: "$$$",
    decaf: false,
    reason: "A precise light-roast lane for delicate florals, citrus, and transparent filter brewing."
  },
  {
    roaster: "Passenger Coffee",
    coffee: "Agaro",
    city: "Lancaster",
    state: "PA",
    region: "Northeast",
    website: "https://drinkpassenger.com",
    productUrl: "https://drinkpassenger.com/products/agaro",
    roast: "light",
    brew: ["pour-over"],
    notes: ["floral", "stone fruit", "citrus"],
    process: "washed single origin",
    price: "$$$",
    decaf: false,
    reason: "Great for a clean, elegant filter cup with stone-fruit sweetness and a soft floral finish."
  },
  {
    roaster: "Little Wolf Coffee",
    coffee: "Companion Blend",
    city: "Ipswich",
    state: "MA",
    region: "Northeast",
    website: "https://littlewolf.coffee",
    productUrl: "https://littlewolf.coffee/collections/coffee/products/companion-blend-subscription",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["berry", "chocolate", "caramel"],
    process: "seasonal blend",
    price: "$$",
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
    productUrl: "https://georgehowellcoffee.com/products/alchemy-espresso-alc-001",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "caramel", "berry", "nutty"],
    process: "espresso blend",
    price: "$$",
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
    productUrl: "https://www.tandemcoffee.com/products/stoker-kinda-dark",
    roast: "medium",
    brew: ["espresso", "milk", "cold"],
    notes: ["chocolate", "honey", "berry"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://ceremonycoffee.com/products/thesis",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "brown sugar", "caramel"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://counterculturecoffee.com/products/12-oz-hologram",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["berry", "chocolate", "dried fruit"],
    process: "seasonal blend",
    price: "$$",
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
    productUrl: "https://bluebottlecoffee.com/us/eng/product/hayes-valley-espresso",
    roast: "dark",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "citrus", "brown sugar"],
    process: "espresso blend",
    price: "$$",
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
    productUrl: "https://www.vervecoffee.com/products/sermon",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["berry", "chocolate", "nutty"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://catandcloud.com/products/answer",
    roast: "medium",
    brew: ["espresso", "milk", "cold"],
    notes: ["berry", "chocolate", "caramel"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://sightglasscoffee.com/products/blueboon-organic-blend",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["chocolate", "citrus", "floral"],
    process: "blend",
    price: "$$",
    decaf: false,
    reason: "A balanced San Francisco blend with enough fruit to keep the classic profile interesting."
  },
  {
    roaster: "Ritual Coffee Roasters",
    coffee: "Sweet Tooth Espresso Sochiapam",
    city: "San Francisco",
    state: "CA",
    region: "West Coast",
    website: "https://ritualcoffee.com",
    productUrl: "https://ritualcoffee.com/shop/coffee/sweet-tooth-espresso-sochiapam/",
    roast: "light",
    brew: ["espresso"],
    notes: ["stone fruit", "citrus", "chocolate"],
    process: "washed single origin",
    price: "$$",
    decaf: false,
    reason: "A rotating single-origin espresso for bright stone fruit, citrus, and a chocolate finish."
  },
  {
    roaster: "Equator Coffees",
    coffee: "Eye of the Tiger",
    city: "San Rafael",
    state: "CA",
    region: "West Coast",
    website: "https://www.equatorcoffees.com",
    productUrl: "https://www.equatorcoffees.com/products/eye-of-the-tiger-espresso",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["berry", "citrus", "spice"],
    process: "espresso blend",
    price: "$$",
    decaf: false,
    reason: "A seasonally evolving espresso with cherry-lime brightness, baking spice, and a crisp finish."
  },
  {
    roaster: "Klatch Coffee",
    coffee: "WBC Espresso",
    city: "Rancho Cucamonga",
    state: "CA",
    region: "West Coast",
    website: "https://www.klatchcoffee.com",
    productUrl: "https://www.klatchcoffee.com/collections/espresso/products/wbc-worlds-best-espresso",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "berry", "spice"],
    process: "espresso blend",
    price: "$$",
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
    productUrl: "https://www.heartroasters.com/products/stereo-seasonal-blend",
    roast: "light",
    brew: ["pour-over", "espresso"],
    notes: ["berry", "vanilla", "chocolate"],
    process: "blend",
    price: "$$",
    decaf: false,
    reason: "A light Portland blend with cherry, sweet cream, and fudge for espresso or filter."
  },
  {
    roaster: "Coava Coffee Roasters",
    coffee: "Kilenso",
    city: "Portland",
    state: "OR",
    region: "Pacific Northwest",
    website: "https://coavacoffee.com",
    productUrl: "https://shop.coavacoffee.com/products/kilenso",
    roast: "light",
    brew: ["pour-over"],
    notes: ["floral", "tea-like", "citrus"],
    process: "natural single origin",
    price: "$$$",
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
    productUrl: "https://proudmarycoffee.com/products/humbler-blend",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "caramel", "dried fruit"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://www.olympiacoffee.com/products/big-truck",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "berry", "caramel"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://www.kumacoffee.com/products/coffee-bright-blend",
    roast: "light",
    brew: ["pour-over"],
    notes: ["berry", "citrus", "floral"],
    process: "seasonal blend",
    price: "$$",
    decaf: false,
    reason: "A good fit for drinkers chasing lively acidity, florals, and colorful filter cups."
  },
  {
    roaster: "Elm Coffee Roasters",
    coffee: "9 Swans Seasonal Coffee",
    city: "Seattle",
    state: "WA",
    region: "Pacific Northwest",
    website: "https://elmcoffeeroasters.com",
    productUrl: "https://elmcoffeeroasters.com/products/9-swans-seasonal-coffee-2",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["chocolate", "berry", "caramel"],
    process: "washed single origin",
    price: "$$",
    decaf: false,
    reason: "A rotating single origin with caramelized sweetness that stays approachable as espresso or filter."
  },
  {
    roaster: "Ruby Coffee Roasters",
    coffee: "Creamery",
    city: "Nelsonville",
    state: "WI",
    region: "Midwest",
    website: "https://rubycoffeeroasters.com",
    productUrl: "https://rubycoffeeroasters.com/products/creamery-seasonal-blend",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["dried fruit", "berry", "nutty", "chocolate"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://www.intelligentsia.com/products/black-cat-classic-espresso",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["berry", "citrus", "caramel"],
    process: "espresso blend",
    price: "$$",
    decaf: false,
    reason: "A classic third-wave espresso lane for syrupy sweetness and steady milk drinks."
  },
  {
    roaster: "Metric Coffee",
    coffee: "En Masse",
    city: "Chicago",
    state: "IL",
    region: "Midwest",
    website: "https://metriccoffee.com",
    productUrl: "https://metriccoffee.com/products/en-masse",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["chocolate", "vanilla", "stone fruit"],
    process: "blend",
    price: "$$",
    decaf: false,
    reason: "A flexible Chicago blend with approachable sweetness and a little fruit around the edges."
  },
  {
    roaster: "Madcap Coffee",
    coffee: "Bolt",
    city: "Grand Rapids",
    state: "MI",
    region: "Midwest",
    website: "https://www.madcapcoffee.com",
    productUrl: "https://www.madcapcoffee.com/products/bolt",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["chocolate", "caramel", "nutty"],
    process: "blend",
    price: "$$",
    decaf: false,
    reason: "An always-on house blend for deep chocolate, caramelized sweetness, and low-acid versatility."
  },
  {
    roaster: "PT's Coffee",
    coffee: "Flying Monkey",
    city: "Topeka",
    state: "KS",
    region: "Midwest",
    website: "https://ptscoffee.com",
    productUrl: "https://ptscoffee.com/products/flying-monkey-espresso",
    roast: "medium",
    brew: ["espresso", "milk"],
    notes: ["chocolate", "caramel", "dried fruit"],
    process: "espresso blend",
    price: "$$",
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
    productUrl: "https://www.huckleberryroasters.com/products/blue-orchid",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["berry", "chocolate", "caramel"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://sweetbloomcoffee.com/products/hometown-blend",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk", "cold"],
    notes: ["chocolate", "nutty", "berry"],
    process: "blend",
    price: "$$",
    decaf: false,
    reason: "A full-bodied Colorado blend with cocoa, praline, and blackberry across espresso, drip, or cold brew."
  },
  {
    roaster: "Greater Goods Coffee",
    coffee: "Spark",
    city: "Austin",
    state: "TX",
    region: "Texas",
    website: "https://greatergoodsroasting.com",
    productUrl: "https://greatergoodsroasting.com/collections/single-origin/products/spark",
    roast: "light",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "nutty", "dried fruit"],
    process: "washed single origin",
    price: "$$",
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
    productUrl: "https://meritcoffee.com/products/andino",
    roast: "medium",
    brew: ["pour-over", "espresso"],
    notes: ["stone fruit", "caramel", "chocolate"],
    process: "washed single origin",
    price: "$$",
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
    productUrl: "https://panthercoffee.com/products/west-coast-panther-coffee-blend",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["citrus", "chocolate", "berry"],
    process: "espresso blend",
    price: "$$",
    decaf: false,
    reason: "A lively Miami blend with lemonade, malted chocolate, and berries for espresso or pour-over."
  },
  {
    roaster: "PERC Coffee",
    coffee: "Brazil Legender",
    city: "Savannah",
    state: "GA",
    region: "Southeast",
    website: "https://perccoffee.com",
    productUrl: "https://perccoffee.com/products/brazil",
    roast: "medium",
    brew: ["pour-over", "espresso", "cold"],
    notes: ["nutty", "chocolate", "caramel"],
    process: "natural single origin",
    price: "$$",
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
    productUrl: "https://www.brandywinecoffeeroasters.com/products/orbital-motion-espresso-blend-12oz-16-00",
    roast: "light",
    brew: ["pour-over", "espresso"],
    notes: ["floral", "brown sugar", "spice", "stone fruit"],
    process: "blend",
    price: "$$",
    decaf: false,
    reason: "A bright modern espresso blend with brown-sugar sweetness, florals, spice, and peach."
  },
  {
    roaster: "ReAnimator Coffee",
    coffee: "Foundation Blend",
    city: "Philadelphia",
    state: "PA",
    region: "Northeast",
    website: "https://www.reanimatorcoffee.com",
    productUrl: "https://www.reanimatorcoffee.com/products/foundation-blend-2",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["chocolate", "nutty", "caramel"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://www.redroostercoffee.com/products/organic-funky-chicken",
    roast: "dark",
    brew: ["pour-over", "espresso"],
    notes: ["nutty", "chocolate", "citrus"],
    process: "washed blend",
    price: "$$",
    decaf: false,
    reason: "A medium-dark Virginia blend with pecan-praline sweetness, milk chocolate, and citrus lift."
  },
  {
    roaster: "Dune Coffee Roasters",
    coffee: "Zip Zinger",
    city: "Santa Barbara",
    state: "CA",
    region: "West Coast",
    website: "https://www.dunecoffee.com",
    productUrl: "https://www.dunecoffee.com/products/zip-zinger",
    roast: "medium",
    brew: ["espresso", "milk", "pour-over"],
    notes: ["chocolate", "stone fruit", "caramel"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://methodicalcoffee.com/products/belly-warmer",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "nutty", "caramel"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://smallplanescoffee.com/products/arboretum",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk", "cold"],
    notes: ["chocolate", "nutty", "berry"],
    process: "seasonal blend",
    price: "$$",
    decaf: false,
    reason: "A balanced DC blend for chocolate, toasted nuts, and ripe fruit across nearly any brew method."
  },
  {
    roaster: "Camber Coffee",
    coffee: "Skyline",
    city: "Bellingham",
    state: "WA",
    region: "Pacific Northwest",
    website: "https://cambercoffee.com",
    productUrl: "https://cambercoffee.com/product/skyline-espresso/",
    roast: "light",
    brew: ["pour-over", "espresso"],
    notes: ["berry", "vanilla", "caramel"],
    process: "blend",
    price: "$$",
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
    productUrl: "https://counterculturecoffee.com/products/12-oz-slow-motion",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "caramel", "nutty"],
    process: "decaf",
    price: "$$",
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
    productUrl: "https://www.vervecoffee.com/products/vancouver-swiss-water-decaf",
    roast: "medium",
    brew: ["pour-over", "espresso", "milk"],
    notes: ["chocolate", "brown sugar", "caramel"],
    process: "decaf",
    price: "$$",
    decaf: true,
    reason: "A West Coast decaf path for sweet, rounded cups without flattening the coffee."
  }
].map((coffee) => ({
  availability: "available",
  lastChecked: "2026-09-02",
  ...coffee
}));

const state = {
  wheelSelections: new Set(),
  notes: new Set(),
  roast: "any",
  brew: "any",
  region: "any",
  budget: "any",
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
  resultEyebrow: document.querySelector("#resultEyebrow"),
  resultHeadline: document.querySelector("#resultHeadline"),
  primaryMatch: document.querySelector("#primaryMatch"),
  resultList: document.querySelector("#resultList"),
  roasterGrid: document.querySelector("#roasterGrid"),
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

function formatCheckedDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(year, month - 1, day));
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
  } else if (brewMatches(coffee, state.brew)) {
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
    .filter((coffee) => coffee.availability === "available")
    .map((coffee) => ({
      ...coffee,
      rankScore: scoreCoffee(coffee)
    }))
    .sort((first, second) => second.rankScore - first.rankScore);
}

function matchTier(rankScore) {
  if (rankScore >= 80) {
    return { adjective: "Excellent", label: "Excellent match" };
  }
  if (rankScore >= 60) {
    return { adjective: "Strong", label: "Strong match" };
  }
  if (rankScore >= 40) {
    return { adjective: "Good", label: "Good match" };
  }
  return { adjective: "Possible", label: "Possible match" };
}

function brewMatches(coffee, brew) {
  if (coffee.brew.includes(brew)) {
    return true;
  }
  if (brew === "drip") {
    return coffee.brew.includes("pour-over");
  }
  return false;
}

function formatBrewLabel(brew) {
  return {
    drip: "drip coffee",
    "pour-over": "pour-over",
    espresso: "espresso",
    milk: "milk drinks",
    cold: "cold brew"
  }[brew] || brew;
}

function matchReason(coffee) {
  const matchedNotes = coffee.notes.filter((note) => state.notes.has(note));
  if (matchedNotes.length > 0) {
    return `Matches your ${matchedNotes.map(titleCase).join(", ")} direction with a ${coffee.process} profile. ${coffee.reason}`;
  }
  if (state.decaf && coffee.decaf) {
    return `Keeps the search decaf-ready while matching a ${coffee.roast} roast and ${coffee.price} budget. ${coffee.reason}`;
  }
  if (state.brew !== "any" && brewMatches(coffee, state.brew)) {
    return `A strong ${formatBrewLabel(state.brew)} fit with ${coffee.notes.map(titleCase).slice(0, 3).join(", ")} notes. ${coffee.reason}`;
  }
  return coffee.reason;
}

function renderCard(coffee, isPrimary = false) {
  const card = createElement("article", `result-card ${isPrimary ? "result-card--primary" : "result-card--small"}`);
  const content = createElement("div", "result-content");
  const meta = createElement("div", "result-meta");
  const tier = matchTier(coffee.rankScore);
  meta.append(createElement("span", "pill", tier.label));
  meta.append(createElement("span", "pill pill--coral", titleCase(coffee.roast)));
  meta.append(createElement("span", "pill pill--blue", coffee.price));
  meta.append(createElement("span", "pill pill--available", `Available · checked ${formatCheckedDate(coffee.lastChecked)}`));
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

  const productLink = createElement("a", "shop-link", "View this coffee");
  productLink.href = coffee.productUrl;
  productLink.target = "_blank";
  productLink.rel = "noreferrer";
  productLink.setAttribute("aria-label", `View ${coffee.coffee} from ${coffee.roaster}`);
  foot.append(productLink);
  content.append(foot);

  card.append(content);

  if (isPrimary) {
    const scoreDial = createElement("div", "score-dial");
    const scoreValue = createElement("strong", "", tier.adjective);
    const scoreLabel = createElement("span", "", "match");
    scoreDial.setAttribute("aria-label", tier.label);
    scoreDial.append(scoreValue, scoreLabel);
    card.append(scoreDial);
  }

  return card;
}

function hasPreferenceSignal() {
  return state.wheelSelections.size > 0
    || state.roast !== "any"
    || state.brew !== "any"
    || state.region !== "any"
    || state.budget !== "any"
    || state.decaf;
}

function updateRecommendations() {
  dom.selectedCount.textContent = `${state.wheelSelections.size} selected`;
  dom.primaryMatch.innerHTML = "";
  dom.resultList.innerHTML = "";

  if (!hasPreferenceSignal()) {
    dom.resultEyebrow.textContent = "Your recommendation";
    dom.resultHeadline.textContent = "Tell us what you like and we'll find your coffee.";
    dom.selectionSummary.textContent = "Choose a flavor note or set any preference to get started.";
    return;
  }

  const ranked = rankCatalog();
  const [primary, ...rest] = ranked;

  dom.resultEyebrow.textContent = primary ? "Best match" : "No match yet";
  dom.resultHeadline.textContent = primary ? `${primary.coffee} from ${primary.roaster}` : "No available coffee found";
  dom.selectionSummary.textContent = selectionSummary();

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
    parts.push(formatBrewLabel(state.brew));
  }
  if (state.region !== "any") {
    parts.push(state.region);
  }
  if (state.budget !== "any") {
    parts.push(`${state.budget} budget`);
  }
  if (state.decaf) {
    parts.push("decaf-ready");
  }
  return parts.join(" | ");
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
    const link = createElement("a", "", "Visit roaster");
    link.href = coffee.website;
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
  state.decaf = false;

  document.querySelectorAll("[data-choice-group]").forEach((group) => {
    group.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.value === "any");
    });
  });

  dom.regionSelect.value = "any";
  dom.budgetSelect.value = "any";
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
