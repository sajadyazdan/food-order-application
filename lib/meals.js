import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  // We should use get method to protect agains injection attacks
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
