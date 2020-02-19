# https://www.codewars.com/kata/55f4a44eb72a0fa91600001e

from unittest import TestCase

create_message = lambda s="", res="": (lambda newS="": create_message(newS, f'{res} {s}')) if s else res[1:]

TestCase().assertEqual(create_message("Hello")("World!")("how")("are")("you?")(), "Hello World! how are you?")
