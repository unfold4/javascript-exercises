const removeFromArray = function(arr, ...args) {
  let res = arr.filter((n)=> (!args.includes(n)) );
return res;
};

// const removeFromArray = function(arr, ...args) {
//   let res=[];
//   arr.forEach((n)=>{
//     if(!args.includes(n)) res.push(n);
//   });
// return res;
// };

// Do not edit below this line
module.exports = removeFromArray;
