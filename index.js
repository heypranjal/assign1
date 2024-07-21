function calculateAge(){
   const enteredDob = document.getElementById('dob').value;
   const dob = new Date(enteredDob);
   const today = new Date();

   let age = today.getFullYear() - dob.getFullYear()

   if(age>=18){
       document.getElementById('result').innerHTML = "You are eligible to register";
       return true;
   }
   else{
       alert("You are not eligible to register");
       document.getElementById('result').innerHTML = "You are not eligible to register";
       return false;
}
}
function checkemail() {
   const enteremail=document.getElementById('Email').value
   const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const isValid= emailPattern.test(enteremail)
   if(!isValid){
 alert("You are not eligible")
   }
  
   }
   function selectstates(){
    
   }
