// bumps-in-the-road
// codewars/7kyu/Bumps in the Road
// Difficulty: 7kyu
// URL: https://www.codewars.com/kata/57ed30dde7728215300005fa/

function bump(x) {
    // if (x.match(/n/g)?.length > 15) {
    if ((x.match(/n/g) || '').length > 15) {
      return 'Car Dead';
    }
    return 'Woohoo!';
  }
  
  test("Example tests", () => {
    expect(bump("n")).toEqual("Woohoo!");
    expect(bump("_nnnnnnn_n__n______nn__nn_nnn")).toEqual("Car Dead");
    expect(bump("______n___n_")).toEqual("Woohoo!");
  });
  