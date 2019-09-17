function sorting(arrNumber) {
    // code di sini   
    for (let i=0; i<arrNumber.length; i++) {    
      for (let j=i+1; j<arrNumber.length; j++) {
        if (arrNumber[j]>arrNumber[i]) {
          var temp = arrNumber[j]
          arrNumber[j] = arrNumber[i]
          arrNumber[i] = temp;
        }
      }
    }
    return arrNumber
}

function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length == 0) {
        return "''"
    }
    var counter = 0;
    for (let i=0; i<arrNumber.length; i++) {
      if (arrNumber[i] === arrNumber[0])  {
        counter += 1;      
      }
    }
    return 'angka paling besar adalah '+ arrNumber[0]  + ' dan jumlah kemunculan sebanyak ' + counter + ' kali'
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''