function range (start, end , step)
{
  var arr = [];

  if (start === undefined || end === undefined
      || step === undefined || (start > end) || (step < 0))
  {
    return arr;
  }
  else {
    for (var i = start; i <= end; i = i+step)
    {
     arr.push(i);
    }
    return arr;
  }
}


