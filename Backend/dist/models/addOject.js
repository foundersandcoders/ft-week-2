"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../database/db");
const addObject = (object) => {
    const insert_object = /*sql*/ `
  INSERT INTO objects (title, image, description, price)
  VALUES (?, ?, ?, ?);  
  `;
    try {
        const result = db_1.db
            .prepare(insert_object)
            .run(object.title, object.image, object.description, object.price);
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error creating object:", error.message);
        }
        else {
            console.error("An unexpected error occurred:", error);
        }
        return undefined;
    }
};
exports.default = addObject;
