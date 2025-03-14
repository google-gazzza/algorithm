// [JS][7kyu] Transposing a song
// transposing-a-song
// https://www.codewars.com/kata/55b6a3a3c776ce185c000021/train/javascript

const NOTE_ARR = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
const FLAT_NOTE_ARR = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']

const transpose = (song, interval) => {
  return song.map((note) => {
    const noteIndex = NOTE_ARR.includes(note) ? NOTE_ARR.indexOf(note) : FLAT_NOTE_ARR.indexOf(note)
    const value = noteIndex + interval
    const transposedIndex = value < 0 ? value + NOTE_ARR.length : value % NOTE_ARR.length
    return NOTE_ARR[transposedIndex]
  })
}

transpose(['Ab', 'Gb'], 2)
transpose(['Bb', 'C#', 'E'], -4)
