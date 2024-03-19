// concatenation 
document.getElementById("some-string").onclick = function () {

    let message = "Have a nice day"
    let userName = "Waqar"
    let banger = "!"
    let sum = (message + " " + userName + banger)
    document.getElementById("statement").innerHTML = '<p>"Have a nice day" + " " + "Waqar" + "!"</p>'
    document.getElementById("output").innerHTML = sum;
}

// ask name from user 
document.getElementById("user").onclick = function(){
    let firstName = prompt("please enter your first name")
    let lastName = prompt("please enter your last name")
    let fullName = `${firstName} ${lastName}`
    document.getElementById("statement").innerHTML = `first name = ${firstName} <br> last name = ${lastName} <br> full name = first name + last name`
    document.getElementById("output").innerHTML = `full name = ${fullName}`
}

// comparison operator 
document.getElementById("operate").onclick = function (){

    let num1 = +prompt("please enter first number")
    let num2 = +prompt("please enter second number")
    if (num1 === num2){
        document.getElementById("statement").innerHTML = "num1 == num2"
        document.getElementById("output").innerHTML = "<span class='text-success'>Condition is true &#128522;<span/>"
    }
    else {
        document.getElementById("statement").innerHTML = "num1 !== num2"
        document.getElementById("output").innerHTML = "<span class='text-danger'>Condition is false &#128554;</span."
    }
}

// if else if
document.getElementById("if-else").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let marks = +prompt("please enter your marks")
    if (marks >= 90){
        document.getElementById("output").innerHTML = "<span class='text-success'>Congratulations! you got A+ Grade</span> "
    }
    else if (marks >=80){
        document.getElementById("output").innerHTML = "<span class='text-success'>Congratulations! you got A Grade</span>"
    }
    else if (marks >=70){
        document.getElementById("output").innerHTML = "<span class='text-warning'>you got B Grade</span>"
    }
    else {
        document.getElementById("output").innerHTML = "<span class='text-danger'>You Are Fail. &#128554;</span>"
    }
}


// sets of conditions 
document.getElementById("test").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let age = prompt("please enter your age")
    let weight = prompt("please enter your weight")
    if (age <= 10 && weight <= 25) {
        document.getElementById("output").innerHTML = "you are a baby"
    }
    else if (age <= 18 && weight <= 50) {
        document.getElementById("output").innerHTML = "you are teenager and healthy"
    }
    else if (age <= 25 && weight <= 60) {
        document.getElementById("output").innerHTML = "you are a youngman and fatty"
    }
    else if (age <= 30 && weight <= 59) {
        document.getElementById("output").innerHTML = "you are a youngman and healthy"
    }
    else {
        document.getElementById("output").innerHTML = "you are a Senior Citizen and fatty"
    }

}

// if statement nested 
document.getElementById("nest").onclick = function(){
    let userName = prompt("please enter user name")
    if(userName === "Waqar"){
        let password = prompt("please enter password")
        if(password == 123){
            document.getElementById("output").innerHTML = "<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>"
        }
        else{
            document.getElementById("output").innerHTML = `<span class='text-danger'>${password}</span> is incorrect password. <br> correct password is <span class='text-success'>123</span>`
        }
    }
    else{
        document.getElementById("output").innerHTML = `<span class='text-danger'>${userName} </span> is incorrect user name. <br> correct user name is <span class='text-success'> "Waqar"</span>`
    }
}


// login 
document.getElementById("login").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "Waqar" && passWord === 123 ){
        document.getElementById("form").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output").innerHTML = `<span style='color:green; text-transform:capitalize;'>you are successfully logged in</span>`
    }
    else {
        document.getElementById("output").innerHTML = "Try using Waqar as username and 123 as a password"
    }

}

document.getElementById("check").onclick = function(){
    document.getElementById("statement").innerHTML = "Click Here To Check All Buttons.";
    document.getElementById("output").innerHTML = "Click Here To Check All Buttons."
}

// clear input box 
document.getElementById("clearstatement").onclick = function(){
    document.getElementById("statement").innerHTML = " ";
}

// clear output box 
document.getElementById("clearoutput").onclick = function(){
    document.getElementById("output").innerHTML = " ";
}