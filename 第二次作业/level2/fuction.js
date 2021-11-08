//level2-1
var a = prompt('请输入一个数字');
while(isNaN(a)){
    a = prompt('你未输入正确的数字，请重新输入');
}
var res = Number(a);
alert('你输入的数字平方后：'+res*res)


//level2-2
var arr = [1, [2, 3], 4, [5, [6, [7, 8]]],[9, 10]];
res = []; //用来存储返回的数据

function fun1(arr) {
  //code
  for(var i in arr){
      if(Array.isArray(arr[i])){
          fun1(arr[i])
      }else{
          res.push(arr[i])
      }
  }
  return res
}

fun1(arr);
console.log(res); //[1,2,3,4,5,6,7,8,9,10];

//level2-3
var arr=[{name:'xiaoming',age:18},{name:'zhangsan',age:34},
         {name:'lisi',age:29},{name:'wangwu',age:24}];

function sortby(key , way = true){//way为true表示默认按照升序排列
  //code
  if(way){
      for(var i =0;i<arr.length;i++){
          for(var j=i+1;j<arr.length;j++){
              if(arr[i][key]>arr[j][key]){
                let t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
              }
          }
      }
  }else{
    for(var i =0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i][key]<arr[j][key]){
              let t = arr[i];
              arr[i] = arr[j];
              arr[j] = t;
            }
        }
    }
  }
}

console.log(arr.sort(sortby('age'))) //[{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29},{name: "zhangsan", age: 34}]
console.log(arr.sort(sortby('name',false))) //[{name: "zhangsan", age: 34},{name: "xiaoming", age: 18},{name: "wangwu", age: 24},{name: "lisi", age: 29}]

//因为浏览器console.log输出引用的原因，测试的时候可以将另一句不用的console语句注释起来，避免对测试结果产生影响