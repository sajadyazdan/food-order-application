const sqlite = require("better-sqlite3");
const database = sqlite("meals.db");

const sampleMeals = [
  {
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary:
      "A delicious burger with a flavorful beef patty and melted cheese, served in a soft bun.",
    instructions: `
      1. Prepare the patty:
         Combine 200g ground beef with salt and pepper. Shape into a patty.

      2. Cook the patty:
         Heat oil in a pan and cook the patty for 2-3 minutes per side until browned.

      3. Assemble the burger:
         Toast the bun halves. Add lettuce and tomato on the bottom half, place the patty on top, and add a slice of cheese.

      4. Serve:
         Complete with the top bun and serve hot.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Spicy Curry",
    slug: "spicy-curry",
    image: "/images/curry.jpg",
    summary:
      "A flavorful and spicy curry, enriched with exotic spices and creamy coconut milk.",
    instructions: `
      1. Chop vegetables:
         Cut your preferred vegetables into bite-sized pieces.

      2. Sauté vegetables:
         Heat oil in a pan and sauté vegetables until slightly softened.

      3. Add curry paste:
         Stir in 2 tablespoons of curry paste and cook for a minute.

      4. Simmer with coconut milk:
         Add 500ml coconut milk, bring to a simmer, and cook for 15 minutes.

      5. Serve:
         Pair this creamy curry with rice or bread.
    `,
    creator: "Max Schwarz",
    creator_email: "max@example.com",
  },
  {
    title: "Homemade Dumplings",
    slug: "homemade-dumplings",
    image: "/images/dumplings.jpg",
    summary:
      "Tender dumplings filled with savory meat and vegetables, steamed to perfection.",
    instructions: `
      1. Prepare the filling:
         Mix minced meat, shredded vegetables, and spices.

      2. Fill the dumplings:
         Place a spoonful of filling in the center of each dumpling wrapper. Wet the edges and fold to seal.

      3. Steam the dumplings:
         Arrange dumplings in a steamer. Steam for about 10 minutes.

      4. Serve:
         Enjoy these dumplings hot, with a dipping sauce of your choice.
    `,
    creator: "Emily Chen",
    creator_email: "emilychen@example.com",
  },
  {
    title: "Classic Mac n Cheese",
    slug: "classic-mac-n-cheese",
    image: "/images/macncheese.jpg",
    summary:
      "Creamy and cheesy macaroni, a comforting classic that's always a crowd-pleaser.",
    instructions: `
      1. Cook the macaroni:
         Boil macaroni according to package instructions until al dente.

      2. Prepare cheese sauce:
         In a saucepan, melt butter, add flour, and gradually whisk in milk until thickened. Stir in grated cheese until melted.

      3. Combine:
         Mix the cheese sauce with the drained macaroni.

      4. Bake:
         Transfer to a baking dish, top with breadcrumbs, and bake until golden.

      5. Serve:
         Serve hot, garnished with parsley if desired.
    `,
    creator: "Laura Smith",
    creator_email: "laurasmith@example.com",
  },
  {
    title: "Authentic Pizza",
    slug: "authentic-pizza",
    image: "/images/pizza.jpg",
    summary:
      "Hand-tossed pizza with a tangy tomato sauce, fresh toppings, and melted cheese.",
    instructions: `
      1. Prepare the dough:
         Knead pizza dough and let it rise until doubled in size.

      2. Shape and add toppings:
         Roll out the dough, spread tomato sauce, and add your favorite toppings and cheese.

      3. Bake the pizza:
         Bake in a preheated oven at 220°C for about 15-20 minutes.

      4. Serve:
         Slice hot and enjoy with a sprinkle of basil leaves.
    `,
    creator: "Mario Rossi",
    creator_email: "mariorossi@example.com",
  },
  {
    title: "Wiener Schnitzel",
    slug: "wiener-schnitzel",
    image: "/images/schnitzel.jpg",
    summary:
      "Crispy, golden-brown breaded veal cutlet, a classic Austrian dish.",
    instructions: `
      1. Prepare the veal:
         Pound veal cutlets to an even thickness.

      2. Bread the veal:
         Coat each cutlet in flour, dip in beaten eggs, and then in breadcrumbs.

      3. Fry the schnitzel:
         Heat oil in a pan and fry each schnitzel until golden brown on both sides.

      4. Serve:
         Serve hot with a slice of lemon and a side of potato salad or greens.
    `,
    creator: "Franz Huber",
    creator_email: "franzhuber@example.com",
  },
];

database
  .prepare(
    `
  CREATE TABLE IF NOT EXISTS meals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL UNIQUE,
      title TEXT NOT NULL,
      image TEXT NOT NULL,
      summary TEXT NOT NULL,
      instructions TEXT NOT NULL,
      creator TEXT NOT NULL,
      creator_email TEXT NOT NULL
  )
`
  )
  .run();

async function initializeData() {
  const insertStatement = database.prepare(`
    INSERT INTO meals VALUES (
        null,
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator,
        @creator_email
    )
  `);

  for (const meal of sampleMeals) {
    insertStatement.run(meal);
  }
}

initializeData();
