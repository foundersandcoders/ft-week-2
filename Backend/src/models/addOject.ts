import { db } from "../database/db";
import { ObjectType } from "../types/types";

const addObject = (object: ObjectType) => {
  const insert_object = /*sql*/ `
  INSERT INTO objects (title, image, description, price)
  VALUES (?, ?, ?, ?);  
  `;
  try {
    const result = db
      .prepare(insert_object)
      .run(
        object.title,
        object.image,
        object.description,
        object.price,
      );
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error creating object:", error.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
      return undefined; 
    }
}

export default addObject;
