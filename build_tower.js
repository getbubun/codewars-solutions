// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

/* for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
] */

function towerBuilder(nFloors){
    var arr = [];
    for (var i = 0; i < nFloors; i++) {
      var spaceNum = nFloors - i - 1
      var space = " ".repeat(spaceNum)
      var num = 2*i + 1
      var blocks = "*".repeat(num)
      arr[i] = space + blocks + space
    }
    return arr
    console.log(arr)
  }
  
  towerBuilder(5)