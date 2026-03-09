const quirks = [
  {
    name: "Dangling star charms",
    tags: ["nature", "mystical", "pastel"]
  },
  {
    name: "Mini plushie centerpiece",
    tags: ["pastel", "kidcore"]
  },
  {
    name: "Glow-in-the-dark beads",
    tags: ["nature", "scemo", "webcore", "pastel"]
  },
  {
    name: "Fuzzy trim",
    tags: ["pastel", "nature", "scemo"]
  },
  {
    name: "Chain links",
    tags: ["scemo"]
  },
  {
    name: "Random chaos bead",
    tags: ["all"]
  },
  {
    name: "Perler charm",
    tags: ["all"]
  },
  {
    name:"Letter bead phrase",
    tags: ["all"]
  },
  {
    name: "Pipe cleaners",
    tags: ["pastel", "scemo", "kidcore", "nature"]
  },
  {
    name: "Safety pins",
    tags: ["scemo"]
  },
  {
    name: "Glowsticks",
    tags: "scemo"
  },
  {
    name: "Mini bottles",
    tags: ["nature", "mystical"]
  },
  {
    name: "Mini key charms",
    tags: ["nature", "mystical"]
  },
  {
    name: "Pop tabs",
    tags: ["scemo", "nature"]
  },
  {
    name: "Asymmetrical",
    tags: ["all"]
  },
  {
    name: "Bells",
    tags: ["nature", "mystical"]
  },
  {
    name: "Ribbons",
    tags: ["scemo", "mystical", "kidcore", "pastel"]
  },
  {
    name: "Lace trim",
    tags: ["scemo", "pastel"]
  },
  {
    name: "Reflective tape",
    tags: ["scemo", "webcore"]
  },
  {
    name: "Wooden beads",
    tags: ["nature", "whimsical"]
  },
  {
    name: "Removable perler",
    tags: ["any"]
  },
  {
    name: "Clasp closure",
    tags: ["any"]
  },
  {
    name: "Button closure",
    tags: ["any"]
  },
  {
    name: "Corset closure",
    tags:["scemo", "mystical", "pastel"]
  },
];
const cuffs = [
  {
    name: "X-Base",
    difficulty: "easy"
  },
  {
    name: "Peyote",
    difficulty: "intermediate"
  },
  {
    name: "Multistitch",
    difficulty: "easy"
  },
  {
    name: "Ladder",
    difficulty: "easy"
  },
  {
    name: "Double Ladder",
    difficulty: "hard"
  },
  {
    name: "UFO",
    difficulty: "intermediate"
  },
  {
    name: "Mini Rotator",
    difficulty: "easy"
  },
  {
    name: "Rotator",
    difficulty: "easy"
  },
  {
    name: "Double Rotator",
    difficulty: "intermediate"
  },
  {
    name: "Triple Rotator",
    difficulty: "hard"
  },
  {
    name: "Carousel",
    difficulty: "easy"
  },
  {
    name: "Mandala",
    difficulty: "intermediate"
  },
  {
    name: "DNA",
    difficulty: "easy"
  },
  {
    name: "Zig Zag",
    difficulty: "easy"
  },
  {
    name: "Flower",
    difficulty: "easy"
  },
  {
    name: "Spike",
    difficulty: "easy"
  },
  {
    name: "Star",
    difficulty: "intermediate"
  },
  {
    name: "Slinky",
    difficulty: "hard"
  },
  {
    name: "Spiral",
    difficulty: "hard"
  },
  {
    name: "Chain",
    difficulty: "intermediate"
  },
  {
    name: "Fishtail",
    difficulty: "intermediate"
  },
  {
    name: "Mermaid",
    difficulty: "intermediate"
  },
  {
    name: "Boxy",
    difficulty: "intermediate"
  },
  {
    name: "Shape",
    difficulty: "intermediate"
  },
  {
    name: "Helicoid",
    difficulty: "intermediate"
  },
  {
    name: "Supernova",
    difficulty: "intermediate"
  },
  {
    name: "Crown",
    difficulty: "easy"
  },
  {
    name: "Starburst",
    difficulty: "intermediate"
  },
  {
    name: "Wave",
    difficulty: "intermediate"
  },
  {
    name: "Mobius",
    difficulty: "hard"
  },
  {
    name: "Honeycomb",
    difficulty: "easy"
  },
  {
    name: "Herringbone",
    difficulty: "intermediate"
  },
  {
    name: "Right Angle Weave",
    difficulty: "intermediate"
  },
  {
    name: "Russian Spiral",
    difficulty: "intermediate"
  },
  {
    name: "Saturn",
    difficulty: "intermediate"
  },
  ];
const themes = [
  {
    name: "Flowers",
    tags: ["nature", "mystical", "kidcore", "scemo", "pastel"]
  },
  {
    name: "Mushrooms",
    tags: ["nature", "mystical"]
  },
  {
    name: "Stars",
    tags: ["scemo", "nature", "kidcore"]
  },
  {
    name: "Moon",
    tags: ["nature"]
  },
  {
    name: "Sun",
    tags: ["nature"]
  },
  {
    name: "Clouds",
    tags: ["nature", "webcore"]
  },
  {
    name: "Leaves",
    tags: ["nature"]
  },
  {
    name: "Trees",
    tags: ["nature"]
  },
  {
    name: "Grass",
    tags: ["nature"]
  },
  {
    name: "Bark",
    tags: ["nature"]
  },
  {
    name: "Snow",
    tags:["nature"]
  },
  {
    name: "Ice",
    tags: ["nature"]
  },
  {
    name: "Dirt",
    tags: ["nature"]
  },
  {
    name: "Kit-Kat",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Hershey's",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Snickers",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Twix",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Cotton Candy",
    tags: ["kidcore", "foodie", "pastel"]
  },
  {
    name: "Gummies",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Airheads",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Twizzlers",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Jelly Beans",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Hot Tamales",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Mike & Ikes",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Smarties",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "M&Ms",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Skittles",
    tags: ["kidcore", "foodie"]
  },
  {
    name: "Cat",
    tags: ["nature", "animals", "kidcore"]
  },
  {
    name: "Dog",
    tags: ["nature", "animals", "kidcore"]
  },
  {
    name: "Rabbit",
    tags: ["nature", "animals", "kidcore"]
  },
  {
    name: "Axolotl",
    tags: ["nature", "animals", "water"]
  },
  {
    name: "Seal",
    tags: ["nature", "animals", "water"]
  },
  {
    name: "Shark",
    tags: ["nature", "animals", "water"]
  },
  {
    name: "Fox",
    tags: ["nature", "animals"]
  },
  {
    name: "Wolf",
    tags: ["nature", "animals"]
  },
  {
    name: "Dinosaur",
    tags: ["nature", "animals", "kidcore"]
  },
  {
    name: "Firefly",
    tags: ["nature", "animals", "bugs"]
  },
  {
    name: "Ladybug",
    tags: ["nature", "animals", "bugs"]
  },
  {
    name: "Moth",
    tags: ["nature", "animals", "bugs"]
  },
  {
    name: "Fish",
    tags: ["nature", "animals", "water"]
  },
  {
    name: "Waves",
    tags: ["nature", "water"]
  },
  {
    name: "Seaweed",
    tags: ["nature", "water"]
  },
  {
    name: "Sand",
    tags: ["nature", "water"]
  },
  {
    name: "Deep Water",
    tags: ["nature", "water"]
  },
  {
    name: "Saltwater",
    tags: ["nature", "water"]
  },
  {
    name: "Freshwater",
    tags: ["nature", "water"]
  },
  {
    name: "Dragon",
    tags: ["nature", "animals", "mystical"]
  },
  {
    name: "Skulls",
    tags: ["nature", "scemo"]
  },
  {
    name: "Hearts",
    tags: ["kidcore", "pastel"]
  },
  {
    name: "Potion",
    tags: ["nature", "mystical"]
  },
  {
    name: "Swirls",
    tags: ["mystical", "kidcore", "scemo"]
  },
  {
    name: "Rain",
    tags: ["nature", "water"]
  },
  {
    name: "Galaxy",
    tags: ["nature", "mystical"]
  },
  {
    name: "Constellations",
    tags: ["nature", "mystical"]
  },
  {
    name: "Forest",
    tags: ["nature"]
  },
  {
    name: "Grassland",
    tags: ["nature"]
  },
  {
    name: "Desert",
    tags: ["nature"]
  },
  {
    name: "Caves",
    tags: ["nature", "scemo"]
  },
  {
    name: "Cake",
    tags: ["pastel", "foodie"]
  },
  {
    name: "Ice cream",
    tags: ["pastel", "foodie"]
  },
  {
    name: "Pie",
    tags: ["pastel", "foodie"]
  },
  {
    name: "Cookies",
    tags: ["foodie"]
  },
  {
    name: "Macarons",
    tags: ["pastel", "foodie"]
  },
  {
    name: "Cannoli",
    tags: ["foodie"]
  },
  {
    name: "Cereal",
    tags: ["foodie"]
  },
  {
    name: "Cheesecake",
    tags: ["foodie", "pastel"]
  },
  {
    name: "Oreo",
    tags: ["foodie"]
  },
  {
    name: "Donut",
    tags: ["foodie"]
  },
  {
    name: "Gore",
    tags: ["scemo", "horror"]
  },
  {
    name: "Ramen",
    tags: ["foodie"]
  },
  ];
const palettes = [
  {
    name: "Olive Field",
    colors:["#606C38", "#283618", "#FEFAE0", "#DDA15E", "#BC6C25"],
    tags: ["nature"]
  },
  {
    name: "Ocean Flame",
    colors: ["#780000", "#C1121F", "#FDF0D5", "#003049", "#669BBC"],
    tags: ["nature", "water", "retro"]
  },
  {
    name: "Grassland Sunrise",
    colors: ["#CCD5AE", "#E9EDC9", "#FEFAE0", "#FAEDCD", "#D4A373"],
    tags: ["nature"]
  },
  {
    name: "Gilded Cobalt",
    colors: ["#000814", "#001D3D", "#003566", "#FFC300", "#FFD60A"],
    tags: ["scemo", "nature", "mystical"]
  },
  {
    name: "Cotton Kandi",
    colors: ["#FFAFCC", "#FFC8DD", "#CDB4DB", "#BDE0FE", "#A2D2FF"],
    tags: ["pastel"]
  },
  {
    name: "Strawberry Shortcake",
    colors: ["#F9DBBD", "#FFA5AB", "#DA627D", "#A53860", "#450920"],
    tags: ["pastel", "foodie"]
  },
  {
    name: "Pastel Rainbows",
    colors: ["#FF99C8", "#FCF6BD", "#d0f4de", "#a9def9", "#e4c1f9"],
    tags: ["pastel", "kidcore"]
  },
  {
    name: "Oceanic Sunset",
    colors: ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
    tags: ["retro", "nature"]
  },
  {
    name: "Pinkish Poppy",
    colors: ["#edafb8", "#f7e1d7", "#dedbd2", "#b0c4b1", "#4a5759"],
    tags: ["nature", "pastel"]
  },
  ];
  
// return array of selected themes
function getThemeSelection() {
  const randomMode = document.getElementById("randomMode").checked;
  
  if (randomMode) {
    return ["all"];
  }
  
  const checkboxes = document.querySelectorAll('input[name="theme"]:checked');
  return Array.from(checkboxes).map(cb=>cb.value);
}

function getDifficultySelection() {
  const checkboxes = document.querySelectorAll('input[name="difficulty"]:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

function getQuirkFromSelection(selection) {
  if (selection == ["all"]){
    return quirks[Math.floor(Math.random() * quirks.length)];
  }
  
  let quirk = quirks.filter(quirk.tags.some(tag => selection.includes(tag))).map(quirk => quirk.name);
  return quirk;
}

function getCuffFromSelection(selection) {
  let cuff = cuffs.filter(cuff.difficulty.some(difficulty => selection.includes(difficulty))).map(cuff => cuff.name);
  return cuff;
}

function getThemeFromSelection(selection) {
  if (selection == ["all"]){
    return themes[Math.floor(Math.random() * themes.length)];
  }
  
  let theme = themes.filter(theme.tags.some(tag => selection.includes(tag))).map(theme => theme.name);
  return theme;
}