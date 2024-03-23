// Concatenation 

document.getElementById("some-string").onclick = function () {

    let message = "Have a Nice Day"
    let userName = "Waqar"
    let banger = "!"
    let sum = (message + " " + userName + banger)
    document.getElementById("statement").innerHTML = '<p>"Have a Nice Day" + " " + "Waqar" + "!"</p>'
    document.getElementById("output").innerHTML = sum;
}

// Ask Name From User 

document.getElementById("user").onclick = function(){
    let firstName = prompt("Please Enter Your First Name")
    let lastName = prompt("Please Enter Your Last Name")
    let fullName = `${firstName} ${lastName}`
    document.getElementById("statement").innerHTML = `First Name = ${firstName} <br> Last Name = ${lastName} <br> Full Name = First Name + Last ame`
    document.getElementById("output").innerHTML = `Full Name = ${fullName}`
}

// Comparison Operator 

document.getElementById("operate").onclick = function (){

    let num1 = +prompt("Please Enter First Number")
    let num2 = +prompt("Please Enter Second Number")
    if (num1 === num2){
        document.getElementById("statement").innerHTML = "num1 == num2"
        document.getElementById("output").innerHTML = "<span class='text-success'>Condition is True &#128522;<span/>"
    }
    else {
        document.getElementById("statement").innerHTML = "num1 !== num2"
        document.getElementById("output").innerHTML = "<span class='text-danger'>Condition is False &#128554;</span."
    }
}

// If Else If

document.getElementById("if-else").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let marks = +prompt("Please Enter Your Marks")
    if (marks >= 90){
        document.getElementById("output").innerHTML = "<span class='text-success'>Congratulations! You Got A+ Grade</span> "
    }
    else if (marks >=80){
        document.getElementById("output").innerHTML = "<span class='text-success'>Congratulations! You Got A Grade</span>"
    }
    else if (marks >=70){
        document.getElementById("output").innerHTML = "<span class='text-warning'>You Got B Grade</span>"
    }
    else {
        document.getElementById("output").innerHTML = "<span class='text-danger'>You Are Fail. &#128554;</span>"
    }
}


// Sets Of Conditions 

document.getElementById("test").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let age = prompt("Please Enter Your Age")
    let weight = prompt("Please Enter Your Weight")
    if (age <= 10 && weight <= 25) {
        document.getElementById("output").innerHTML = "You are a Baby"
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("output").innerHTML = "You Are Teenager and Healthy"
    }
    else if (age <= 25 && weight <= 60) {
        document.getElementById("output").innerHTML = "You are a Youngman and Fatty"
    }
    else if (age <= 30 && weight <= 59) {
        document.getElementById("output").innerHTML = "You are a Youngman and Healthy"
    }
    else {
        document.getElementById("output").innerHTML = "You are a Senior Citizen and Fatty"
    }

}

// If Statement Nested 

document.getElementById("nest").onclick = function(){
    let userName = prompt("Please Enter Username")
    if(userName === "Waqar"){
        let password = prompt("Please Enter Password")
        if(password == 123){
            document.getElementById("output").innerHTML = "<span style='color:green; text-transform:capitalize;'>You Are Successfully Logged In</span>"
        }
        else{
            document.getElementById("output").innerHTML = `<span class='text-danger'>${password}</span> is Incorrect Password. <br> Correct Password is <span class='text-success'>123</span>`
        }
    }
    else{
        document.getElementById("output").innerHTML = `<span class='text-danger'>${userName} </span> is Incorrect Username. <br> Correct Username is <span class='text-success'> "Waqar"</span>`
    }
}


// Login 

document.getElementById("login").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let userName = prompt("Please Enter Username")
    let passWord = +prompt("Please Enter Password")
    if (userName === "Waqar" && passWord === 123 ){
        document.getElementById("form").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output").innerHTML = `<span style='color:green; text-transform:capitalize;'>You Are Successfully Logged In</span>`
    }
    else {
        document.getElementById("output").innerHTML = "Try Using Waqar as Username and 123 as a Password"
    }

}

document.getElementById("check").onclick = function(){
    document.getElementById("statement").innerHTML = "Click Here To Check All Buttons.";
    document.getElementById("output").innerHTML = "Click Here To Check All Buttons."
}

// Clear Input Box 

document.getElementById("clearstatement").onclick = function(){
    document.getElementById("statement").innerHTML = " ";
}

// Clear Output Box 

document.getElementById("clearoutput").onclick = function(){
    document.getElementById("output").innerHTML = " ";
}
