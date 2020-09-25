-- grocery-store-inventory
-- GROCERY STORE: Inventory
-- difficulty: 7kyu
-- https://www.codewars.com/kata/5a8eb3fb57c562110f0000a1/

SELECT p.id,
       p.name,
       p.stock
FROM products AS p
WHERE p.stock <= 2
  AND p.producent = 'CompanyA'
ORDER BY p.id DESC;
