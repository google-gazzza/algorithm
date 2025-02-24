// extract-file-name
// https://www.codewars.com/kata/597770e98b4b340e5b000071/

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    let [fileName, extension] = dirtyFileName.split('.');
    return `${fileName.split('_').filter(isNaN).join('_')}.${extension}`;
  }
}

console.log(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"), "FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"), "FILE_NAME.EXTENSION");
