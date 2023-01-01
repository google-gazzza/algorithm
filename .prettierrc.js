// {
//   "useTabs": false,
//   "tabWidth": 2,
//   "trailingComma": "all",
//   "semi": false,
//   "singleQuote": true,

//   "arrowParens": "avoid"
// }

// 2.2.1 기준
const defaultSettingsOfPrettier = {
  printWidth: 80, //  줄 바꿈 할 폭 길이
  tabWidth: 2, // 탭 너비
  useTabs: false, // 탭 사용 여부
  semi: true, // 세미콜론 사용 여부
  singleQuote: false, // single 쿼테이션 사용 여부
  quoteProps: 'as-needed', // 객체 속성에 쿼테이션 적용 방식
  jsxSingleQuote: false, // JSX에 single 쿼테이션 사용 여부
  trailingComma: 'all', // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  bracketSpacing: true, // 객체 리터럴에서 괄호에 공백 삽입 여부
  jsxBracketSameLine: false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  arrowParens: 'always', // 화살표 함수 괄호 사용 방식
  rangeStart: 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
  rangeEnd: Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
  parser: '', // 사용할 parser를 지정, 자동으로 지정됨
  filepath: '', // parser를 유추할 수 있는 파일을 지정
  requirePragma: false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
  insertPragma: false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
  proseWrap: 'preserve', // markdown 텍스트의 줄바꿈 방식 (v1.8.2)
  htmlWhitespaceSensitivity: 'css', // HTML 공백 감도 설정
  vueIndentScriptAndStyle: false, // Vue 파일의 script와 style 태그의 들여쓰기 여부 (v1.19.0)
  endOfLine: 'lf', // EoF 방식, OS별로 처리 방식이 다름
  embeddedLanguageFormatting: 'auto', // First available in v2.1.0
}

// for custom settings
module.exports = {
  ...defaultSettingsOfPrettier,
  printWidth: 160,
  jsxBracketSameLine: true,
  semi: false,
  singleQuote: true,
}
