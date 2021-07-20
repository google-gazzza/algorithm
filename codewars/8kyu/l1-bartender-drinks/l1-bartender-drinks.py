"""
l1-bartender-drinks
codewars/8kyu/L1: Bartender, drinks!
Difficulty: 8kyu
URL: https://www.codewars.com/kata/568dc014440f03b13900001d/
"""

def get_drink_by_profession(param):
    param = ' '.join(map(lambda x: x.capitalize(), param.split(' ')))

    dict = {
        "Jabroni": "Patron Tequila",
        "School Counselor": "Anything with Alcohol",
        "Programmer": "Hipster Craft Beer",
        "Bike Gang Member": "Moonshine",
        "Politician": "Your tax dollars",
        "Rapper": "Cristal",
    }

    if param in dict:
        return dict.get(param)

    return "Beer"


d = {
    "jabroni": "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    "programmer": "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    "politician": "Your tax dollars",
    "rapper": "Cristal"
}


def get_drink_by_profession(s):
    return d.get(s.lower(), "Beer")


def get_drink_by_profession(param):
    return {
        "Jabroni": "Patron Tequila",
        "School Counselor": "Anything with Alcohol",
        "Programmer": "Hipster Craft Beer",
        "Bike Gang Member": "Moonshine",
        "Politician": "Your tax dollars",
        "Rapper": "Cristal"
    }.get(param.title(), "Beer")


def test_get_drink_by_profession():
    assert get_drink_by_profession("jabrOni") == "Patron Tequila"
    assert get_drink_by_profession("scHOOl counselor") == "Anything with Alcohol"
    assert get_drink_by_profession("prOgramMer") == "Hipster Craft Beer"
    assert get_drink_by_profession("bike ganG member") == "Moonshine"
    assert get_drink_by_profession("poLiTiCian") == "Your tax dollars"
    assert get_drink_by_profession("rapper") == "Cristal"
    assert get_drink_by_profession("pundit") == "Beer"
    assert get_drink_by_profession("Pug") == "Beer"
