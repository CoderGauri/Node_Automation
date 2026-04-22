function checkPlaindrome(str){
    for(let i=0; i<str.length; i++){
        let j = str.length - 1 -i;
        if(str[i] !== str[j]){
            return false;
        }
    }
    return true;
}

console.log(checkPlaindrome("Gauri"));
console.log(checkPlaindrome("madam"));