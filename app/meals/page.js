import { calculateSizeAdjustValues } from "next/dist/server/font-utils";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
export default function MealsPage() {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
