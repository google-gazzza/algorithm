// [JS][6kyu] scheduling-shortest-job-first-or-sjf
// scheduling-shortest-job-first-or-sjf
// https://www.codewars.com/kata/550cc572b9e7b563be00054f/train/javascript

const SJF = (jobs, index) => {
  const sortedJobsArr = jobs.map((job, index) => ({ job, index })).sort((a, b) => a.job - b.job)
  const findIndex = sortedJobsArr.findIndex((job) => job.index === index)
  return sortedJobsArr.slice(0, findIndex + 1).reduce((acc, job) => acc + job.job, 0)
}

SJF([100], 0) === 100
SJF([3, 10, 20, 1, 2], 0) === 6
SJF([3, 10, 20, 1, 2], 1) === 16
