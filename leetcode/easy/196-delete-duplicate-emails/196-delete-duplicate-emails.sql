# 196-delete-duplicate-emails
# leetcode/easy/196. Delete Duplicate Emails
# Difficulty: easy
# URL: https://leetcode.com/problems/delete-duplicate-emails/
#
# Table: Person
#
# +-------------+---------+
# | Column Name | Type    |
# +-------------+---------+
# | id          | int     |
# | email       | varchar |
# +-------------+---------+
# id is the primary key column for this table.
# Each row of this table contains an email. The emails will not contain uppercase letters.
#
#
# Write an SQL query to delete all the duplicate emails, keeping only one unique email with the smallest id. Note that you are supposed to write a DELETE statement and not a SELECT one.
#
# Return the result table in any order.
#
# The query result format is in the following example.
#
#
#
# Example 1:
#
# Input:
# Person table:
# +----+------------------+
# | id | email            |
# +----+------------------+
# | 1  | john@example.com |
# | 2  | bob@example.com  |
# | 3  | john@example.com |
# +----+------------------+
# Output:
# +----+------------------+
# | id | email            |
# +----+------------------+
# | 1  | john@example.com |
# | 2  | bob@example.com  |
# +----+------------------+
# Explanation: john@example.com is repeated two times. We keep the row with the smallest Id = 1.

DELETE
FROM Person
WHERE id NOT IN (
    SELECT *
    FROM (
             SELECT MIN(id)
             FROM Person
             GROUP BY email
         ) AS meaningless_alias
);


# NOTE: iteresting solution
# https://leetcode.com/problems/delete-duplicate-emails/discuss/55553/Simple-Solution

DELETE p1
FROM Person p1,
     Person p2
WHERE p1.Email = p2.Email
  AND p1.Id > p2.Id
