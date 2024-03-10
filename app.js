// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var input = prompt(`Plese Enter a “City”`,`karachi`)
// alert(` “Welcome to city of lights” ${input}`)
if(input ==  "karachi"){
alert(`“Welcome to city of lights karachi”`)
document.write(`<h1>“Welcome to city of lights”</h1>`)
}
else{
   alert(`“Welcome to city of ${input}”`)
   document.write(`<h1>“Welcome to city of ${input}”</h1><hr>`)
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var gender = prompt(`Plese Select a “gender”:` ,`male`)

if(gender == "male"){
alert(`Good Morning Sir`)
document.write(`<hr>Good Morning Sir<hr>`)
}
else if (gender == "female"){
   alert(`Good Morning Ma’am`)
   document.write(`<hr>Good Morning Ma’am <hr>`)
}
else{
   alert(`Only Male & Female`)
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var color = prompt(`Plese Select a Color Red,Yellow,green`,`Blue`);

if(color == "red"){
   alert(`Must Stop`)
   document.write(` 
   <div class="table1">
      <table border="1px">
       <tr class="tr0">
          <th>Single Color</th>
         <td>Message</td>
       </tr>
       <tr class="tr1">
          <th>Red</th>
          <td>Must Stop</td>
       </tr>
      </table> 
   </div>`)
}
else if(color == "yellow"){
   alert(`Ready to Move`)
   document.write(` 
<div class="table2">
   <table border="1px">
    <tr class="tr0">
       <th>Single Color</th>
      <td>Message</td>
    </tr>
    <tr class="tr2">
       <th>Yellow</th>
       <td>Ready to Move</td>
    </tr>
   </table> 
</div>`)
}
else if(color == "green"){
   alert(`Move Now`)
   document.write(` 
<div class="table3">
   <table border="1px">
    <tr class="tr0">
       <th>Single Color</th>
      <td>Message</td>
    </tr>
    <tr class="tr3">
       <th>Green</th>
       <td>Move Now</td>
    </tr>
   </table> 
</div>`)
}
else{
   document.write(`
   <center>
<div class="table1">
   <table border="1px">
      <tr class="tr0">
         <th>Single Color</th>
         <td>Message</td>
      </tr>
      <tr class="tr1">
         <th>Red</th>
         <td>Must Stop</td>
      </tr>
      <tr class="tr2">
         <th>Yellow</th>
         <td>Ready to Move</td>
      </tr>
      <tr class="tr3">
         <th>Green</th>
         <td>Move Now</td>
      </tr>
   </table>
<div>
</center>
   `)
}

// 4. Write a program to take input remaining fuel in car (in
//    litres) from user. If the current fuel is less than 0.25litres,
//    show the message “Please refill the fuel in your car”

var fuel = prompt(`Enter the reaming fuel in car (in liters)` ,0.25)

if(fuel <= 0.25){
   alert(`“Please refill the fuel in your car”`)
   document.write(`<hr> <br> <br>“Please refill the fuel in your car” <br> <br> <hr>`)
}
else if(fuel >= 0.25){
   alert(`“fuel in your car”`)
   document.write(`“<hr> <br> Fuel in your car” <br> <br> <hr>`)
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

var a = 4;
if(++a === 5){
   alert("given condition for variable a is true");
   document.write("<br> <h3> 5)a: Ans </h3> Given condition for variable a is true <br> <br> <hr>");
}

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

var b = 82;
if(b++ === 82){
   alert("given condition for variable b is true");
   document.write("<br> <h3> 5)b: Ans </h3> Given condition for variable b is true  <br> <br> <hr>")
};

// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
document.write("<br> Condition 1 is True <br>")
}
else{
alert("condition 1 is false");
document.write("<br> <h3> 5)c: Ans </h3> Condition 1 is false <br>")
};
if (c === 13){
alert("condition 2 is true");
document.write("Condition 2 is True<br>")
}
else{
   alert("condition 2 is false");
document.write("Condition 2 is false <br>")
}
if(++c < 14){
alert("condition 3 is true");
document.write("Condition 3 is True <br>")
}
else{
   alert("condition 3 is false");
document.write("Condition 3 is false <br>")
}
if(c === 14){
alert("condition 4 is true");
document.write("Condition 4 is True <br> <br> <hr> ")
}
else{
   alert("condition 4 is false");
document.write("Condition 4 is false <br>")
}

// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost){
   alert("The cost equals")
   document.write("<br> <h3> 5)d: Ans </h3> The cost equals <br> <br> <hr>")
}

// e. if (true){
//    alert("True");
//    }
//    if (false){
//    alert("False");
//    }

if(true == true){
   alert("2.true");
   document.write(" <br> <h3> 5)e: Ans </h3> true <br>  ")
}
if(false == false){
   alert("false")
   document.write("false <br> <hr> <br>")
}

// f. if("car" < "cat"){
//    alert("car is smaller than cat");
//    }

if("car" > "cat"){
   alert("car is smaller than cat");
   document.write("<br> <h3> 5)f: Ans </h3> Car is smaller than cat <br> <br> <hr>")
}
else{
   alert("car is bigger than cat");
   document.write("<br> <h3> 5)f: Ans </h3> Car is bigger than cat <br> <br> <hr>")
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var marksObtained1 = +prompt("Enter the marks obtained in subject 1:");
var marksObtained2 = +prompt("Enter the marks obtained in subject 2:");
var marksObtained3 = +prompt("Enter the marks obtained in subject 3:");

var totalMarks = +prompt("Enter total marks:" ,"300")

var totalMarks1 = marksObtained1 + marksObtained2 + marksObtained3;
var percentage = (totalMarks1) / totalMarks*100;
if(percentage >= 90){
   document.write(`<h2>Marks Sheet</h2>`)
   document.write(`Total Marks : 300 <br>`)
   document.write(`Marks Obatained : ${totalMarks1} <br>`)
   document.write(`Percentage : ${percentage .toFixed(0)}% <br>`)
   document.write(`Grade : A+ <br>`)
   document.write(`Remarks : Excellent <br> <hr>`)
}
else if(percentage >= 80){
   document.write(`<h2>Marks Sheet</h2>`)
   // document.write("Grade: A <br> Remarks : V.Good")
   document.write(`Total Marks : 300 <br>`)
   document.write(`Marks Obatained : ${totalMarks1} <br>`)
   document.write(`Percentage : ${percentage .toFixed(0)}% <br>`)
   document.write(`Grade : A <br>`)
   document.write(`Remarks : V.Good <br> <hr>`)
}
else if(percentage >= 70){
   document.write(`<h2>Marks Sheet</h2>`)
   // document.write(`${Grade2}`)
   // document.write("Grade: B <br> Remarks : Good")
   document.write(`Total Marks : 300 <br>`)
   document.write(`Marks Obatained : ${totalMarks1} <br>`)
   document.write(`Percentage : ${percentage .toFixed(0)}% <br>`)
   document.write(`Grade : B <br>`)
   document.write(`Remarks : Good <br> <hr>`)
}
else if(percentage >=60){
   document.write(`<h2>Marks Sheet</h2>`)
   // document.write(`${Grade3}`)
   // document.write("Grade: C <br> Remarks : Passed")
   document.write(`Total Marks : 300 <br>`)
   document.write(`Marks Obatained : ${totalMarks1} <br>`)
   document.write(`Percentage : ${percentage .toFixed(0)}% <br>`)
   document.write(`Grade : C <br>`)
   document.write(`Remarks : Passed <br> <hr>`)
}
else{
   document.write(`<h2>Marks Sheet</h2>`)
   // document.write(`${Grade4}`)
   // document.write("Grade: F <br> Remark : Fail")
   document.write(`Total Marks : 300 <br>`)
   document.write(`Marks Obatained : ${totalMarks1} <br>`)
   document.write(`Percentage : ${percentage .toFixed(0)}% <br>`)
   document.write(`Grade : Faild <br>`)
   document.write(`Remarks : Sorry <br> <hr>`)
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”

var secretNum = 2 * 10 + 1;
var userGuss = prompt("Guess the secret number (between 1 and 20):")

if(userGuss === secretNum){
   alert("Bingo! Correct answer.<br> <hr>");
}
else if (userGuss === secretNum - 1) {
   alert("Close enough to the correct answer <br> <hr>");
}
else{
   alert(`Sorry, wrong guess. The secret number was ${secretNum}`);
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var num1 = +prompt("Enter a number : ")
if(num1 %3 === 0){
   alert("The number is divisible by 3.")
   document.write("<br>The number is divisible by 3.<br> <hr>")
}
else{
   alert("The number is not divisible by 3.")
   document.write("<br>The number is not divisible by 3.<br> <hr>")
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var num2 =+prompt("Enter a even or odd num")
if(num2 % 2 === 0){
   document.write(`<br> ${num2} is an even number.<br> <hr>`)
}
else if(num2 % 2 === 1){
   document.write(`<br> ${num2} is an odd number.<br> <hr>`)
}
else{
   document.write(`<br> Error <br> <hr>`)
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("Enter a temperatu ")
if(temperature >= 40){
   document.write("<br>“It is too hot outside.”<br> <hr>")
}
else if(temperature >= 30){
   document.write(" <br>“The Weather today is Normal.”<br> <hr>")
}
else if(temperature >= 20){
   document.write(" <br>“Today’s Weather is cool.”<br> <hr>")
}
else if(temperature >= 10){
   document.write("<br>“OMG! Today’s weather is so Cool.”<br> <hr>")
}
else{
   document.write(" <br> Please enter a temperature <br> <hr>")
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
   
var number1 = +prompt("Enter a number 1 calculate")
var number2 = +prompt("Enter a oprator number")
var number3 = +prompt("Entre a number 2 calculate")

if(number2 == "+"){
   document.write(`<br> ${number1} ${number2} ${number3} = ${number1 + number3} <br> <hr>`)
}
else if(number2 == "-"){
   document.write(`<br> ${number1} ${number2} ${number3} = ${number1 - number3} <br> <hr>`)
}
else if(number2 == "*"){
   document.write(`<br> ${number1} ${number2} ${number3} = ${number1 * number3} <br> <hr>`)
}
else if(number2 == "/"){
   document.write(`<br> ${number1} ${number2} ${number3} = ${number1 / number3} <br> <hr>`)
}
else if(number2 == "%"){
   document.write(`<br> ${number1} ${number2} ${number3} = ${number1 % number3} <br> <hr>`)
}
else{
   document.write(`<br> None <br> <hr>`)
}