//assume that time can be either 'yearly' or 'weekly';
//asume amount of milk per day is 1876 litres;
function incomeOverTime(selling_price, time){
    let litres=1876;
    if(time==='yearly'){
      let income = 365 * selling_price * litres;
          console.log(`Your ${time} income will be ksh ${income}`);
    }else if(time==='weekly'){
      let income = 7 * selling_price * litres;
          console.log(`Your ${time} income will be ksh ${income}`);
  
    } else console.log('Invalid time');
  }
  //change line 15 weekly to yearly to get yearly results;
  const time='weekly';
  const selling_price=45;
  incomeOverTime(selling_price, time);