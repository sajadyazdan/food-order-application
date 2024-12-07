import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Yummy meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Select the recipe you like and cook it yourself.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share the recipe you like</Link>
        </p>
      </header>
      <main className={classes.main}>
        {" "}
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          {" "}
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
