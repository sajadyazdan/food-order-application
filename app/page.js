import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextGeneration Food for NextGeneration Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Enter Community</Link>
            <Link href="/meals">Find Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextGeneration Food is a community-driven platform where food
            enthusiasts can share their favorite recipes with the world. It's
            the perfect place to discover new dishes and connect with fellow
            food lovers.
          </p>
          <p>
            NextLevel Food is a platform to explore new dishes and connect with
            fellow food enthusiasts.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextGeneration Food?</h2>
          <p>
            NextGeneration Food is a platform where food enthusiasts can share
            their favorite recipes with the world. It's a hub for discovering
            new dishes and connecting with fellow food lovers
          </p>
          <p>
            NextGeneration Food is a platform to discover exciting new dishes
            and connect with other food enthusiasts.
          </p>
        </section>
      </main>
    </>
  );
}
