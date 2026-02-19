// [JS][7kyu] Radio DJ helper function
// radio-dj-helper-function
// https://www.codewars.com/kata/561bbcb0fbbfb0f5010000ee/train/javascript

const convertPlayback = (playback) => {
  const [minutes, seconds] = playback.split(':').map(Number)
  return minutes * 60 + seconds
}

const longestPossible = (playback) => {
  const arr = songs.filter((song) => convertPlayback(song.playback) <= playback).sort((a, b) => convertPlayback(b.playback) - convertPlayback(a.playback))
  return arr.length > 0 ? arr[0].title : false
}
