// Write your solution in this file!
const employee = {};
employee.name;
employee.streetAddress;

function updateEmployeeWithKeyAndValue(obj,key,value){
    const newEmployee = {...obj};
    newEmployee[key]=value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj,key){
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj,key){
    delete obj[key];
    return obj;
}