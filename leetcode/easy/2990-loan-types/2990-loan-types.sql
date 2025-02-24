-- 2990-loan-types
-- URL: https://leetcode.com/problems/loan-types/description/
--
-- Loans table:
-- +---------+---------+-----------+
-- | loan_id | user_id | loan_type |
-- +---------+---------+-----------+
-- | 683     | 101     | Mortgage  |
-- | 218     | 101     | AutoLoan  |
-- | 802     | 101     | Inschool  |
-- | 593     | 102     | Mortgage  |
-- | 138     | 102     | Refinance |
-- | 294     | 102     | Inschool  |
-- | 308     | 103     | Refinance |
-- | 389     | 104     | Mortgage  |
-- +---------+---------+-----------+
-- Output
-- +---------+
-- | user_id |
-- +---------+
-- | 102     |
-- +---------+

SELECT user_id
FROM Loans
WHERE loan_type = 'Mortgage'
  and loan_type = 'Refinance'
GROUP BY user_id
HAVING COUNT(DISTINCT loan_type) = 2;
