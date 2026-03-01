
var ageInput = prompt("Enter Your Age For Voting");
var num;
if (ageInput !== null) {
  num = parseInt(ageInput, 10);
  if (isNaN(num)) {
    alert("Please enter a valid number");
    num = null;
  }
}
  if(num<18 || num>60){
    document.getElementById('sorry').style.display='block'
    // document.write("Invalid Age")
  }
  else if(num>=18){
    document.getElementById("Form").style.display='block'
    // document.write("Welcome")
  }
  if (num<18) {
    document.getElementsById('sorry').style.display='block'
     }  

     var Form = Form
     if(Form == submit){
        document.getElementById('congo').style.display='block'
     }
     else if(Form != submit){
        console.log("Nothing To Show")
     }