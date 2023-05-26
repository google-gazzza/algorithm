# 175-combine-two-tables
# leetcode/easy/175. Combine Two Tables
# Difficulty: easy
# URL: https://leetcode.com/problems/combine-two-tables/
#
#
# Example 1:
#
# Input:
# Person table:
# +----------+----------+-----------+
# | personId | lastName | firstName |
# +----------+----------+-----------+
# | 1        | Wang     | Allen     |
# | 2        | Alice    | Bob       |
# +----------+----------+-----------+
# Address table:
# +-----------+----------+---------------+------------+
# | addressId | personId | city          | state      |
# +-----------+----------+---------------+------------+
# | 1         | 2        | New York City | New York   |
# | 2         | 3        | Leetcode      | California |
# +-----------+----------+---------------+------------+
# Output:
# +-----------+----------+---------------+----------+
# | firstName | lastName | city          | state    |
# +-----------+----------+---------------+----------+
# | Allen     | Wang     | Null          | Null     |
# | Bob       | Alice    | New York City | New York |
# +-----------+----------+---------------+----------+
# Explanation:
# There is no address in the address table for the personId = 1 so we return null in their city and state.
# addressId = 1 contains information about the address of personId = 2.

SELECT p.firstName,
       p.lastName,
       a.city,
       a.state
FROM Person p
         LEFT JOIN Address a
                   ON p.personId = a.personId
