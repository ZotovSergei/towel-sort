
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];  
  if (!matrix) return [];
  matrix.forEach((element,i )=> {
    if (i%2!=0) {
      element.reverse().forEach((item)=>{
        newArr.push(item);
      })
    } else {
      element.forEach((item,i)=>{
        newArr.push(item);
      })
    }    
  });
  return newArr;
}


// function towelSort(matrix) {
//   let newArr = [];
//   matrix.forEach((element,i )=> {
//     if (i%2!=0) {
//       element.reverse().forEach((item)=>{
//         newArr.push(item);
//       })
//     } else {
//       element.forEach((item,i)=>{
//         newArr.push(item);
//       })
//     }    
//   });
//   return newArr;
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(towelSort(matrix))  