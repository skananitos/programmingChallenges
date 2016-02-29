var strg;
function myFunction() {
  strg = document.getElementById("str").value;
  document.getElementById("demo").innerHTML = compressedString(strg);
}
 function compressedString(str) {  
  var compressedStr = '';
  var prevChar = str.charAt(0);
  var count = 1;
  for (var i = 1; i < str.length; i++) {
    if (str[i] !== prevChar) {
      if (count === 1) {
        compressedStr += prevChar;
      }
      else {
        compressedStr += prevChar + count;
      }      
      prevChar = str[i];
      count = 1;
    } else {
      count++;
    }
  }
  if (count === 1) {
    compressedStr += prevChar;
  }
  else {
    compressedStr += prevChar + count;
  }
  return compressedStr.length >= str.length ? str : compressedStr;
};