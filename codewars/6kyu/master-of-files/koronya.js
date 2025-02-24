// [JS][6kyu] Master of Files
// master-of-files
// https://www.codewars.com/kata/574bd867d277832448000adf/train/javascript

String.prototype.isAudio = function () {
  return this.match(/^[a-zA-Z]+(\.mp3$|\.flac$|\.aac$|\.alac$)/) !== null
}
String.prototype.isImage = function () {
  return this.match(/^[a-zA-Z]+(\.jpg$|\.jpeg$|\.bmp$|\.gif$|\.png$)/) !== null
}

'Nothing Else Matters.mp3'.isAudio() === false
'NothingElseMatters.mp3'.isAudio() === true
'DaftPunk.FLAC'.isAudio() === false
'DaftPunk.flac'.isAudio() === true
'AmonTobin.aac'.isAudio() === true
' Amon Tobin.alac'.isAudio() === false
'tobin.alac'.isAudio() === true
'Home.jpg'.isImage() === true
'flat.jpeg'.isImage() === true
'icon.bmp'.isImage() === true
'icon2.jpg'.isImage() === false
'bounce.gif'.isImage() === true
'animate bounce.GIF'.isImage() === false
'transparency.png'.isImage() === true
