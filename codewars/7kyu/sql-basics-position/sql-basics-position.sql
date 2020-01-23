-- https://www.codewars.com/kata/59401e0e54a655a298000040/train/sql
-- reference - order by http://www.postgresqltutorial.com/postgresql-order-by/

select "id",
       "name",
       position(',' in characteristics) as comma
from monsters
order by comma
