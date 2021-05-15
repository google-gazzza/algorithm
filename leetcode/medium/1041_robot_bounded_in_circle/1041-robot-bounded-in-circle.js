/*
1041_robot_bounded_in_circle
1041-robot-bounded-in-circle

# leetcode/medium/1041. Robot Bounded In Circle
Difficulty: medium
URL: https://leetcode.com/problems/robot-bounded-in-circle/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/
// time labs 22:17

const calculateCoordinates = (coordinates, direction) => {
  switch (direction) {
    case 0:
      coordinates[1] += 1;
      break;
    case 1:
      coordinates[0] += 1;
      break;
    case 2:
      coordinates[1] -= 1;
      break;
    case 3:
      coordinates[0] -= 1;
      break;
  }
  
  return coordinates;
};

const calculateDirection = (currentDirection, newInstruction) => {
  switch (newInstruction) {
    case 'L':
      currentDirection = (4 + currentDirection - 1) % 4;
      break;
    case 'R':
      currentDirection = (currentDirection + 1) % 4;
  }
  return currentDirection;
};

const isRobotBounded = function (instructions) {
  let direction = 0;
  let coordinates = [0, 0];
  
  for (let i = 0; i < 4; i += 1) {
    [...instructions].forEach((e) => {
      if (e === 'G') {
        coordinates = calculateCoordinates(coordinates, direction);
      } else {
        direction = calculateDirection(direction, e);
      }
    });
  }
  
  return coordinates[0] === 0 && coordinates[1] === 0;
};

test('test', () => {
  expect(isRobotBounded("GGLLGG")).toBeTruthy();
  expect(isRobotBounded("GG")).toBeFalsy();
  expect(isRobotBounded("GL")).toBeTruthy();
});
