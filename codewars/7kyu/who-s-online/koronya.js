// [JS][7kyu] Who's Online?
// who-s-online
// https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript

const getStatus = (obj) => {
  if (obj.status === 'online' && obj.lastActivity > 10) {
    return 'away'
  }
  return obj.status
}

const whosOnline = (friends) => {
  const online = []
  const offline = []
  const away = []
  friends.forEach((friend) => {
    if (getStatus(friend) === 'online') {
      online.push(friend.username)
    } else if (getStatus(friend) === 'away') {
      away.push(friend.username)
    } else {
      offline.push(friend.username)
    }
  })

  const result = {}
  if (online.length > 0) {
    result.online = online
  }
  if (offline.length > 0) {
    result.offline = offline
  }
  if (away.length > 0) {
    result.away = away
  }

  return result
}

whosOnline([
  {
    username: 'David',
    status: 'online',
    lastActivity: 10,
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22,
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104,
  },
])
