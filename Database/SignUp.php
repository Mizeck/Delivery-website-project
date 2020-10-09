<? php
   include_once 'Database/db.inc.php'; 
    
  $First = $_Post['first'];
  $Surname = $_Post['last'];
  $e_mail = $_Post['email']; 
  $Nrc = $_Post['Nrc']; 
  $Pwd1 = $_Post['pwd']; 
  $Pwd2 n= $_Post['pwd']; 


$sql = "INSERT INTO (first_name, surname,email,nrc,password') 
VALUES ('$First', '$Surname', '$e_mail','$Nrc','$Pwd1');";
msqliquery($conn,$sql);
