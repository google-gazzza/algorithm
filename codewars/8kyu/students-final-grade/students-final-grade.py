# students-final-grade
# codewars/8kyu/Student's Final Grade
# Difficulty: 8kyu
# URL: https://www.codewars.com/kata/5ad0d8356165e63c140014d4/

def final_grade(exam, projects):
    if exam > 90 or projects > 10:
        return 100
    elif exam > 75 and projects >= 5:
        return 90
    elif exam > 50 and projects >= 2:
        return 75
    return 0


def test_final_grade():
    assert final_grade(100, 12) == 100
    assert final_grade(85, 5) == 90
