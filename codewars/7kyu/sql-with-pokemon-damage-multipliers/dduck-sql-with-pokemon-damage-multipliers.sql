-- sql-with-pokemon-damage-multipliers
-- SQL with Pokemon: Damage Multipliers
-- difficulty: 7kyu
-- https://www.codewars.com/kata/5ab828bcedbcfc65ea000099

SELECT q.*
FROM (SELECT p.pokemon_name,
             p.str * m.multiplier AS modifiedStrength,
             m.element
      FROM pokemon AS p
               LEFT JOIN multipliers AS m
                         ON p.element_id = m.id
      WHERE m.element != 'water') AS q
WHERE q.modifiedStrength >= 40
ORDER BY q.modifiedStrength DESC;
