// [JS][6kyu] extract file name
// extract-file-name
// https://www.codewars.com/kata/597770e98b4b340e5b000071/train/javascript

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    const [_, ...rest] = dirtyFileName.split('_')
    const [fileName, extension] = rest.join('_').split('.')
    return `${fileName}.${extension}`
  }
}

FileNameExtractor.extractFileName('1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34') === 'FILE_NAME.EXTENSION'
FileNameExtractor.extractFileName('1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION') === 'FILE_NAME.EXTENSION'
