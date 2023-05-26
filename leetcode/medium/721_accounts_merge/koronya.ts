// [Medium] 721. Accounts Merge
// 721_accounts_merge

// https://leetcode.com/problems/accounts-merge
// Runtime: 360 ms, faster than 22.22% of TypeScript online submissions for Accounts Merge.
// Memory Usage: 52.2 MB, less than 44.44% of TypeScript online submissions for Accounts Merge.

function accountsMerge(accounts: string[][]): string[][] {
  let id: number = 0
  const emailMap = new Map<string, number>()
  const idMap = new Map<number, string>()
  const getNamesById = (id: number): string[] => {
    return [...emailMap]
      .filter((item) => item[1] === id)
      .map((item) => item[0])
      .sort()
  }

  accounts.forEach((account) => {
    const [name, ...emails] = account
    if (emails.every((email) => !emailMap.has(email) === true)) {
      id += 1
      emails.forEach((email) => {
        emailMap.set(email, id)
      })
      idMap.set(id, name)
    } else {
      const idSet = new Set<number>()
      emails.filter((email) => emailMap.has(email)).forEach((item) => idSet.add(emailMap.get(item)!))
      if (idSet.size === 1) {
        const findId = [...idSet][0]
        emails.forEach((email) => {
          emailMap.set(email, findId)
        })
      } else {
        const [toId, ...restIds] = [...idSet]
        restIds.forEach((restId) => {
          const changeNames = getNamesById(restId)
          changeNames.forEach((changeName) => {
            emailMap.set(changeName, toId)
          })
          idMap.delete(restId)
        })
        emails.filter((email) => !emailMap.has(email) === true).forEach((email) => emailMap.set(email, toId))
      }
    }
  })

  return [...idMap].map((item) => {
    const [id, name] = item
    return [name, ...getNamesById(id)]
  })
}

// accountsMerge([
//   ['John', 'johnsmith@mail.com', 'john_newyork@mail.com'],
//   ['John', 'johnsmith@mail.com', 'john00@mail.com'],
//   ['Mary', 'mary@mail.com'],
//   ['John', 'johnnybravo@mail.com'],
// ]) //?

// accountsMerge([
//   ['Gabe', 'Gabe0@m.co', 'Gabe3@m.co', 'Gabe1@m.co'],
//   ['Kevin', 'Kevin3@m.co', 'Kevin5@m.co', 'Kevin0@m.co'],
//   ['Ethan', 'Ethan5@m.co', 'Ethan4@m.co', 'Ethan0@m.co'],
//   ['Hanzo', 'Hanzo3@m.co', 'Hanzo1@m.co', 'Hanzo0@m.co'],
//   ['Fern', 'Fern5@m.co', 'Fern1@m.co', 'Fern0@m.co'],
// ]) //?

// accountsMerge([
//   ['David', 'David0@m.co', 'David1@m.co'],
//   ['David', 'David3@m.co', 'David4@m.co'],
//   ['David', 'David4@m.co', 'David5@m.co'],
//   ['David', 'David2@m.co', 'David3@m.co'],
//   ['David', 'David1@m.co', 'David2@m.co'],
// ]) //?

// accountsMerge([
//   ['Gabe', 'Gabe5@m.co', 'Gabe45@m.co', 'Gabe46@m.co', 'Gabe47@m.co', 'Gabe48@m.co', 'Gabe49@m.co', 'Gabe50@m.co', 'Gabe51@m.co', 'Gabe52@m.co'],
//   ['Gabe', 'Gabe3@m.co', 'Gabe27@m.co', 'Gabe28@m.co', 'Gabe29@m.co', 'Gabe30@m.co', 'Gabe31@m.co', 'Gabe32@m.co', 'Gabe33@m.co', 'Gabe34@m.co'],
//   ['Gabe', 'Gabe6@m.co', 'Gabe54@m.co', 'Gabe55@m.co', 'Gabe56@m.co', 'Gabe57@m.co', 'Gabe58@m.co', 'Gabe59@m.co', 'Gabe60@m.co', 'Gabe61@m.co'],
//   ['Gabe', 'Gabe0@m.co', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe2@m.co', 'Gabe3@m.co', 'Gabe4@m.co', 'Gabe5@m.co', 'Gabe6@m.co', 'Gabe7@m.co'],
//   ['Gabe', 'Gabe1@m.co', 'Gabe9@m.co', 'Gabe10@m.co', 'Gabe11@m.co', 'Gabe12@m.co', 'Gabe13@m.co', 'Gabe14@m.co', 'Gabe15@m.co', 'Gabe16@m.co'],
//   ['Gabe', 'Gabe2@m.co', 'Gabe18@m.co', 'Gabe19@m.co', 'Gabe20@m.co', 'Gabe21@m.co', 'Gabe22@m.co', 'Gabe23@m.co', 'Gabe24@m.co', 'Gabe25@m.co'],
//   ['Gabe', 'Gabe4@m.co', 'Gabe36@m.co', 'Gabe37@m.co', 'Gabe38@m.co', 'Gabe39@m.co', 'Gabe40@m.co', 'Gabe41@m.co', 'Gabe42@m.co', 'Gabe43@m.co'],
//   ['Gabe', 'Gabe0@m.co', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe2@m.co', 'Gabe3@m.co', 'Gabe4@m.co', 'Gabe5@m.co', 'Gabe6@m.co', 'Gabe7@m.co'],
// ]) //?

// accountsMerge([
//   ['Gabe', 'Gabe5@m.co', 'Gabe45@m.co'],
//   ['Gabe', 'Gabe3@m.co', 'Gabe27@m.co'],
//   ['Gabe', 'Gabe6@m.co', 'Gabe54@m.co'],
//   ['Gabe', 'Gabe0@m.co', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe2@m.co', 'Gabe3@m.co', 'Gabe4@m.co', 'Gabe5@m.co', 'Gabe6@m.co', 'Gabe7@m.co'],
//   ['Gabe', 'Gabe1@m.co', 'Gabe9@m.co'],
//   ['Gabe', 'Gabe2@m.co', 'Gabe18@m.co'],
//   ['Gabe', 'Gabe4@m.co', 'Gabe36@m.co'],
//   ['Gabe', 'Gabe0@m.co', 'Gabe0@m.co', 'Gabe1@m.co', 'Gabe2@m.co', 'Gabe3@m.co', 'Gabe4@m.co', 'Gabe5@m.co', 'Gabe6@m.co', 'Gabe7@m.co'],
// ]) //?
