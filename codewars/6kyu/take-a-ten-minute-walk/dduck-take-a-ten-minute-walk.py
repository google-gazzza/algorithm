# https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript
# should read this - mutable default arguments - https://docs.python-guide.org/writing/gotchas/

step_to_coordinate = {
    "n": {"key": "x", "value": +1},
    "s": {"key": "x", "value": -1},
    "e": {"key": "y", "value": +1},
    "w": {"key": "y", "value": -1},
}


def is_valid_walk(steps, count=0, x=0, y=0) -> bool:
    current_step = step_to_coordinate[steps.pop(0)]
    x += current_step["value"] if current_step["key"] == "x" else 0
    y += current_step["value"] if current_step["key"] == "y" else 0
    if count == 9 and len(steps) == 0 and x == 0 and y == 0:
        return True

    return is_valid_walk(steps, count + 1, x, y) if len(steps) and count < 10 else False


print(is_valid_walk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return true')
print(is_valid_walk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'should return false')
print(is_valid_walk(['w']), 'should return false');
print(is_valid_walk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'should return false')
print(is_valid_walk(['n', 'w', 'n', 'w', 'n', 'w', 'n', 'w', 'n', 'w']), 'should return false')
