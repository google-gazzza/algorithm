const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

const disemvowel = (str) => {
  let result = "";
  for (char of str) {
    if (vowelSet.has(char) === false) {
      result += char;
    }
  }

  return result;
};

disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!";
disemvowel(
  "No offense but,\nYour writing is among the worst I've ever read"
) === "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd";
disemvowel("What are you, a communist?") === "Wht r y,  cmmnst?";
