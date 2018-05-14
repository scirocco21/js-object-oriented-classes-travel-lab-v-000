
class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let startingHorizontal = eastWest.indexOf(this.beginningLocation.horizontal);
    let endingHorizontal = eastWest.indexOf(this.endingLocation.horizontal);
    let horizontalBlocks;
    if (startingHorizontal > endingHorizontal) {
      horizontalBlocks = startingHorizontal - endingHorizontal;
    } else if (startingHorizontal < endingHorizontal) {
      horizontalBlocks = endingHorizontal - startingHorizontal;
    } else {
      horizontalBlocks = 0;
    }
  let startingVertical = parseInt(this.beginningLocation.vertical);
  let endingVertical = parseInt(this.endingLocation.vertical);
  let verticalBlocks;

  if (startingVertical > endingVertical) {
    verticalBlockscks = startingVertical - endingVertical;
  } else if (endingVertical > startingVertical) {
      verticalBlocks = endingVertical - startingVertical;
  } else {
    verticalBlocks = 0;
  }
  return horizontalBlocks + verticalBlocks;
  }
  
  estimatedTime() {
    var d = new Date(); 
    var hours = d.getHours();
    if (hours >= 6 && hours < 10 || hours >=16 && hours < 20) {
      return this.blocksTravelled(this.beginningLocation, this.endingLocation)/2;
    }
    else {
      return this.blocksTravelled(this.beginningLocation, this.endingLocation)/3
    }
  }
}
