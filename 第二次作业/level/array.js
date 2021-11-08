//level-1
var arr=[1,2,3,3,4,'a','a','b','c'];

function reduce(arr){
  var res=[];
  //code
  res = Array.from(new Set(arr))
  return res;
}

console.log(reduce(arr));  //[1, 2, 3, 4, "a", "b", "c"]

//level-2
var arr=[1,5,4,8,2,6,3,9,7];

function mySort(arr){
    for(let i =0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
}

console.log(mySort(arr)); //[1,2,3,4,5,6,7,8,9]

//level-3
var arr1=[1,3,5,7,9];
var arr2=[2,4,6,8,10];

function merge(arr1,arr2){
  //code
  let i =0,j=0;
  let res = [];
  while(i<arr1.length||j<arr2.length){
      if(arr1[i]<arr2[j]){
          res.push(arr1[i]);
          i++;
      }else{
          res.push(arr2[j]);
          j++;
      }
  }
  return res;
}

console.log(merge(arr1,arr2));//[1,2,3,4,5,6,7,8,9,10]
