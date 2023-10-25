# leetcode/medium/2066. Account Balance
# 2066-account-balance
# URL: https://leetcode.com/problems/account-balance/description/


# Input:
# Transactions table:
# +------------+------------+----------+--------+
# | account_id | day        | type     | amount |
# +------------+------------+----------+--------+
# | 1          | 2021-11-07 | Deposit  | 2000   |
# | 1          | 2021-11-09 | Withdraw | 1000   |
# | 1          | 2021-11-11 | Deposit  | 3000   |
# | 2          | 2021-12-07 | Deposit  | 7000   |
# | 2          | 2021-12-12 | Withdraw | 7000   |
# +------------+------------+----------+--------+
# Output:
# +------------+------------+---------+
# | account_id | day        | balance |
# +------------+------------+---------+
# | 1          | 2021-11-07 | 2000    |
# | 1          | 2021-11-09 | 1000    |
# | 1          | 2021-11-11 | 4000    |
# | 2          | 2021-12-07 | 7000    |
# | 2          | 2021-12-12 | 0       |
# +------------+------------+---------+

SELECT account_id,
       day,
       SUM(
               CASE
                   WHEN type = 'Deposit' THEN amount
                   ELSE -amount
                   END
           ) OVER (PARTITION BY account_id ORDER BY day) AS balance
FROM Transactions;
