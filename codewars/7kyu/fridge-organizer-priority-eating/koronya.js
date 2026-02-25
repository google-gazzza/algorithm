// [JS][7kyu] Fridge Organizer: Priority Eating
// fridge-organizer-priority-eating
// https://www.codewars.com/kata/69971f385353edeaf428e1b0/train/javascript

const fridgeOrganizer = (items) => {
  const arr = items.filter((item) => item.expiryDays >= 0)
  const almostEmptyList = arr.filter((item) => item.isAlmostEmpty).sort((a, b) => a.expiryDays - b.expiryDays || a.name.localeCompare(b.name))
  const notAlmostEmptyList = arr.filter((item) => !item.isAlmostEmpty).sort((a, b) => a.expiryDays - b.expiryDays || a.name.localeCompare(b.name))

  return [...almostEmptyList.map((item) => item.name), ...notAlmostEmptyList.map((item) => item.name)]
}

const items = [
  { name: 'Milk', expiryDays: 3, isAlmostEmpty: false },
  { name: 'Jam', expiryDays: 3, isAlmostEmpty: true },
  { name: 'Yogurt', expiryDays: 1, isAlmostEmpty: false },
  { name: 'Old Meat', expiryDays: -1, isAlmostEmpty: true },
  { name: "Today's Tofu", expiryDays: 0, isAlmostEmpty: false },
]

fridgeOrganizer(items)
