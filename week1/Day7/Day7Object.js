let user = {
    name :"Gauri",
    role : "Backend Developer",
    skills : ["Js","Node"]
};

let employee = {
    name1 : "Chaitra",
    role1 : "Frontend Developer",
    Skills1 : ["Js","React"]
}
console.log(user.name);
console.log(user.skills[1]);

function printUser(employeeObj){
    console.log("Name1",employeeObj.name1);
     console.log("Role1",employeeObj.role1);

}

printUser(employee);