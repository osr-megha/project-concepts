$(document).ready(function() { 

    // binding different events togather

    var arrayRules = [{
        feature: "ifelse",
        environment: "Client"
    }, {
        feature: "switchcase",
        environment: "Client"
    }, {
        feature: "dowhile",
        environment: "Client"
    }, {
        feature: "forloop",
        environment: "Client"
    }, {
        feature: "forinlooparr",
        environment: "Client"
    }, {
        feature: "forlooparr",
        environment: "Client"
    }, {
        feature: "forinloopjson",
        environment: "Client"
    },  {
        feature: "switchcase",
        environment: "Server"
    },  {
        feature: "dowhile",
        environment: "Server"
    }, {
        feature: "forloop",
        environment: "Server"
    },  {
        feature: "forinlooparr",
        environment: "Server"
    },  {
        feature: "forlooparr",
        environment: "Server"
    },  {
        feature: "forinloopjson",
        environment: "Server"
    },  {
        feature: "ifelse",
        environment: "Server"
    }];

    // for (var i = 0; i < arrayRules.length; i++) {
    //  arrayRules[i]
    // }; - it will be written as following

    for (var i in arrayRules) {
        //$(selector).append(content,function(index,html))

        $("#container").append(
            '<p>' +
            '<i> ' + arrayRules[i].feature + ' </i>' +
            '<input type="button" id="btn' + arrayRules[i].feature +
            arrayRules[i].environment + '" value="' + arrayRules[i].environment + '" />' +
            '</p>');

        var btnId = "#btn" + arrayRules[i].feature + arrayRules[i].environment;
        // $(selector).delegate(childSelector,event,data,function)
        $("#container").delegate(btnId, "click", function() {
            callIt(arrayRules[i].feature, arrayRules[i].environment);
        })
    }
});


// create a abstracted code for the server in which:
// 1) while sending url.. specific url shoul be picked up ie if i click ifelse server button then the url shoul take the value of /ifelse from the server 
// 2) creating abstracted code for collecting json data individually for every function called.
// on the basis of keyword
// pick url and data from a pre-built JSON



              

   
// interceptor function - becoz of arguments which are dynamic, performs differently
// callIt("ifelse", "client", "testifelseClient")

function callIt(feature, environment) {
    var fnName = "test" + feature + environment;
    var environment = "Client";
    var environment = "Server";
    if (environment == "Client") {window[fnName](feature);} 
        else{
            sendRequest(feature);
            console.log("from" + feature + "" + environment);
            };
        }

// fnname/body = test(common part) + feature(uncommon part) + Client/Server (c) + body (uc)


// for loop  to iterate over a json
// common part
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

// client specific
function testforinloopjsonClient() {
    var person = {
        fname: "Saurabh",
        lname: "Sharma",
        age: 33
    };
    testforinloopjson(person);

}

// For in loop array - Common part
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


// for CLient
function testforinlooparrClient() {
    var personsArr = [1, 2, 3, 4, 5];
    testforinlooparr(personsArr);
}


// for loop over array

// for CLient
function testforlooparrClient() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    testforinlooparr(fruits);
}

// common part
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


// Starting the new code structure combining server and client end

// client specifici code for if else test
function testifelseClient() {
    var age = prompt("Please enter your age");
    var returned = testifelse({
        "age": age
    });
    alert(returned)
}


// common part across server and client
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

// client specific
function testswitchcaseClient() {
    var grade = prompt("Please enter your age");
    var returned = testswitchcase({
        "grade": grade
    });
    alert(returned)
}

//common part
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

//common part
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

// client specific
function testdowhileClient() {
    var grade = prompt("Please enter your age");
    var returned = testdowhile({
        "count": count
    });
    alert(returned)
}

// for loop
// common part
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
// client specific
function testforloopClient() {
    var count;
    var returned = testforloop({
        "count": count
    });
    alert(returned)
}

var masterdata = {"ifelse":
    {
        "url":"/testifelseServer",
        "data": {"input":{"age":11}}
                }
            
        ,"switchcase":
        {
            "url":"/testswitchcaseServer",
            "data":{"grade":{"grade":"B"}}
                }
            
        ,"dowhile":
        {
            "url":"/testifelseServer",
            "data":{"input":{"count":0}}
                }
         
        ,"forloop":
        {
            "url":"/testforloopServer",
            "data":{"input":{"count":0}}
                }
         
        ,"forinloopjson":
        {
            "url":"/testforinloopjsonServer",
            "data":{
            "input": {
                "fname": "Saurabh",
                "lname": "Sharma",
                "age": 11
                        }
                    }
                }
            
        ,"forlooparr":{
            "url":"/testforlooparrServer",
            "data":{
            "input": ["Banana", "Orange", "Apple", "Mango"]
                    }
                }
        ,"forinlooparr":{
            "url":"testforinlooparrServer",
            "data":{
            "input": [1, 2, 3, 4, 5]
                    }
                }
            }


function sendRequest (keyword) {
   
                $.ajax({
                    url: masterdata[keyword]['url'],  
                    type: 'Post',
                    data: masterdata[keyword]['data'],
                    success: function(data) {
                        console.log(data);
                        }
                    });
                return;
                }


