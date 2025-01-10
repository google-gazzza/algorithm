// [JS][7kyu] Job Matching #2
// job-matching-2
// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8/train/javascript

const match = (job, candidates) =>
  candidates.filter((candidate) => {
    if (candidate.desiresEquity && job.equityMax === 0) {
      return false
    }
    if (job.locations.some((location) => [candidate.currentLocation, ...candidate.desiredLocations].includes(location))) {
      return true
    }
    return false
  })

const job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] }
const job2 = {
  equityMax: 1.2,
  locations: ['New York', 'Kentucky'],
}

const candidates = [
  {
    desiresEquity: true,
    currentLocation: 'New York',
    desiredLocations: ['San Francisco', 'Los Angeles'],
  },
  {
    desiresEquity: false,
    currentLocation: 'San Francisco',
    desiredLocations: ['Kentucky', 'New Mexico'],
  },
]

// match(job1, candidates)
// match(job2, candidates)
