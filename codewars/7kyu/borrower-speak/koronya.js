// [JS][7kyu] Borrower Speak
// borrower-speak
// https://www.codewars.com/kata/57d2ba8095497e484e00002e/train/javascript

const borrow = (s) => s.toLowerCase().replace(/[^a-z]/g, '')

borrow('WhAt! FiCK! DaMn CAke?') === 'whatfickdamncake'
borrow('THE big PeOpLE Here!!') === 'thebigpeoplehere'
borrow('i AM a TINY BoY!!') === 'iamatinyboy'
