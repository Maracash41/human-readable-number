module.exports = function toReadable (number) {
  const numbersMap = {
     0: 'Zero',
     1: 'One',
     2: 'Two',
     3: 'Three',
     4: 'Four',
     5: 'Five',
     6: 'Six',
     7: 'Seven',
     8: 'Eight',
     9: 'Nine',
     10: 'Ten',
     11: 'Eleven',
     12: 'Twelve',
     13: 'Thirteen',
     14: 'Fourteen',
     15: 'Fifteen',
     16: 'Sixteen',
     17: 'Seventeen',
     18: 'Eighteen',
     19: 'Nineteen',
     20: 'Twenty',
     30: 'Thirty',
     40: 'Forty',
     50: 'Fifty',
     60: 'Sixty',
     70: 'Seventy',
     80: 'Eighty',
     90: 'Ninety',
     100: 'Hundred'
   };
   let numberString;
   
   if (number in numbersMap) {
     if (number === 100) {
       numberString = `One ${numbersMap[number]}`
     }
     else {
       numberString = numbersMap[number]
     }
   }
   else if (number < 100) {
     const tens = Math.floor(number / 10) * 10;
     const ones = number % 10;
     numberString =`${numbersMap[tens]} ${numbersMap[ones]}`;
   } 
   else if (number < 1000) {
     console.log('hello')
     const hundreds = Math.floor(number / 100);
     const tens = number % 100;
     if (tens === 0) {
       numberString = `${numbersMap[hundreds]} ${numbersMap[100]}`;
     }
     else {
       numberString = `${numbersMap[hundreds]} ${numbersMap[100]} ${toReadable(tens)}`;
     }
   }
   return numberString.toLowerCase();
}