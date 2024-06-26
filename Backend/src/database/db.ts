import { readFileSync } from "node:fs";
import { join } from "node:path";
import Database from "better-sqlite3";

export const db = new Database("db.sqlite");

const schemaPath = join("src/database/schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);


