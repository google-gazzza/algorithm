"""
cat-years-dog-years
codewars/8kyu/Cat years, Dog years
Difficulty: 8kyu
URL: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/
"""


def human_years_cat_years_dog_years(human_years):
    def calculate_animal_age(base, human_years, multiply):
        return base + (max((human_years - 2), 0) * multiply)

    if human_years >= 1:
        cat = 15
        dog = 15

    if human_years >= 2:
        cat += 9
        dog += 9

    return [
        human_years,
        calculate_animal_age(cat, human_years, 4),
        calculate_animal_age(dog, human_years, 5),
    ]


def test_human_cat_years_dog_years():
    assert human_years_cat_years_dog_years(1) == [1, 15, 15]
    assert human_years_cat_years_dog_years(2) == [2, 24, 24]
    assert human_years_cat_years_dog_years(10) == [10, 56, 64]
