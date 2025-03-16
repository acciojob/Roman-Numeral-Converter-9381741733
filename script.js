function convertToRoman(num) {
  if (num === 0) return ""; // No Roman numeral for 0
  
  const obj= [
      ['M̅', 100000], ['C̅M̅', 90000], ['L̅', 50000], ['X̅L̅', 40000], 
      ['X̅', 10000], ['I̅X̅', 9000], ['V̅', 5000], ['I̅V̅', 4000], 
      ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], 
      ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], 
      ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], 
      ['I', 1]
  ];

  let romanNumerals= "";

  for (let i = 0; i < obj.length; i++) {
      const [symbol,value]=obj;
          while(num>=value){
            romanNumerals+=symbol;
            num-=value;
          }
       }

  return romanNumerals;
}

// Example Test Cases
console.log(convertToRoman(14));       // Output: "XIV"
console.log(convertToRoman(798));      // Output: "DCCXCVIII"
console.log(convertToRoman(3999));     // Output: "MMMCMXCIX"
console.log(convertToRoman(10000));    // Output: "X̅"
console.log(convertToRoman(50000));    // Output: "L̅"
console.log(convertToRoman(99999));    // Output: "C̅M̅X̅C̅I̅X̅"

MediaSourceHandle.exports=convertToRoman;