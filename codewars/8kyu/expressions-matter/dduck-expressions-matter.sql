-- https://www.codewars.com/kata/expressions-matter
-- https://www.postgresql.org/docs/current/functions-conditional.html#FUNCTIONS-GREATEST-LEAST

SELECT greatest(a * (b + c),
                a * b * c,
                a + b * c,
                (a + b) * c,
                a + b + c)
           AS res
FROM expression_matter;
