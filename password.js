const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to the Password Validator Tool.")

reader.question("Please enter your password", function(input){
    tokens = input.split('')

    password = tokens[0];

console.log(password)



if( pass >= 10) {
    console.log("Password meets Requirements!")
} else {
    console.log("Password must be at least 10 characters.")
}

});



