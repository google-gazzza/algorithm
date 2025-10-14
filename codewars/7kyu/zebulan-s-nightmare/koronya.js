// [JS][7kyu] Zebulan's Nightmare
// zebulan-s-nightmare
// https://www.codewars.com/kata/570fd7ad34e6130455001835/train/javascript

const zebulansNightmare = (functionName) => functionName.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())

zebulansNightmare('camel_case') === 'camelCase'
zebulansNightmare('mark_as_issue') === 'markAsIssue'
zebulansNightmare('copy_paste_pep8') === 'copyPastePep8'
zebulansNightmare('goto_next_kata') === 'gotoNextKata'
zebulansNightmare('repeat') === 'repeat'
zebulansNightmare('trolling_is_fun') === 'trollingIsFun'
zebulansNightmare('why') === 'why'
zebulansNightmare('123_abc_def') === '123AbcDef'
