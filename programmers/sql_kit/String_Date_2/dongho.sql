--https://programmers.co.kr/learn/courses/30/lessons/59047
--MySQL
--�̸��� el�� ���� ����ã��
--1.NAme������ ����
--2.Name�� el�� �� Dog�� ã��

-- MySQL
SELECT ANIMAL_ID, NAME
 FROM ANIMAL_INS  
WHERE Name LIKE '%el%' 
  AND ANIMAL_TYPE = 'Dog'
 ORDER BY Name 
