CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);


CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);


CREATE TABLE order_items (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);


INSERT INTO categories (name) VALUES
    ('Headphones');

INSERT INTO products (name, price, description, category_id, brand, gender, material) VALUES
    ('Women''s Lightweight Knit Cardigan', 146.00, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Vero dolor perspiciatis animi praesentium itaque, sequi deserunt dolores quam facilis fugit, 
    doloremque atque commodi iste obcaecati.', 2, 'Alavan', 'Women''s', 'Cotton' );

UPDATE products
SET name = 'Dimmable Ceiling Light Modern'
WHERE product_id = 5;



ALTER TABLE products
ADD COLUMN material  VARCHAR(10);


CREATE TABLE product_images (
    image_id SERIAL PRIMARY KEY,
    product_id INT,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
INSERT INTO product_images (product_id, image_url) VALUES
    (19, 'https://i.imgur.com/4d93g4Q.jpg');





UPDATE products
SET brand = 'Alavan'
WHERE product_id = 2;

UPDATE products
SET brand = 'Alavan'
WHERE product_id = 4;

UPDATE products
SET brand = 'Alavan'
WHERE product_id = 5;

UPDATE products
SET brand = 'Alavan'
WHERE product_id = 6;

UPDATE products
SET brand = 'Alavan'
WHERE product_id = 7;

UPDATE products
SET brand = 'Alavan'
WHERE product_id = 1;

UPDATE products
SET brand = 'Alavan'
WHERE product_id = 3;

CREATE TABLE discounts (
  id SERIAL PRIMARY KEY,
  discount_name VARCHAR(255) NOT NULL,
  discount_percentage DECIMAL(5, 2) NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL
);

INSERT INTO discounts (discount_name, discount_percentage, start_date, end_date)
VALUES 
  ('Special Sale 1', 25.00, '2023-11-01', '2023-11-30'),
  ('Special Sale 2', 17.00, '2023-11-01', '2023-11-30'),
  ('Special Sale 3', 37.00, '2023-11-01', '2023-11-30'),
  ('Special Sale 4', 44.00, '2023-11-01', '2023-11-30'),
  ('Special Sale 5', 18.00, '2023-11-01', '2023-11-30'),
  ('Special Sale 6', 20.00, '2023-11-01', '2023-11-30'),
  ('Special Sale 7', 32.00, '2023-11-01', '2023-11-30');



ALTER TABLE products
ADD COLUMN discount_id INTEGER REFERENCES discounts(id);

UPDATE products
SET discount_id = 3
WHERE product_id = 7;


ALTER TABLE discounts
RENAME COLUMN id TO discount_id;

UPDATE discounts
SET discount_percentage = 25
WHERE discount_id = 1;


CREATE TABLE users (
    user_id INT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    date_of_birth DATE,
    email VARCHAR(255),
    password VARCHAR(255)
);

SELECT column_name
FROM information_schema.columns
WHERE table_name = 'customers';


ALTER TABLE customers
ADD COLUMN password VARCHAR(255) NOT NULL;

DELETE FROM customers;

ALTER TABLE customers RENAME COLUMN name TO login;


SELECT column_name
FROM information_schema.columns
WHERE table_name = 'customers';


ALTER TABLE customers
ADD COLUMN name VARCHAR(255),
ADD COLUMN date_of_birth DATE,
ADD COLUMN surname VARCHAR(255),
ADD COLUMN gender VARCHAR(50),
ADD COLUMN phone_number VARCHAR(20);


CREATE TABLE cards (
    card_id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(customer_id),
    card_number VARCHAR(16) NOT NULL,
    card_holder VARCHAR(255) NOT NULL,
    expiry_date VARCHAR(5) NOT NULL,
    cvc VARCHAR(3) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


TRUNCATE TABLE cards;

ALTER TABLE cards
ADD CONSTRAINT unique_card_number UNIQUE (card_number);

ALTER TABLE cards ALTER COLUMN expiry_date TYPE VARCHAR(7);

CREATE TABLE comments (
    comment_id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(product_id),
    customer_id INTEGER REFERENCES customers(customer_id),
    comment_text TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


SELECT 
    p.*, 
    COALESCE(AVG(c.rating), 0) AS avg_rating, 
    COUNT(c.comment_id) AS review_count
FROM products p
LEFT JOIN comments c ON p.product_id = c.product_id
GROUP BY p.product_id;

ALTER TABLE products ADD COLUMN avg_rating NUMERIC DEFAULT 0;
ALTER TABLE products ADD COLUMN review_count INTEGER DEFAULT 0;

CREATE TABLE promotions (
    promotion_id SERIAL PRIMARY KEY,         -- Уникальный идентификатор акции
    product_id INT REFERENCES products(product_id),  -- Связь с продуктом
    discount_percentage DECIMAL(5, 2),       -- Процент скидки
    start_date TIMESTAMP,                    -- Дата начала акции
    end_date TIMESTAMP,                      -- Дата окончания акции
    is_active BOOLEAN DEFAULT true           -- Флаг активности акции
);

SELECT p.*, 
       pr.start_date, 
       pr.end_date, 
       pr.discount_percentage
FROM products p
LEFT JOIN promotions pr ON p.product_id = pr.product_id
WHERE pr.is_active = true AND pr.start_date <= NOW() AND pr.end_date >= NOW()

ALTER TABLE promotions ADD CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(product_id);


SELECT p.*, pr.discount_percentage, pr.start_date, pr.end_date
FROM products p
JOIN promotions pr ON p.product_id = pr.product_id
WHERE pr.is_active = true AND p.product_id = $1;

ALTER TABLE promotions DROP COLUMN product_id; -- Убедитесь, что вы удаляете дублирующее поле

ALTER TABLE promotions ADD COLUMN discount_id INTEGER;
ALTER TABLE promotions ADD CONSTRAINT fk_discount FOREIGN KEY (discount_id) REFERENCES discounts(discount_id);

SELECT p.*, pr.discount_percentage AS promotion_discount, d.discount_percentage AS discount_discount
FROM products p
LEFT JOIN promotions pr ON p.product_id = pr.product_id AND pr.is_active = true
LEFT JOIN discounts d ON p.discount_id = d.discount_id
WHERE p.product_id = 4;

ALTER TABLE promotions ADD COLUMN product_id INTEGER;
ALTER TABLE promotions ADD CONSTRAINT fk_product FOREIGN KEY (product_id) REFERENCES products(product_id);

SELECT p.*, pr.discount_percentage AS promotion_discount, pr.start_date, pr.end_date
FROM products p
LEFT JOIN promotions pr ON p.product_id = pr.product_id
WHERE pr.is_active = true AND p.product_id = 4;

SELECT p.*, pr.discount_percentage AS promotion_discount, d.discount_percentage AS discount_discount
FROM products p
LEFT JOIN promotions pr ON p.product_id = pr.product_id AND pr.is_active = true
LEFT JOIN discounts d ON p.discount_id = d.discount_id
WHERE p.product_id = 4;

INSERT INTO promotions (product_id, discount_percentage, start_date, end_date, is_active, discount_id)
VALUES (4, 20, NOW(), NOW() + INTERVAL '1 month', true, 1);

ALTER TABLE product_images
ADD COLUMN image_angle VARCHAR(50);



-- Обновляем углы для продуктов, у которых ровно 4 изображения
WITH ProductImageRanks AS (
    SELECT 
        image_id, 
        product_id, 
        ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY image_id) AS image_rank
    FROM product_images
    WHERE product_id IN (
        SELECT product_id FROM product_images GROUP BY product_id HAVING COUNT(image_id) = 4
    )
)
UPDATE product_images
SET image_angle = CASE
    WHEN image_rank = 1 THEN 'left_side'
    WHEN image_rank = 2 THEN 'top'
    WHEN image_rank = 3 THEN 'front_left'
    WHEN image_rank = 4 THEN 'back'
END
FROM ProductImageRanks
WHERE product_images.image_id = ProductImageRanks.image_id;

-- Обновляем углы для продуктов, у которых только одно изображение
UPDATE product_images
SET image_angle = 'front'
WHERE product_id IN (
    SELECT product_id FROM product_images GROUP BY product_id HAVING COUNT(image_id) = 1
);

-- Обновляем углы для продуктов, у которых ровно 3 изображения
WITH ProductImageRanks AS (
    SELECT 
        image_id, 
        product_id, 
        ROW_NUMBER() OVER (PARTITION BY product_id ORDER BY image_id) AS image_rank
    FROM product_images
    WHERE product_id IN (
        SELECT product_id FROM product_images GROUP BY product_id HAVING COUNT(image_id) = 3
    )
)
UPDATE product_images
SET image_angle = CASE
    WHEN image_rank = 1 THEN 'front'
    WHEN image_rank = 2 THEN 'back'
    WHEN image_rank = 3 THEN 'side'
END
FROM ProductImageRanks
WHERE product_images.image_id = ProductImageRanks.image_id;

ALTER TABLE products
ADD COLUMN stock_quantity INTEGER DEFAULT 0 CHECK (stock_quantity >= 0);

UPDATE products
SET stock_quantity = FLOOR(RANDOM() * 1000 + 1);

CREATE OR REPLACE FUNCTION sync_promotions_to_discounts()
RETURNS TRIGGER AS $$
BEGIN
    -- Проверяем, существует ли уже скидка с таким ID
    IF NOT EXISTS (SELECT 1 FROM discounts WHERE discount_id = NEW.discount_id) THEN
        -- Вставляем новую скидку, если она не существует
        INSERT INTO discounts (discount_id, discount_name, discount_percentage, start_date, end_date)
        VALUES (NEW.discount_id, 'Automatic Promotion Discount', NEW.discount_percentage, NEW.start_date, NEW.end_date);
    ELSE
        -- Обновляем существующую скидку
        UPDATE discounts
        SET discount_percentage = NEW.discount_percentage,
            start_date = NEW.start_date,
            end_date = NEW.end_date
        WHERE discount_id = NEW.discount_id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Создаем триггер, который активируется при вставке или обновлении записей в 'promotions'
CREATE TRIGGER trg_sync_promotions_to_discounts
AFTER INSERT OR UPDATE ON promotions
FOR EACH ROW
EXECUTE PROCEDURE sync_promotions_to_discounts();

UPDATE discounts
SET 
    start_date = NOW(), 
    end_date = NOW() + INTERVAL '1 year';


UPDATE promotions
SET 
    is_active = TRUE,
    start_date = NOW(),
    end_date = NOW() + INTERVAL '1 year';

CREATE TABLE viewed_products (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(customer_id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(product_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE wish_list (
    wish_list_id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers(customer_id) ON DELETE CASCADE,
    product_id INTEGER NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
);

SELECT 
  p.product_id, 
  p.name AS product_name, 
  COALESCE(p.price, 0) AS price, 
  COALESCE(p.avg_rating, 0) AS avg_rating, 
  COALESCE(p.review_count, 0) AS review_count, 
  MIN(pi.image_url) AS product_image
FROM 
  wish_list wl
JOIN 
  products p ON wl.product_id = p.product_id
LEFT JOIN 
  product_images pi ON p.product_id = pi.product_id
WHERE 
  wl.customer_id = 1
GROUP BY 
  p.product_id;

UPDATE products 
SET name = 'Air Max' 
WHERE product_id = 9;