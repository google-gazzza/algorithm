-- grocery-store-logistic-optimisation
-- GROCERY STORE: Logistic Optimisation
-- difficulty: 7kyu
-- https://www.codewars.com/kata/5a8ec692b17101bfc70001ba

SELECT count(*) AS count_products_types,
  producer
FROM products
GROUP BY producer
ORDER BY count_products_types DESC, producer ASC;
