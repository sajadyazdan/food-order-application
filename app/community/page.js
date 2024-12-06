import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          A shared love for: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Be part of our community and showcase your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Benefits</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="An appetizing dish" />
            <p>Explore and share amazing recipes</p>
          </li>
          <li>
            <Image
              src={communityIcon}
              alt="A group of people enjoying cooking"
            />
            <p>Connect with friends and fellow enthusiasts</p>
          </li>
          <li>
            <Image src={eventsIcon} alt="A lively cooking event" />
            <p>Join exclusive culinary events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
