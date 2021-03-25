//Ternary operator

var isSaturday = true;
console.log(isSaturday)

var message;
if(isSaturday === true) {
    message = 'We are at BIT';
} else {
    message = 'We are not at BIT';
}

console.log(message)

//vvv And using ternary operator this is how it will look like vvv

var message1;
message1 = isSaturday === true ? 'We are at BIT' : 'We are not at BIT'
console.log(message1)


var isMorning = true;
message2 = isSaturday === true ? (isMorning === true ? 'We have Programing Principles' : 'We have WEB') : 'We are not at BIT'
console.log(message2)
    
    //This way for now is not recomended as good practice because its not clear and that is why its reccomended to use IF and ELSE


    