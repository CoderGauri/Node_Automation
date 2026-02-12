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