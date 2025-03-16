function convertToRoman(num) {
  if (num === 0) return ""; // No Roman numeral for 0

  const obj = [
      ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], 
      ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], 
      ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], 
      ['I', 1]
  ];

  let romanNumerals = "";

  for (let i = 0; i < obj.length; i++) {
      const [symbol, value] = obj[i]; // Fixed destructuring
      while (num >= value) {
          romanNumerals += symbol;
          num -= value;
      }
  }

  return romanNumerals;
}

// Example Test Cases
console.log(convertToRoman(14));    // "XIV"
console.log(convertToRoman(798));   // "DCCXCVIII"
console.log(convertToRoman(36));    // "XXXVI"
console.log(convertToRoman(3999));  // "MMMCMXCIX"
console.log(convertToRoman(0));     // ""
