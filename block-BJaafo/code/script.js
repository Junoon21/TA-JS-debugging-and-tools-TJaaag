 function fullName(firstName,lastName){
    return firstName + lastName;
}
let result = fullName("arya","stark");
let expected = "aryaastark";

if(result !== expected){
    throw new Error(`$(result) not equal to expected`);
}
function totalAmount(amount,taxRate){
    return amount + (amount * taxRate);
}
let result2 = totalAmount(100,2);
let expected2 = 800;

if(result2 !== expected2 ){
    throw new error (` $(result) not equal to expected`)
}
