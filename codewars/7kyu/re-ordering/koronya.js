// [JS][7kyu] ReOrdering
// re-ordering
// https://www.codewars.com/kata/5785cd91a1b8d5c06e000007/train/javascript

const isStartUpper = (str) => str[0] === str[0].toUpperCase()

const reOrdering = (text) => {
  return text
    .split(' ')
    .sort((a, b) => (isStartUpper(a) ? -1 : 1))
    .join(' ')
}

reOrdering('ming Yao') === 'Yao ming'
reOrdering('Mano donowana') === 'Mano donowana'
reOrdering('wario LoBan hello') === 'LoBan wario hello'
reOrdering('bull color pig Patrick') === 'Patrick bull color pig'
reOrdering('jojo ddjajdiojdwo ana G nnibiial') === 'G jojo ddjajdiojdwo ana nnibiial'
reOrdering('is one of those rare names that s both exotic and simple Adira') === 'Adira is one of those rare names that s both exotic and simple'
reOrdering('is an older name than annabel Amabel and a lot more distinctive') === 'Amabel is an older name than annabel and a lot more distinctive'
reOrdering('JoJo') === 'JoJo'
reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z') === 'Z a b c d e f g h i j k l m n o p q r s t u v w x y'
reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z') === 'N a b c d e f g h i j k l m o p q r s t u v w x y z'
