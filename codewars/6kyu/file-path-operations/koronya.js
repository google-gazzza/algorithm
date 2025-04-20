// [JS][6kyu] File Path Operations
// file-path-operations
// https://www.codewars.com/kata/5844e0890d3bedc5c5000e54/train/javascript

class FileMaster {
  constructor(filepath) {
    this.extensionValue = filepath.split('.').pop()
    this.filenameValue = filepath.split('/').pop().split('.').shift()
    this.dirpathValue = filepath.split('/').slice(0, -1).join('/') + '/'
  }

  extension() {
    return this.extensionValue
  }

  filename() {
    return this.filenameValue
  }

  dirpath() {
    return this.dirpathValue
  }
}

const fm = new FileMaster('/Users/person1/Pictures/house.png')
fm.extension() === 'png'
fm.filename() === 'house'
fm.dirpath() === '/Users/person1/Pictures/'
