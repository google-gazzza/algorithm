"""
drink-about
codewars/8kyu/Drink about
Difficulty: 8kyu
URL: https://www.codewars.com/kata/56170e844da7c6f647000063/
"""

def people_with_age_drink(age):
    dict = {
        'children': 'toddy',
        'teens': 'coke',
        'young': 'beer',
        'adults': 'whisky',
    }

    if age < 14:
        group = 'children'
    elif age < 18:
        group = 'teens'
    elif age < 21:
        group = 'young'
    else:
        group = 'adults'

    return f'drink {dict[group]}'


def people_with_age_drink(age):
    if age <= 13:
        beverage = 'toddy'
    elif age > 13 and age <= 17:
        beverage = 'coke'
    elif age > 17 and age <= 20:
        beverage = 'beer'
    elif age > 20:
        beverage = 'whisky'
    return 'drink ' + beverage


def test_people_with_age_drink():
    assert people_with_age_drink(13) == 'drink toddy'
    assert people_with_age_drink(0) == 'drink toddy'
    assert people_with_age_drink(17) == 'drink coke'
    assert people_with_age_drink(15) == 'drink coke'
    assert people_with_age_drink(14) == 'drink coke'
    assert people_with_age_drink(20) == 'drink beer'
    assert people_with_age_drink(18) == 'drink beer'
    assert people_with_age_drink(22) == 'drink whisky'
    assert people_with_age_drink(21) == 'drink whisky'
