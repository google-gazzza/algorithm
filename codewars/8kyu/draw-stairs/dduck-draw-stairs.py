# https://www.codewars.com/kata/draw-stairs/


def draw_stairs(index, str=''):
    if index:
        return draw_stairs(index - 1, "\n" + "".rjust(index - 1, ' ') + 'I' + str)
    return str[1:]


print(draw_stairs(3))
