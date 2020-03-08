// https://leetcode.com/problems/subsets/

// Runtime: 52 ms, faster than 97.42% of JavaScript online submissions for Subsets.
// Memory Usage: 34.9 MB, less than 70.59% of JavaScript online submissions for Subsets.

// Runtime: 56 ms, faster than 88.20% of JavaScript online submissions for Subsets.
// Memory Usage: 34.8 MB, less than 94.12% of JavaScript online submissions for Subsets.

// reference
// https://math.stackexchange.com/questions/349220/is-there-an-algorithm-to-find-all-subsets-of-a-set
// https://www.math-only-math.com/subsets-of-a-given-set.html
// https://en.wikipedia.org/wiki/Subset

// it's the key
// https://www.geeksforgeeks.org/finding-all-subsets-of-a-given-set-in-java/

const subsets = (set, index = 0, subsets = []) => {
  const length = set.length;
  
  // subset of a given set = 2^m - 1
  // so i=0 < (2 ** set.length) will iterate 2^m - 1
  for (let i = 0; i < (2 ** length); i += 1) {
    const subset = [];
    
    // iterate all for find subset
    for (let j = 0; j < length; j += 1) {
      
      // 'i' will be 0, 1, 2 ... m
      // that means last *one* bit of 'i' will 0, 1, 0, 1 repeat
      // (2 ** j) will be 0, 2, 4, 6 ... 2 ** m
      // that means 'j' will 00, 10, 100, 110, 1000,
      // and last digit always 0
      // please reference line 51~
      // if you want logging your sef use console comment
      
      if (i & (2 ** j)) {
        subset.push(set[j]);
      }
      // console.log(`i=${i}, j=${j}, 2**j=${2 ** j}, i & (2**j)=${i & (2 ** j)}, set[j]=${set[j]}, subset=${subset}`);
    }
    subsets.push(subset);
    // console.log('----------------------');
    // console.log(subsets);
    // console.log('----------------------');
  }

  return subsets;
};

const set = [1, 2, 3];
subsets(set);
//?
// [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// i=0, j=0, 2**j=1, i & (2**j)=0, set[j]=1, subset=
// i=0, j=1, 2**j=2, i & (2**j)=0, set[j]=2, subset=
// i=0, j=2, 2**j=4, i & (2**j)=0, set[j]=3, subset=
// ----------------------
//     [ [] ]
// ----------------------
// i=1, j=0, 2**j=1, i & (2**j)=1, set[j]=1, subset=1
// i=1, j=1, 2**j=2, i & (2**j)=0, set[j]=2, subset=1
// i=1, j=2, 2**j=4, i & (2**j)=0, set[j]=3, subset=1
// ----------------------
//   [ [], [ 1 ] ]
// ----------------------
// i=2, j=0, 2**j=1, i & (2**j)=0, set[j]=1, subset=
// i=2, j=1, 2**j=2, i & (2**j)=2, set[j]=2, subset=2
// i=2, j=2, 2**j=4, i & (2**j)=0, set[j]=3, subset=2
// ----------------------
//   [ [], [ 1 ], [ 2 ] ]
// ----------------------
// i=3, j=0, 2**j=1, i & (2**j)=1, set[j]=1, subset=1
// i=3, j=1, 2**j=2, i & (2**j)=2, set[j]=2, subset=1,2
// i=3, j=2, 2**j=4, i & (2**j)=0, set[j]=3, subset=1,2
// ----------------------
//   [ [], [ 1 ], [ 2 ], [ 1, 2 ] ]
// ----------------------
// i=4, j=0, 2**j=1, i & (2**j)=0, set[j]=1, subset=
// i=4, j=1, 2**j=2, i & (2**j)=0, set[j]=2, subset=
// i=4, j=2, 2**j=4, i & (2**j)=4, set[j]=3, subset=3
// ----------------------
//   [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ] ]
// ----------------------
// i=5, j=0, 2**j=1, i & (2**j)=1, set[j]=1, subset=1
// i=5, j=1, 2**j=2, i & (2**j)=0, set[j]=2, subset=1
// i=5, j=2, 2**j=4, i & (2**j)=4, set[j]=3, subset=1,3
// ----------------------
//   [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ] ]
// ----------------------
// i=6, j=0, 2**j=1, i & (2**j)=0, set[j]=1, subset=
// i=6, j=1, 2**j=2, i & (2**j)=2, set[j]=2, subset=2
// i=6, j=2, 2**j=4, i & (2**j)=4, set[j]=3, subset=2,3
// ----------------------
//   [
//     [],       [ 1 ],
//     [ 2 ],    [ 1, 2 ],
//     [ 3 ],    [ 1, 3 ],
//     [ 2, 3 ]
//   ]
// ----------------------
// i=7, j=0, 2**j=1, i & (2**j)=1, set[j]=1, subset=1
// i=7, j=1, 2**j=2, i & (2**j)=2, set[j]=2, subset=1,2
// i=7, j=2, 2**j=4, i & (2**j)=4, set[j]=3, subset=1,2,3
// ----------------------
//   [
//     [],       [ 1 ],
//     [ 2 ],    [ 1, 2 ],
//     [ 3 ],    [ 1, 3 ],
//     [ 2, 3 ], [ 1, 2, 3 ]
//   ]
// ----------------------
