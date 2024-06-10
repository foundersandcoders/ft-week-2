"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const better_sqlite3_1 = __importDefault(require("better-sqlite3"));
exports.db = new better_sqlite3_1.default("db.sqlite");
const schemaPath = (0, node_path_1.join)("src/database/schema.sql");
const schema = (0, node_fs_1.readFileSync)(schemaPath, "utf-8");
exports.db.exec(schema);
