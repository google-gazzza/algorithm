// [JS][7kyu] Likes Vs Dislikes
// likes-vs-dislikes
// https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript

// Like, Dislike, Nothing come from Preloaded

// const Like = 'Like'
// const Dislike = 'Dislike'
// const Nothing = 'Nothing'

const likeOrDislike = (buttons) => {
  return buttons.reduce((prevState, curButton) => {
    if (prevState === Nothing) {
      return curButton
    } else if (prevState === Like && curButton === Dislike) {
      return Dislike
    } else if (prevState === Dislike && curButton === Like) {
      return Like
    } else {
      return Nothing
    }
  }, Nothing)
}

likeOrDislike([Dislike]) === Dislike
likeOrDislike([Like, Like]) === Nothing
likeOrDislike([Dislike, Like]) === Like
likeOrDislike([Like, Dislike, Dislike]) === Nothing

likeOrDislike([Dislike, Dislike]) === Nothing
likeOrDislike([Like, Like, Like]) === Like
likeOrDislike([Like, Dislike]) === Dislike
likeOrDislike([Dislike, Like, Dislike]) === Dislike
likeOrDislike([Like, Like, Dislike, Like, Like, Like, Like, Dislike]) === Dislike
likeOrDislike([]) === Nothing
