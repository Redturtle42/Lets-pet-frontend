const pets = [
  {
    id: 0,
    name: "Maya",
    imageSrc: "../images/dogs/maya.jpg",
    description:
      "This is an unbelievable dog. The world cutest... no, she is the cutest, smartest and funniest dog in the universe. She is quite a bad bone but no doubt that we speak about an adorable and wonderful animal.",
    category: "Mammal",
    species: "Dog",
    breed: "Golden Retriever",
    gender: "Female",
    age: 6,
    size: "L",
    rating: 10,
    price: 999,
  },
  {
    id: 1,
    name: "Mr.Grey",
    imageSrc: "../images/dogs/weimar.jpg",
    description:
      "This is a cute grey Weimaraner dog who likes playing and running around. He is sad only if you don't play with him.",
    category: "Mammal",
    species: "Dog",
    breed: "Weimaraner",
    gender: "Male",
    age: 3,
    size: "L",
    rating: 4.2,
    price: 10,
  },
  {
    id: 2,
    name: "Mathias",
    imageSrc: "../images/crow.jpg",
    description:
      "He is Mathias, a real metropolitan bird. He is always watching... go sightseeing, toddling a bit... then watching a bit more... Did I mention that he likes watching?",
    category: "Bird",
    species: "Passeriformes",
    breed: "Carrion Crow",
    gender: "Male",
    age: 2,
    size: "S",
    rating: 3.1,
    price: 7,
  },
  {
    id: 3,
    name: "Rudolph",
    imageSrc: "../images/deer.jpg",
    description:
      "Rudolph is a huge world star, every human beeing knows him. He often work with the deservedly famous Santa Claus. That's why he usually not available around 6th of December.",
    category: "Mammal",
    species: "Reindeer",
    breed: "Magical Animal",
    gender: "Male",
    age: 99,
    size: "XL",
    rating: 9.9,
    price: 42,
  },
  {
    id: 4,
    name: "Ash",
    imageSrc: "../images/mayfly.jpg",
    description:
      "If you don't know her enough then rush! You don't have much time left.",
    category: "Other",
    species: "Insect",
    breed: "Mayfly",
    gender: "Female",
    age: 0.01,
    size: "XS",
    rating: 6.9,
    price: 1,
  },
  {
    id: 5,
    name: "Butch Cassidy",
    imageSrc: "../images/racoon.jpg",
    description:
      "Pay attention, this cutie has quite sticky hands and he is always... really, always hungry. He is willing to anything... everything for food.",
    category: "Mammal",
    species: "Racoon",
    breed: "Tricky",
    gender: "Male",
    age: 6,
    size: "S",
    rating: 7.8,
    price: 21,
  },
  {
    id: 6,
    name: "Marie Ant-o-Anett",
    imageSrc: "../images/mary-ant-o-anett.jpg",
    description:
      "Marie, or Mary in short, is the most beautiful ant I have ever met. Not just cute but she works hard 24/7. She deserves some rent, so.. let's go, rent her out.",
    category: "Other",
    species: "Ant",
    breed: "Fire Ant",
    gender: "Female",
    age: 2,
    size: "XS",
    rating: 8.1,
    price: 12,
  },
  {
    id: 7,
    name: "Magda Ehlers",
    imageSrc: "../images/alpaca.jpg",
    description:
      "Magda is an alpaca. What should I tell about her... would you think that she is adopted by a hairdresser?",
    category: "Mammal",
    species: "Camelids",
    breed: "Alpaca",
    gender: "Female",
    age: 11,
    size: "XL",
    rating: 3.4,
    price: 6,
  },
  {
    id: 8,
    name: "L'csó",
    imageSrc: "../images/lecso.jpeg",
    description:
      "He is a funny plush rat of it's own. He's always ready to play with anybody.",
    category: "Mammal",
    species: "Rat",
    breed: "Plush",
    gender: "Male",
    age: 6,
    size: "S",
    rating: 8.9,
    price: 99,
  },
  {
    id: 9,
    name: "Arnold",
    imageSrc: "../images/duck.jpg",
    description:
      "Arnold is not as strong as the other one, you know Schwarzenegger, but he is much more adorable. PLus, he has a positive attitude, and makes you happy all the time.",
    category: "Bird",
    species: "Duck",
    breed: "Northern Shoveler",
    gender: "Male",
    age: 4,
    size: "M",
    rating: 6.7,
    price: 9,
  },
  {
    id: 10,
    name: "Steve 'Snooze' Darug",
    imageSrc: "../images/coala.jpg",
    description:
      'Steve is a Koala - yes, koala with an "a" after the "o" - not kola. He likes to eat... eucalyptus leaves. That\'s all, he doesn\'t like pizza, truffle or beef stripes. So, if you like margharita (cocktail) you will be good friends.',
    category: "Mammal",
    species: "Marsupial",
    breed: "Koala",
    gender: "Male",
    age: 11,
    size: "M",
    rating: 4.3,
    price: 7,
  },
  {
    id: 11,
    name: "Vuk",
    imageSrc: "../images/fox.jpg",
    description:
      'This is a cute fox who get his names after the fairy-tale hero. "Quick fox legs, sneaky little shadows, Hipp-hop, Vuk is coming!"',
    category: "Mammal",
    species: "Fox",
    breed: "European",
    gender: "Male",
    age: 6,
    size: "M",
    rating: 7.1,
    price: 11,
  },
  {
    id: 12,
    name: "Süni",
    imageSrc: "../images/hedgehog.jpg",
    description:
      "This is a cute Hedgehog with plushy spikes and soft furry belly. I love hedgies :)",
    category: "Mammal",
    species: "HedgeHog",
    breed: "Cutie",
    gender: "Female",
    age: 4,
    size: "S",
    rating: 8.1,
    price: 16,
  },
  {
    id: 13,
    name: "Lulu",
    imageSrc: "../images/mongoose.jpg",
    description:
      "If you ever meet a pack of mongoose you should know that they have only one goal in they life. They want to hide under your coat... at all costs.",
    category: "Mammal",
    species: "Cat-like",
    breed: `Mongoose`,
    gender: "Female",
    age: 6,
    size: "S",
    rating: 6.5,
    price: 9,
  },
  {
    id: 14,
    name: "Elsa",
    imageSrc: "../images/panda.jpg",
    description:
      "Elsa is non-fighting, non-kungfu panda. To tell the truth, pandas do not like fighting. They’re more like just being away with their little bamboo shoots and leaves.",
    category: "Mammal",
    species: "Bear",
    breed: "Panda",
    gender: "Female",
    age: 9,
    size: "XL",
    rating: 7.4,
    price: 15,
  },
  {
    id: 15,
    name: "Logan",
    imageSrc: "../images/rat.jpg",
    description:
      "Logan is a live rat, not plush or a drawn animation. Unlike L'csó, he prefer the eating to cooking. He is a traditional domestic rat.",
    category: "Mammal",
    species: "Rat",
    breed: "Packrat",
    gender: "Male",
    age: 3,
    size: "XS",
    rating: 5.6,
    price: 6,
  },
  {
    id: 16,
    name: "Inferno",
    imageSrc: "../images/turtle.jpg",
    description:
      '"Hello, my name is Inferno. Actually I am a very interesting turtle and a I have a lot of intriguing things to tell you but we must hurry up because we do not have so much time...( Recording time is up! )',
    category: "Reptile",
    species: "Turtle",
    breed: "Red-eared Slider",
    gender: "Female",
    age: 12,
    size: "M",
    rating: 7.4,
    price: 18,
  },
  {
    id: 17,
    name: "Zee",
    imageSrc: "../images/ze-ant.jpg",
    description:
      "Zee is another fairy-tale hero. If you want to know more about him... just simply ask us and rent him out.",
    category: "Other",
    species: "Ant",
    breed: "Black Meat Eater",
    gender: "Male",
    age: 12,
    size: "XS",
    rating: 7.4,
    price: 18,
  },
  {
    id: 18,
    name: "M'akita",
    imageSrc: "../images/dogs/akita.jpg",
    description:
      "Akitas and Huskies are the world cutest dogs. Do not let this opportunity to slip out of your hands to spend some time this sweet and smart dog.",
    category: "Mammal",
    species: "Dog",
    breed: "Akita",
    gender: "Male",
    age: 6,
    size: "L",
    rating: 8.4,
    price: 21,
  },
  {
    id: 18,
    name: "Korg'i",
    imageSrc: "../images/dogs/corgi.jpg",
    description:
      'Corgi. So... a Corgi is crazy, mad, insane, demented, lunatic, unbalanced, moron, "have a screew loosed", bonker, nitty... Corgiish, in one word CORGI. Do you need more than that? ',
    category: "Mammal",
    species: "Dog",
    breed: "Corgi",
    gender: "Female",
    age: 3,
    size: "S",
    rating: 7.8,
    price: 18,
  },
  {
    id: 19,
    name: "Philip",
    imageSrc: "../images/dogs/dachshund.jpg",
    description:
      "Do you like dogs? And what about the hot-dogs? Huhh, you can get both of them in one.",
    category: "Mammal",
    species: "Dog",
    breed: "Dachshund",
    gender: "Male",
    age: 6,
    size: "S/M/L",
    rating: 5,
    price: 8,
  },
  {
    id: 20,
    name: "Tyson",
    imageSrc: "../images/dogs/german.jpg",
    description:
      "Tyson is a very nice and playful dog despite of his name and breed. He is the typical example, how adorable can be a German Shepherd.",
    category: "Mammal",
    species: "Dog",
    breed: "German Shepherd",
    gender: "Male",
    age: 7,
    size: "L",
    rating: 6.9,
    price: 11,
  },
  {
    id: 21,
    name: "Loki",
    imageSrc: "../images/dogs/husky.jpg",
    description:
      "Have you ever met a real crazy dog? Yes, Loki is an insane, full of power, always playing mad dog. That is impossible to not put a smile on your face. :)",
    category: "Mammal",
    species: "Dog",
    breed: "Husky",
    gender: "Male",
    age: 6,
    size: "L",
    rating: 8.8,
    price: 16,
  },
  {
    id: 22,
    name: "Bruno",
    imageSrc: "../images/dogs/golden.jpg",
    description:
      "Bruno is the dog who never let you down. He's not that clown anymore, but he still ready to play and cheer you up.",
    category: "Mammal",
    species: "Dog",
    breed: "Golden Retriever",
    gender: "Male",
    age: 10,
    size: "L",
    rating: 8.7,
    price: 12,
  },
  {
    id: 23,
    name: "Pico",
    imageSrc: "../images/dogs/jack-russel.jpg",
    description:
      "Pico is like a powerplant. I still don't understand how to fit so much energy into this small creature. He is recommended for who likes to run, take a tour in nature or he/she simply likes to move at all.",
    category: "Mammal",
    species: "Dog",
    breed: "Jack Russel Terrier",
    gender: "Male",
    age: 3,
    size: "S",
    rating: 8.4,
    price: 14,
  },
  {
    id: 24,
    name: "Elmo",
    imageSrc: "../images/moorish_idol.jpg",
    description:
      "Elmo is a very rare fish from East Africa. A common inhabitant of tropical to subtropical reefs and lagoons, the Moorish idol is notable for its wide distribution throughout the Indo-Pacific.",
    category: "Fish",
    species: "Ray-Finned Fishes",
    breed: "Moorish Idol",
    gender: "Female",
    age: 0.6,
    size: "XS",
    rating: 7.4,
    price: 6,
  },
  {
    id: 25,
    name: "Boothe",
    imageSrc: "../images/regal_tang.jpg",
    description:
      'Regal Tang has a royal blue body, yellow tail, and black "palette" design. It grows to 30 cm and typically weigh around 600 g.',
    category: "Fish",
    species: "Ray-Finned Fishes",
    breed: "Regal Tang",
    gender: "Male",
    age: 0.8,
    size: "XS",
    rating: 8.1,
    price: 7,
  },
  {
    id: 25,
    name: "Mooka",
    imageSrc: "../images/spotted_ratfish.jpg",
    description:
      "Mooka is a very-very rare fish. He is recommended for who likes or wants to try the deviant/weird.",
    category: "Fish",
    species: "Cartilaginous Fish",
    breed: "Spotted Ratfish",
    gender: "Male",
    age: 0.8,
    size: "XS",
    rating: 8.1,
    price: 35,
  },
  {
    id: 26,
    name: "Pypy",
    imageSrc: "../images/green_tree_python.jpg",
    description:
      "This exclusive snake is a Green Tree Python from Indonesia. Rare and beautiful snake that is highly valuable.",
    category: "Reptile",
    species: "Snake",
    breed: "Green Tree Python",
    gender: "Female",
    age: 6,
    size: "S",
    rating: 7.8,
    price: 30,
  },
  {
    id: 27,
    name: "Bumper",
    imageSrc: "../images/eyelash_viper.jpg",
    description:
      "Eyelash pit vipers come in a variety of color variations including bright yellow, pink, green, and brown. Yellow eyelash pit vipers are often found in banana trees where they blend in easily.",
    category: "Reptile",
    species: "Snake",
    breed: "Eyelash Viper",
    gender: "Male",
    age: 4,
    size: "S",
    rating: 6.8,
    price: 25,
  },
  {
    id: 28,
    name: "Nala",
    imageSrc: "../images/armadillo_girdled_lizard.jpg",
    description:
      "Nala is a specimen of the Armadillo girdled lizards that inhabit the desert and semi-desert regions.",
    category: "Reptile",
    species: "Lizard",
    breed: "Armadillo girdled lizard",
    gender: "Female",
    age: 3,
    size: "S",
    rating: 8.4,
    price: 32,
  },
  {
    id: 29,
    name: "Boris",
    imageSrc: "../images/pangolin.jpg",
    description:
      "Boris is Pangolin that is an uncommon and very endangered animal. Most pangolins are active during the night and eat ants and termites.",
    category: "Mammal",
    species: "Pholidota",
    breed: "Pangolin",
    gender: "Female",
    age: 4,
    size: "M",
    rating: 7.2,
    price: 41,
  },
  {
    id: 30,
    name: "Felix",
    imageSrc: "../images/paramecium.jpg",
    description:
      "Felix is a quite silent creature. He's not running always up and down, he's not eat your food without asking or even barking from you. He doesn't require so much care. The perfect pet for lazy people!",
    category: "Other",
    species: "Eukaryotes (Unicellular)",
    breed: "Paramecium",
    gender: "Male",
    age: 1,
    size: "XXS",
    rating: 4.2,
    price: 1,
  },
];

export { pets };
