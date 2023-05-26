# duck-duck-goose
# Duck Duck Goose
# difficulty: 8kyu
# https://www.codewars.com/kata/582e0e592029ea10530009ce

def duck_duck_goose(players, goose):
    return players[(goose - 1) % len(players)].name
