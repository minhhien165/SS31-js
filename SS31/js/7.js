function fakeFilter(arr, callback) {
    const resultArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        resultArray.push(arr[i]);
      }
    }
  
    return resultArray;
  }
  
  const result1 = fakeFilter([1, 2, 3, 4], function (e) {
    if (e % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result1);
  
  const result2 = fakeFilter([1, 2, 3, 4], function (e) {
    if (e % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  });
  console.log(result2);
  