
module.exports = function check(str, bracketsConfig) {

  len = str.length-1;
  lenB = bracketsConfig.length;
  arr = str.split('');

  t = 'No changes'; 

  for (i = 0; i < len; i++) {   
    for (k = 0; k < lenB; k++) {
      if (arr[i] === bracketsConfig[k][0] && arr[i+1] === bracketsConfig[k][1]){
        arr.splice(i,2);
        t = arr.join('');
        if (t === '') break;
        else check(t, bracketsConfig);
      }    
    }      
  }  
 return (t === '') ? true : false;
}


