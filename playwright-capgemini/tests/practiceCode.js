//reverse
const str = 'Gauri';

function reverseString(str){
   return str.split('').reverse().join('');
   
}

//console.log(reverseString(str));

//pallindrom

//Malyalam

// const name = "malyalam"
// function checkPallindrom(name){
//     const normal = name.toLowerCase()
//     return normal === normal.split('').reverse().join()
        
// }
// console.log(checkPallindrom(name));

const name = "Malayalam";

function checkPalindrome(name){
    const normalized = name.toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}

//.log(checkPalindrome(name));

const arr = [3,5,6,7,3];

function removeDuplicate(arr){
    return[...new Set(arr)]
}
//console.log(removeDuplicate(arr))

const unique = arr.filter((item , index) => {
    return arr.indexOf(item) === index;
})

//console.log(unique);

function findMax(arr){
    return Math.max(...arr);
}
//console.log(findMax(arr));

function findMax2(arr){
    let max = arr[0];
    for(let i=0;i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
             }
              return max;
}
//console.log(findMax2(arr));

function Sortarr(arr){
    return arr.sort((a , b) => a - b);
};
console.log(Sortarr(arr));