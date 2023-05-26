// tank-truck
// Tank Truck
// https://www.codewars.com/kata/55f3da49e83ca1ddae0000ad/
// approach: https://blog.devserum.com/data-structures-and-algorithms/coding-challenges/codewars/6kyu/tank-truck

function tankvol(h, diameter, volumeOfCylinder) {
  const radius = diameter / 2;
  const areaOfCircle = Math.PI * (radius ** 2);
  
  const heightOfCylinder = volumeOfCylinder / areaOfCircle;
  
  const triangleOfSectorHeight = Math.abs(radius - h);
  const triangleOfSectorWidth = Math.sqrt((radius ** 2) - (triangleOfSectorHeight ** 2)) * 2;
  const adjacentOfSector = triangleOfSectorHeight;
  const oppositeOfSector = triangleOfSectorWidth / 2;
  const hypotenuseOfSector = radius;
  const thetaAngle = Math.asin(oppositeOfSector / hypotenuseOfSector) * (180 / Math.PI);
  
  const sectorAngle = thetaAngle * 2;
  const areaOfSector = sectorAngle / 360 * Math.PI * (radius ** 2);
  const areaOfTriangle = triangleOfSectorWidth * triangleOfSectorHeight / 2;
  const areaOfSegment = areaOfSector - areaOfTriangle;
  const segmentOfCylinder = areaOfSegment * heightOfCylinder;
  
  if (h > radius) {
    return Math.floor(volumeOfCylinder - segmentOfCylinder);
  }
  
  return Math.floor(segmentOfCylinder);
}



console.log(tankvol(5, 7, 3848), 2940);
console.log(tankvol(2, 7, 3848), 907);

