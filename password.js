function changeVocals (str) {
    //code di sini
    var kata = '';
    for (let i=0; i<str.length; i++) {
      if ('aioueAIUEO'.indexOf(str[i]) != -1) {
          kata += String.fromCharCode(str.charCodeAt(i)+1);
      } else {
          kata += str[i];
      }
    }
    return kata;
}

function reverseWord (str) {
    //code di sini
    var kata = '';
    for (let i=str.length-1; i>=0; i--) {
      kata += str[i];
    }
    return kata;
  }

function setLowerUpperCase (str) {
    //code di sini
    var kata = '';
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var kecil = 'abcdefghijklmnopqrstuvwxyz';
    for (let i=0; i<str.length; i++) {
      if (str[i] != ' ') {
        if (besar.indexOf(str[i]) != -1) {
            kata += kecil[besar.indexOf(str[i])]
          } else {
            kata += besar[kecil.indexOf(str[i])]
          }
      } else {
          kata += str[i]
      }
    }
    return kata;
}

function removeSpaces (str) {
    //code di sini
    var kata = ''
    for (let i=0; i<str.length; i++) {
      if (str[i] != ' ') {
        kata += str[i]
      }
    }
    return kata;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length < 5) {
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var change = changeVocals(name);
  var reverse = reverseWord(change);
  var lowerUpper = setLowerUpperCase(reverse);
  var noSpace = removeSpaces(lowerUpper)
  return noSpace;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'