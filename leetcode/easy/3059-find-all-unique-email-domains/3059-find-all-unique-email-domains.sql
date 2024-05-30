-- // 3059-find-all-unique-email-domains
-- // URL: https://leetcode.com/problems/find-all-unique-email-domains/description/

-- Write your PostgreSQL query statement below
SELECT SPLIT_PART(email, '@', 2) AS email_domain,
       COUNT(email) AS count
FROM Emails
WHERE SPLIT_PART(email, '.', 2) = 'com'
GROUP BY email_domain
ORDER BY email_domain ASC
