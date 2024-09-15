/*
950-reveal-cards-in-increasing-order
leetcode/medium/950. Reveal Cards In Increasing Order
URL: https://leetcode.com/problems/reveal-cards-in-increasing-order/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function deckRevealedIncreasing(deck: number[]): number[] {
  const revealedSequence: number[] = [];
  const simulationDeck = Array.from({ length: deck.length }, (_, i) => i);

  while (simulationDeck.length > 0) {
    const card = simulationDeck.shift();
    revealedSequence.push(card);

    const nextCard = simulationDeck.shift();
    if (nextCard) {
      simulationDeck.push(nextCard);
    }
  }

  const reversedCards: number[] = [];
  deck.sort((a, b) => a - b);

  for (let i = 0; i < deck.length; i += 1) {
    reversedCards[revealedSequence[i]] = deck[i];
  }

  return reversedCards;
}

let deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck));
// Output: [2,13,3,11,5,17,7]
