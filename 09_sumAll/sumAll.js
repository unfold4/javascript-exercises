const sumAll = function(a,b) {
  let arr=[];
  if (!Number.isInteger(a) ||!Number.isInteger(b) || a<0 || b<0) return "ERROR";

  if (a>=b) {start = b;end = a;} 
  else{start = a;end = b;} 

  for (let i=start;i<=end;i++){
    arr.push(i);
}

return arr.reduce((sum,n)=>sum+n,0)
};

// Do not edit below this line
module.exports = sumAll;
