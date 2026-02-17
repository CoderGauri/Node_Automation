console.log("Start"); //synchronous

setTimeout(() => {
  console.log("Inside Timeout"); //web api , call back queue , event loop will check
  // if the call stack is empty it will execevuted 
}, 0);

console.log("End"); // syunchronous 

//output 
//start
//end
//inside timeout

function delayedTask () {
    setTimeout(()=> {
        console.log("delayed task exececute")
    },2000)
}

delayedTask();

// 
function isPlaindrome (str){
     str = str.toLowerCase();
let left = 0;
let right = str.length -1;

while (left < right){
    if(str[left]!= str[right]){
        return false;
    }
    left++;
    right--;
}
return true;
}
 console.log(isPlaindrome("Madam"));
// function isPalindrome(str) {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }

// // 👉 You must CALL the function
// const result = isPalindrome("madam");
// console.log(result);
