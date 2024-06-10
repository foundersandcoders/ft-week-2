BEGIN;

INSERT INTO objects (title, image, description, price) VALUES
('Vintage Lamp', 'https://picsum.photos/400/400?random=1', 'A beautiful vintage lamp to light up your room.', 7500),
('Antique Vase', 'https://picsum.photos/400/400?random=2', 'An exquisite antique vase to add elegance to any space.', 12000),
('Retro Clock', 'https://picsum.photos/400/400?random=3', 'A retro-style clock that brings a touch of the past.', 3000),
('Modern Chair', 'https://picsum.photos/400/400?random=4', 'A stylish modern chair for contemporary interiors.', 8500),
('Wooden Bookshelf', 'https://picsum.photos/400/400?random=5', 'A sturdy wooden bookshelf with ample space.', 15000),
('Canvas Painting', 'https://picsum.photos/400/400?random=6', 'A captivating canvas painting to enhance your wall decor.', 5000),
('Leather Wallet', 'https://picsum.photos/400/400?random=7', 'A premium leather wallet for the fashion-conscious.', 2500),
('Ceramic Bowl', 'https://picsum.photos/400/400?random=8', 'A beautifully crafted ceramic bowl for your dining pleasure.', 1800),
('Bluetooth Speaker', 'https://picsum.photos/400/400?random=9', 'A portable Bluetooth speaker with excellent sound quality.', 9900),
('Garden Hammock', 'https://picsum.photos/400/400?random=10', 'A comfortable garden hammock for relaxing outdoors.', 7600)

ON CONFLICT DO NOTHING;
COMMIT;