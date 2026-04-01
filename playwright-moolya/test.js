// 


const arr = [10, 20, 20, 30, 40, 40];
const newarr = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            newarr.push(arr[i])
        }

    }
    console.log(arr);
    console.log(newarr);
     
} 
