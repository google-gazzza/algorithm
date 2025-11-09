// [JS][7kyu] Find an employees role in the company
// find-an-employees-role-in-the-company
// https://www.codewars.com/kata/55c9fb1b407024afe6000055/train/javascript

// let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]

const employeeMap = new Map()
employees.forEach(({ firstName, lastName, role }) => {
  employeeMap.set(`${firstName} ${lastName}`, role)
})

const findEmployeesRole = (name) => {
  return employeeMap.get(name) || 'Does not work here!'
}

findEmployeesRole('Dipper Pines') === 'Does not work here!'
findEmployeesRole('Morty Smith') === 'Truck Driver'
findEmployeesRole('Anna Bell') === 'Admin'
