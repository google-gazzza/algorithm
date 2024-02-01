# https://www.codewars.com/kata/5264d2b162488dc400000001/

from unittest import TestCase

spin_words = lambda sentence: " ".join(list(map(lambda x: x[::-1] if len(x) > 4 else x, sentence.split(" "))))

TestCase().assertEqual(spin_words("Welcome"), "emocleW")
TestCase().assertEqual(spin_words("Welcome"), "emocleW")
TestCase().assertEqual(spin_words("Hey fellow warriors"), "Hey wollef sroirraw")
TestCase().assertEqual(spin_words("This is a test"), "This is a test")
TestCase().assertEqual(spin_words("This is another test"), "This is rehtona test")
TestCase().assertEqual(spin_words("You are almost to the last test"), "You are tsomla to the last test")
TestCase().assertEqual(spin_words("Just kidding there is still one more"), "Just gniddik ereht is llits one more")
TestCase().assertEqual(spin_words("Seriously this is the last one"), "ylsuoireS this is the last one")
