function isVowel(char) {
   return "aeiou".includes(char);
}
function vowelCount(str){
    const vowelMap=new Map();
    for(let char of str){

        let lowerCaseChar = char.toLowerCase()
        if(isVowel(lowerCaseChar)) {

             if(vowelMap.has(lowerCaseChar)){
                 vowelMap.set(lowerCaseChar,vowelMap.get(lowerCaseChar)+1);
             }else {
                 vowelMap.set(lowerCaseChar,1);
              }
        }
        console.log(vowelMap);
    }
    return vowelMap;
}
    //vowelCount('abaeiooooaueia');
    console.log(vowelCount('abaeiooooaueia'));
    //console.log(vowelCount);
    /*function vowels(str) {
        const wordMap = getVowelFrequencyMap(str);
        return Object.keys(wordMap).reduce((a,b) => wordMap[a] > wordMap[b] ? a : b);
      }
      function getVowelFrequencyMap(str) {
        let map = {};
        str.split(' ').forEach(word => {
          let matches = word.match(/[aeiou]/gi);
          map[word] = matches ? matches.length : 0;
        });
        return map;
      }
      console.log(`Word with most vowels: ${vowels('Goodnight Moon')}`);*/