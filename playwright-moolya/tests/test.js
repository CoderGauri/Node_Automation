const arr = [1,2,3,4,5]

const evenNumbers = [];
//const Double = [];

for(let i=0; i<arr.length; i++){
    if(arr[1]%2 === 0){
        console.log(arr[i])
        evenNumbers.push(arr[i] * 2);
        //Double.push(arr[i]*2)
    }
    console.log(evenNumbers)
}

const arr1 = [10, 15 , 20 , 25 , 30]
const divbyfive = [];
const sum = []

for(let i=0; i<arr1.length; i++){
    if(arr[i]%5===0){
        divbyfive.push(arr1[i]);
        console.log(divbyfive);
        
    }
}

const users = [
  { name: "A", age: 22 },
  { name: "B", age: 17 },
  { name: "C", age: 25 }
];

const result = [];
for(user of users){
    if(user.age >= 18){
        result.push(user.name)
    }
}
console.log(result);