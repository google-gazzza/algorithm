# https://www.codewars.com/kata/580a094553bd9ec5d800007d

overThan1000Message = "It's hotter than the sun!!"
belowThan1000Message = "Help yourself to a honeycomb Yorkie for the glovebox."

apple = lambda x: overThan1000Message if (int(x) ** 2 > 1000) else belowThan1000Message

print(apple("50") == "It's hotter than the sun!!")
print(apple(4) == "Help yourself to a honeycomb Yorkie for the glovebox.")
