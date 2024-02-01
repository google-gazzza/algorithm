# https://www.codewars.com/kata/5208f99aee097e6552000148/

from unittest import TestCase

import re

solution = lambda s: re.sub(pattern="([A-Z])", repl=" \\1", string=s)

TestCase().assertEqual(solution("helloWorld"), "hello World")
TestCase().assertEqual(solution("camelCase"), "camel Case")
TestCase().assertEqual(solution("breakCamelCase"), "break Camel Case")
