
   var LogIn = function(){
       let email, password;


       email = document.querySelector("#email").value;
       password = document.querySelector("#password").value;
       
     }
     var SignUp = function(){
       let email1,firstName,surName,nrc,password1,password2;
    

      email1 = document.querySelector("#emailAddress").value;
      firstName = document.querySelector("#firstName").value;
      surName = document.querySelector("#surName").value;
      nrc = document.querySelector("#nrc").value;
      password1 = document.querySelector("#passWord1").value;
      password2 = document.querySelector("#passWord2").value;
      console.log(email1 + firstName + surName + nrc + password1);


     }

     function setValue(id,secretcode){
       email=id;
       password=secretcode;
     }

 
