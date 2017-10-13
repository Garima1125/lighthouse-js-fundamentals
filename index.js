function lastIndexOf (arr,value)
{
  var lastIndex = -1;
  for (var i = 0; i < arr.length; i++)
   {
    if (value === arr[i])
      lastIndex = i;
   }
   return lastIndex;
}


console.log(lastIndexOf([2,3,4,3, 2],2));


