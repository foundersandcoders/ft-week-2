"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../database/db");
const selectObjects = () => {
    const select_objects = /*sql*/ `
    SELECT id, title, image, description, price
    FROM objects
  `;
    try {
        return db_1.db.prepare(select_objects).all();
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
exports.default = selectObjects;
