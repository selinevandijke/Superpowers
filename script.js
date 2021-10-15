const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
]
    
// Maak een array van alle superhelden namen
const superheroNames = superheroes.map((item) => {
    return item.name
})
console.log(superheroNames);

// Maak een array van alle lichte superhelden
const lightWeight = superheroes.filter((item) => {
    return item.weight <= 190;
})
console.log(lightWeight);

// Maak een array met de namen van de superhelden die 200 pounds wegen
const twoHunderdPounds = superheroes.filter((item) => {
    return item.weight == 200;
}).map(item => {
    return item.name
})
console.log(twoHunderdPounds);

// Maak een array met alle comics waar de superhelden hun first appearances hebben gehad
const firstAppearance = superheroes.map((item) => {
    return item.first_appearance
})
console.log(firstAppearance);

// Maak een array met alle helden van DC
const superheroesDC = superheroes.filter((item) => {
    return item.publisher == "DC Comics";
})
console.log(superheroesDC);

// Maak een array met alle helden van Marvel
const superheroesMarvel = superheroes.filter((item) => {
    return item.publisher == "Marvel Comics";
})
console.log(superheroesMarvel);

// Tel het gewicht van alle DC superhelden bij elkaar op
const superheroesWeightDC = superheroes.filter((item) => {
    return item.publisher === "DC Comics"
}).map(item => {
    return parseInt(item.weight)
}).reduce((a, number) => a + number);
console.log(superheroesWeightDC);

// Tel het gewicht van alle Marvel superhelden bij elkaar op
const superheroesWeightMarvel = superheroes.filter((item) => {
    return item.publisher === "Marvel Comics"
}).map(item => {
    return parseInt(item.weight)
}).reduce((a, e) => a + e);
console.log(superheroesWeightMarvel);

// Zoek de zwaarste superheld
const findHeaviestSuperhero = superheroes.map((item) => {
  return item.weight  
}).filter(item => {
    return item.weight == "1400";
})
console.log(findHeaviestSuperhero);