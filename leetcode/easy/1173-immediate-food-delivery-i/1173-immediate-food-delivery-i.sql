# leetcode/easy/1173. Immediate Food Delivery I
# 1173-immediate-food-delivery-i
# URL: https://leetcode.com/problems/immediate-food-delivery-i/

# +-----------------------------+---------+
# | Column Name                 | Type    |
# +-----------------------------+---------+
# | delivery_id                 | int     |
# | customer_id                 | int     |
# | order_date                  | date    |
# | customer_pref_delivery_date | date    |
# +-----------------------------+---------+

SELECT ROUND(
                       (SELECT count(*)
                        FROM Delivery
                        WHERE order_date = customer_pref_delivery_date)
                       /
                       (SELECT count(*) FROM Delivery)
                   * 100
           , 2)
           AS immediate_percentage
