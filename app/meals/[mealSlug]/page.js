import Image from "next/image";
import classes from "./page.module.css";
// import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  // const meal = getMeal(params.mealSlug);
  const meal = {
    id: 1,
    slug: "juicy-cheese-burger",
    title: "Juicy Cheese Burger",
    image: "/images/burger.jpg",
    summary:
      "A delicious burger with a flavorful beef patty and melted cheese, served in a soft bun.",
    instructions:
      "\n" +
      "      1. Prepare the patty:\n" +
      "         Combine 200g ground beef with salt and pepper. Shape into a patty.\n" +
      "\n" +
      "      2. Cook the patty:\n" +
      "         Heat oil in a pan and cook the patty for 2-3 minutes per side until browned.\n" +
      "\n" +
      "      3. Assemble the burger:\n" +
      "         Toast the bun halves. Add lettuce and tomato on the bottom half, place the patty on top, and add a slice of cheese.\n" +
      "\n" +
      "      4. Serve:\n" +
      "         Complete with the top bun and serve hot.\n" +
      "    ",
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  };
  if (!meal) {
    notFound();
  }
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default async function mealDetails({ params }) {
  // const meal = getMeal(params.mealSlug);
  const meal = {
    id: 1,
    slug: "juicy-cheese-burger",
    title: "Juicy Cheese Burger",
    image: "/images/burger.jpg",
    summary:
      "A delicious burger with a flavorful beef patty and melted cheese, served in a soft bun.",
    instructions:
      "\n" +
      "      1. Prepare the patty:\n" +
      "         Combine 200g ground beef with salt and pepper. Shape into a patty.\n" +
      "\n" +
      "      2. Cook the patty:\n" +
      "         Heat oil in a pan and cook the patty for 2-3 minutes per side until browned.\n" +
      "\n" +
      "      3. Assemble the burger:\n" +
      "         Toast the bun halves. Add lettuce and tomato on the bottom half, place the patty on top, and add a slice of cheese.\n" +
      "\n" +
      "      4. Serve:\n" +
      "         Complete with the top bun and serve hot.\n" +
      "    ",
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  };
  // const meal =
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/\n/g, "<br />");
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.mail}`}>NAME</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
}
