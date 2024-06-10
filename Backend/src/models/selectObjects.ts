import { db } from "../database/db";
import { ObjectType } from "../types/types";

const selectObjects = () : ObjectType[] | undefined => {
  const select_objects = /*sql*/ `
    SELECT id, title, image, description, price
    FROM objects
  `;

  try {
    return db.prepare(select_objects).all() as ObjectType[];
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error creating object:", error.message);
    } else {
      console.error("An unexpected error occurred:", error);
    }
    return undefined; 
  }
};

export default selectObjects;
