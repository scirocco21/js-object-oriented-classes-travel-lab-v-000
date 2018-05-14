
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  blocksTravelled() {
    let startingVertical = eastWest.indexOf(beginningLocation.vertical);
    let endingVertical = eastWest.indexOf(endingLocation.vertical);
    let verticalBlocks;
    if (startingVertical > endingVertical) {  
      verticalBlocks = startingVertical - endingVertical;
    else if (startingVertical < endingVertical) {
      verticalBlocks = endingVertical - startingVertical;
    else {
      verticalBlocks = 0;
    }
  let startingHorizontal = eastWest.indexOf(beginningLocation.horizontal); 
  let endingHorizontal = eastWest.indexOf(endingLocation.horizontal);
  let horizontalBlocks;

  if (startingHorizontal > endingHorizontal) {
    horizontalBlocks = startingHorizontal - endingHorizontal;
  } else if (endingHorizontal > startingHorizontal) {
      horizontalBlocks = endingHorizontal - startingHorizontal;
  } else {
    horizontalBlocks = 0;
  }
  return horizontalBlocks + verticalBlocks;
}
