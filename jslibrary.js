var _ = {
   map: function(arr, functionName) {
     //code here;
     var arr1 = [];
     for( i in arr)
     {
        arr1.push(functionName(arr[i]));
     }

     return arr1;
   },
   reduce: function(array, callback, memo) { 
     // code here;
      var el = 0;
      if (!memo){
        memo = array[0];
        el = 1;
      }
      for (var i = el; i < array.length; i++) {
        memo = callback(array[i], memo);
      }
      return memo;
   },

   find: function(array, callback) {   
     // code here;
         for (var i = 0; i < array.length; i++) {
      if (callback(array[i])){
        return array[i];
      }
    }
   },
   filter: function(arr, filterFunction) { 
     // code here;
     var arr1 = [];
     for ( i in arr)
     {
        var  bool1 = filterFunction(arr[i]);
        if( bool1 )
        {
          arr1.push(arr[i]);
        }
        

     }
     return arr1;
 
   },
   reject: function(array,callback) { 
     // code here;
    var tempArray =[];
    for (var i = 0; i < array.length; i++) {
      if (!callback(array[i])){
        tempArray.push(array[i]);
      }
    }
    // we could also modify the original array
    return tempArray;
   }
 }
// you just created a library with 5 methods!


var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].


 // var result = _.map({one:1, two:2, three:3}, function(num,key){ return num * 3; });
 // console.log(result);