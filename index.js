function findAge() {
   const dateOfBirth = document.getElementById("dob").value;
   const dob = new Date(dateOfBirth);
   const curnt = new Date();
   const userAge = curnt.getFullYear()-dob.getFullYear()
   console.log(userAge);
   if (userAge<18) {
    alert("age is Invalid")
   } 
};