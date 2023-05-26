/*
leetcode/medium/609. Find Duplicate File in System
609-find-duplicate-file-in-system
uRL: https://leetcode.com/problems/find-duplicate-file-in-system/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

function findDuplicate(paths: string[]): string[][] {
  const map: Map<string, string[]> = new Map();

  paths.forEach((path) => {
    const [dir, ...files] = path.split(' ');
    files.forEach((file) => {
      const [name, content] = file.split('(');
      const filePath = `${dir}/${name}`;
      const fileContent = content.slice(0, content.length - 1);

      if (map.has(fileContent)) {
        map.get(fileContent).push(filePath);
      } else {
        map.set(fileContent, [filePath]);
      }
    });
  });

  return Array.from(map.values())
    .filter((value) => value.length > 1);
}

let paths = ['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)', 'root 4.txt(efgh)'];
console.log(findDuplicate(paths));
//?
// Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]
