--https://programmers.co.kr/learn/courses/30/lessons/59046
--MySQL
--��ÿ� ���� ã��
--1.ANIMAL_ID������ ����
--2.Name�� 'Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty'�� ã��

-- MySQL
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE
  FROM ANIMAL_INS 
 WHERE NAME IN ('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty' )
 ORDER BY ANIMAL_ID
