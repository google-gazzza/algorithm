--https://programmers.co.kr/learn/courses/30/lessons/59409
--MySQL
--�߼�ȭ ���� �ľ��ϱ�
--1.ANIMAL_ID������ ����
--2.�߼�ȭ���� : 'Neutered' �Ǵ� 'Spayed' �ܾ �� ����

-- MySQL
SELECT ANIMAL_ID, NAME, 
       CASE WHEN SEX_UPON_INTAKE LIKE 'Neutered%' 
              OR SEX_UPON_INTAKE LIKE 'Spayed%' THEN 'O'
            ELSE 'X' END AS �߼�ȭ
 FROM ANIMAL_INS  
 ORDER BY ANIMAL_ID 
