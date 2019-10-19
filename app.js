function accum(s) {
    let letterArray = s.split('');
    let storeResultString = '';
  
    for (let i = 0; i < letterArray.length; i++) {
        if (i > 0) {
            storeResultString += '-';
        }
        
        for (let j = 0; j < i + 1; j++) {
            if (j == 0) {
                storeResultString += letterArray[i].toUpperCase();
            }
            else {
                storeResultString += letterArray[i].toLowerCase();
            }
        }
    }
    
    return storeResultString;
}