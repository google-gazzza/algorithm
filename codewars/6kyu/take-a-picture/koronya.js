// [JS][6kyu] Take a picture !
// take-a-picture
// https://www.codewars.com/kata/56c9f47b0844d85f81000fc2/train/javascript

const compareSequence = (strA, strB) => Number(strA.substring(3)) - Number(strB.substring(3))

const sortPhotos = (pics) => {
  pics.sort((a, b) => {
    const [yearA, imgA] = a.split('.')
    const [yearB, imgB] = b.split('.')
    if (yearA === yearB) {
      return compareSequence(imgA, imgB)
    }
    return yearA - yearB
  })
  const candidates = pics.slice(-5)
  const [lastYear, lastImgSequence] = candidates[candidates.length - 1].split('.')
  const nextItem = `${lastYear}.img${Number(lastImgSequence.substring(3)) + 1}`

  return [...candidates, nextItem]
}

// sortPhotos(['2016.img1', '2016.img2', '2016.img3', '2016.img4', '2016.img5'])
// sortPhotos(['2016.img4', '2016.img5', '2016.img1', '2016.img3', '2016.img2'])
// sortPhotos(['2012.img2', '2016.img1', '2016.img3', '2016.img4', '2016.img5'])
// sortPhotos(['2016.img1', '2013.img3', '2016.img2', '2015.img3', '2012.img7', '2016.img4', '2013.img5'])
// sortPhotos(['2016.img7', '2016.img2', '2016.img3', '2015.img3', '2012.img8', '2016.img4', '2016.img5'])
