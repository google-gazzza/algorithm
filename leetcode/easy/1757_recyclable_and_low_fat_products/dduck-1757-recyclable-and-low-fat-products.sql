/*
1757_recyclable_and_low_fat_products

# leetcode/easy/1757. Recyclable and Low Fat Products
Difficulty: easy
URL: https://leetcode.com/problems/recyclable-and-low-fat-products/
Tags:

## Approach

### en

### kr

## Solution
### SQL

*/

SELECT Products.product_id
FROM Products
WHERE Products.low_fats = 'Y'
  and Products.recyclable = 'Y';
