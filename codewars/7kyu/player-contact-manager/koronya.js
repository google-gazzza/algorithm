// [JS][7kyu] Player Contact Manager
// player-contact-manager
// https://www.codewars.com/kata/5b203de891c7469b520000b4/train/javascript

const playerManager = (players) => {
  if (players === null || players.length === 0) {
    return []
  }
  const arr = players.split(', ')
  const totalPlayers = arr.length / 2
  const result = []
  for (let i = 0; i < totalPlayers; i += 1 || 0) {
    const player = arr.shift()
    const contact = Number(arr.shift())
    result.push({ player, contact })
  }

  return result
}

// playerManager('John Doe, 8167238327, Jane Doe, 8163723827')
// playerManager('')
