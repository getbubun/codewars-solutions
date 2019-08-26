

// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


function scramble(str1, str2) {

    // solution-1

    //     const s2 = str2.split("");
    //     str1.split("").forEach(val => {
    //        if (s2.includes(val)) s2.splice(s2.indexOf(val), 1);
    //     });

    //    return s2.length == 0;


///////////////////////////////////////////////////////////////


   // solution-2

  //      var obj1={};
  //      var obj2={};
  //      for(var i=0; i<str1.length; i++){
  //      if(!obj1[str1[i]]){
  //          obj1[str1[i]]=1;
  //      }else{
  //          obj1[str1[i]]++;
  //      }
  //      }
  //      for(var j=0; j<str2.length; j++){
  //      if(!obj2[str2[j]]){
  //          obj2[str2[j]]=1;
  //      }else{
  //          obj2[str2[j]]++;
  //      }
  //      }
  //      for(var key in obj2){
  //      if(!obj1[key]||obj1[key]<obj2[key]){
  //          //return false;
  //          console.log(false)
  //      }
  //      }
  //      // return true;
  //      console.log(true)

 ////////////////////////////////////////////////////////////   
    
    // solution-3

    var obj1 = CharCount(str1);
    var obj2 = CharCount(str2);
    
    for(var key in obj2){
       if(!obj1[key]||obj1[key]<obj2[key])
         return false;    
    }
    return true;
 }

    function CharCount(str) {
     return str.split("").reduce((container, char) => {
             (container[char] += 1) || (container[char] = 1);
             return container;
         }, 
     {});

}



scramble('rrkqodlw','world');

