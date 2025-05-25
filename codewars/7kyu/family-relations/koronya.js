// [JS][7kyu] Family Relations
// family-relations
// https://www.codewars.com/kata/5eaf798e739e39001218a2f4/train/javascript

const relations = (familyArray, targetPair) => {
  const familyMap = new Map()
  familyArray.forEach(([parent, child]) => {
    if (!familyMap.has(parent)) {
      familyMap.set(parent, { children: [child], parent: null })
    } else {
      familyMap.get(parent).children.push(child)
    }

    if (!familyMap.has(child)) {
      familyMap.set(child, { children: [], parent })
    } else {
      familyMap.get(child).parent = parent
    }
  })

  const list = targetPair.map((name) => {
    const { children, parent } = familyMap.get(name)
    return {
      level: parent === null ? 0 : children.length === 0 ? 2 : 1,
      children,
      parent,
      name,
    }
  })

  const [first, second] = list
  if (second.level === 0) {
    if (first.level === 1) {
      return 'Mother'
    } else if (first.level === 2) {
      return 'Grandmother'
    }
  }
  if (first.level === 0) {
    if (second.level === 1) {
      return 'Daughter'
    } else if (second.level === 2) {
      return 'Granddaughter'
    }
  }

  const levelDiff = first.level - second.level
  if (levelDiff === 0) {
    return first.parent === second.parent ? 'Sister' : 'Cousin'
  } else if (levelDiff === 1) {
    return first.parent !== second.name ? 'Aunt' : 'Mother'
  } else if (levelDiff === -1) {
    return second.parent !== first.name ? 'Niece' : 'Daughter'
  }
}

// const familyA = [
//   ['Enid', 'Susan'],
//   ['Susan', 'Deborah'],
// ]
// relations(familyA, ['Deborah', 'Enid'])
// relations(familyA, ['Enid', 'Susan'])

const familyB = [
  ['Enid', 'Susan'],
  ['Susan', 'Deborah'],
  ['Enid', 'Dianne'],
  ['Dianne', 'Judy'],
  ['Dianne', 'Fern'],
]

// relations(familyB, ['Judy', 'Fern'])
// relations(familyB, ['Deborah', 'Fern'])

// relations(familyB, ['Susan', 'Enid']) === 'Mother'
// relations(familyB, ['Enid', 'Susan']) === 'Daughter'
// relations(familyB, ['Deborah', 'Enid']) === 'Grandmother'
// relations(familyB, ['Enid', 'Deborah']) === 'Granddaughter'
// relations(familyB, ['Judy', 'Fern']) === 'Sister'
// relations(familyB, ['Deborah', 'Fern']) === 'Cousin'
// relations(familyB, ['Susan', 'Fern']) === 'Niece'
// relations(familyB, ['Fern', 'Susan']) === 'Aunt'
// relations(familyB, ['Susan', 'Deborah']) === 'Daughter'

// Mother, Daughter, Grandmother, Granddaughter, Sister, Cousin, Aunt, Niece
