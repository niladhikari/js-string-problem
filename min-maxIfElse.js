//find the max number
function MaxFind(num1,num2,num3) {
  if (num1 > num2 && num1 > num3) {
      return 'num1 is max number';
  }
  else if(num2 > num1 && num2 > num3){
    return 'num2 is max number';
  }
  else{
    return 'num3 is max number';
  }
}

const maxNumber = MaxFind(12,33,3);
console.log(maxNumber);


//find the min number
function minFind(num1,num2,num3) {
    if (num1 < num2 && num1 < num3) {
        return 'num1 is min number';
    }
    else if(num2 < num1 && num2 < num3){
      return 'num2 is min number';
    }
    else{
      return 'num3 is min number';
    }
  }
  
  const minNumber = minFind(12,33,3);
  console.log(minNumber);