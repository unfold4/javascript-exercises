const leapYears = function(n) {
  if (n%100===0 ) {
    if(n%400===0)return true;
    else return false;
  }
  else {
    if(n%4===0) return true;
    else return false ;
  }
};

// Do not edit below this line
module.exports = leapYears;
