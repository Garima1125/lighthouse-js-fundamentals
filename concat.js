function concat (arr1, arr2){
  var arr3 = [];
  for (var i = 0; i < arr1.length; i++ ){
    arr3.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++ ){
    arr3.push(arr2[i]);
  }
  return arr3;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]));