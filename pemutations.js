// In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function permutations(string) {

    // solution-1

    // if (string.length <= 1) {
    //   return [string];
    // }
    
    // let finalPermutations = permutations(string.substring(1))
    //   .reduce((acc, p) => {
    //     let charList = p.split('');
    //     for (let i = 0; i <= charList.length; i++) {
    //       let newPermutation = charList.slice(0, i)
    //                             .concat([string[0]])
    //                             .concat(charList.slice(i))
    //                             .join('');
    //       if (!acc.includes(newPermutation)) {
    //         acc.push(newPermutation);
    //       } 
    //     }
    //     return acc;      
    // },[]);
    // return finalPermutations;

    /////////////////////////////////////////////////////////////////

    // solution-2

    //   var permArr = [],
    //   usedChars = [];
    
    //   var arr = string.split('');
    
    //   var permute = function(array){
    //     var i, ch;
    //     for (i = 0; i < array.length; i++) {
    //       ch = array.splice(i, 1)[0];
    //       usedChars.push(ch);
    //       if (array.length === 0) {
    //         permArr.push(usedChars.slice());
    //       }
    //       permute(array);
    //       array.splice(i, 0, ch);
    //       usedChars.pop();
    //     }
        
    //     return permArr;
    //   };
    
    //   var result = permute(arr);
    
    //   for (var i = 0; i < result.length; i++){
    //     var str = "";
    //       for(var j = 0; j< result[i].length; j++){
    //         str += result[i][j];
    //       }
    //     result[i] = str;
    //   }
    
    //   return result.filter(function(item, pos) { return result.indexOf(item) == pos; });

    ////////////////////////////////////////////////////////////

    // Solution-3

    var arr = string.split(''), tmp = arr.slice(), heads = [], out = [];
    if(string.length == 1) return [string];
    arr.forEach(function(v, i, arr) {
        if(heads.indexOf(v) == -1) {
        heads.push(v);
        tmp.splice(tmp.indexOf(v), 1);
        permutations(tmp.join('')).forEach(function(w) {out.push(v + w);});
        tmp.push(v);
        }
    });
    return out;

    }
  
  console.log(permutations('abc'));