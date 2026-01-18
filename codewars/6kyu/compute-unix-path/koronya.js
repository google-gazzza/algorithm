// [JS][6kyu] Compute Unix path
// compute-unix-path
// https://www.codewars.com/kata/564b323d7ff0ed401400015f/train/javascript

const removeSpace = (str) => str.replace(/\s+/g, '')
const changeBackslashToSlash = (str) => str.replace(/\\/g, '/')
const removeFirstAndLastSlash = (str) => {
  if (str.startsWith('/')) {
    str = str.slice(1)
  }
  if (str.endsWith('/')) {
    str = str.slice(0, -1)
  }
  return str
}

const filterEmptyFragment = fragment => fragment !== ''
const filterSingleSlash = fragment => fragment !== '/'
const filterOnlySlashNot = fragment => !/^\/+$/.test(fragment);
const combinePathsUri = (...fragments) => '/' + fragments.map(removeSpace).filter(filterEmptyFragment).map(changeBackslashToSlash).map(removeFirstAndLastSlash).filter(filterSingleSlash).filter(filterEmptyFragment).filter(filterOnlySlashNot).join('/')

// combinePathsUri() === "/"
// combinePathsUri("google", "search", "test") === "/google/search/test"
// combinePathsUri("   /testing", "", "", "  \\  empty", "\\parts/", " and ", "", "with/different\\slashes    ") === "/testing/empty/parts/and/with/different/slashes"
// combinePathsUri(
//     " .. ", "/complex/path/with/slashes/inside/", " . ", "\\complex\\path\\with\\back\\slashes\\inside\\"
//     ) === "/../complex/path/with/slashes/inside/./complex/path/with/back/slashes/inside"

// combinePathsUri(" . "," / ","test"," \\ \\ \\ \\ ","search"," / / / / ","\\ / \\"," .. "," \\ \\ \\ \\ ")
// combinePathsUri('///')
// combinePathsUri("search","\\ / \\","\\complex\\path\\with\\back\\slashes\\inside\\"," \\ ","\\complex\\path\\with\\back\\slashes\\inside\\"," \\ ","/complex/path/with/slashes/inside/"," / "," \\ ")
// combinePathsUri("test"," .. ","part","    ","/ \\ /","/complex/path/with/slashes/inside/"," . ")



    

