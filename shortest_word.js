// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function findShort(s){
    let word=s.toLowerCase().split(" ");

    const sorted = word.sort((a,b)=>{
        return a.length - b.length;
    })

    console.log(sorted[0].length)

    
}

findShort('I was stumbled upon a new')