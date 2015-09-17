// For In Loop Json

function testforinloopjson(input) {
    var txt = "";
    var x;
    for (x in input) { // iterate over json which gives us keys in each iteraration
        // debugger;
        txt += x + ' = ' + input[x] + " ";
    }
    console.log(txt);
    message = (txt);

    return message;
}

// For In Loop Array
function testforinlooparr(input) {
    var txt = "";
    var x;
    for (x in input) { // iterate over array which gives us index in each iteraration
        // debugger;
        txt += x + ' = ' + input[x] + " ";
    }
    console.log(txt);
    message = txt;

    return message;
}

// for loop array
function testforlooparr(input) {
    var index;
    var txt = "";

    for (index = 0; index < input.length; index++) {
        text += " " + input[index] + " ";
    }
    text += " ";
    console.log(txt)
    message = txt;

    return message;
}

// If Else
function testifelse(input) {
    var age = input.age;
    var message;
    if (age < 18) {
        console.log("<b>You are the Future of India</b>");
        message = "<b>You are the Future of India</b>";
    } else if (age < 60) {
        alert("<b>You are the Present & hope of India</b>");

        console.log("<b>You are the Future of India</b>");
        message = "<b>You are the Future of India</b>";

    } else {
        alert("<b>You are the Founding Pillar of India</b>");
        console.log("<b>You are the Founding Pillar of India</b>");
        message = "<b>You are the Founding Pillar of India</b>";
    }

    return message;
}

// Switch Case
function testswitchcase(input) {
    var grade = input.grade; //prompt("Please enter your grade");
    var message;
    switch (grade.toUpperCase()) {
        case 'A':
            console.log("Excellent");
            message = "Excellent";
            break;

        case 'B':
            console.log("Very Good");
            message = "Very Good";
            break;

        case 'C':
            console.log("Can improve");
            message = "Can improve";
            break;

        case 'D':
            console.log("Work Hard");
            message = "Work Hard";
            break;

        case 'E':
            console.log("Fail, Join extra classes<br />");
            message = "Fail, Join extra classes";
            break

        default:
            console.log("Your papers are being reevaluated<br />");
            message = "Your papers are being reevaluated";
            break;
    }
    return message;
}

// Do While
function testdowhile(input) {
    var count = 0;
    var message
    console.log("Starting Loop now check console");
    message = "Starting Loop now check console";
    do {
        console.log("Current count:" + count + "");
        count++
    }
    while (count < 21);
    console.log("Loop stops now!");
    message = "Loop stops now!";

    return message;
}

// For Loop
function testforloop(input) {
    var count;
    console.log("Starting Loop" + "");
    message = "Starting Loop" + "";

    for (count = 0; count < 10; count++) {
        console.log("Current Count : " + count);
        message = "Current Count : " + count;
        console.log("");
        message = "";
    }
    console.log("Loop stopped!");
    message = "Loop stopped!";

    return message;


}

exports = exports || window;
exports.testforloop =  testforloop;
exports.testforinloopjson =  testforinloopjson;
exports.testdowhile = testdowhile;
exports.testswitchcase = testswitchcase;
exports.testifelse = testifelse;
exports.testforlooparr = testforlooparr;
exports.testforinlooparr = testforinlooparr;
