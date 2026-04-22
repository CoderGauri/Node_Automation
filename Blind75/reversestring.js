let str = "Gauri";
let res = str.split('').reverse().join('');
console.log(res);

function revestr(){
let res1 = "";
for(let i=str.length-1; i>=0; i--){
    res1 += str[i]

}
console.log(res1);}

revestr(str);