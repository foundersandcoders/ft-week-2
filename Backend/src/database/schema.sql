BEGIN;

CREATE TABLE IF NOT EXISTS objects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  image TEXT,
  description TEXT,
  price INTEGER



);

COMMIT;