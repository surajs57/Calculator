var num1, num2;
function getNum(){
num1 = document.getElementById("firstNumber").value; num2 = document.getElementById("secondNumber").value;
if(isNaN(num1) ||isNaN(num2) ) document.getElementById("result").innerHTML = "Enter valid Number";
}
function add()
{
getNum();
document.getElementById("result").innerHTML = +num1 + +num2;
}
function multiply()
{
getNum(); document.getElementById("result").innerHTML = num1 * num2;
}
function divide()
{
getNum();
document.getElementById("result").innerHTML = num1 / num2;
}
function quotient()
{
getNum();
document.getElementById("result").innerHTML = Math.trunc(num1/num2);
}