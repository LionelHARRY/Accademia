<?php
if(isset($_POST['submit'])) {
 
    $email_to = "info@inscriptioncanada.com";
    $email_subject = "Candidature Inscription Canada";
     
 
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom']; 
    $age = $_POST['age']; 
	$tel = $_POST['tel']; 
	$email = $_POST['email']; 
    $message = $_POST['message']; 
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
    $email_message .= "Prénom: ".clean_string($prenom)."\n";
    $email_message .= "Nom: ".clean_string($nom)."\n";
    $email_message .= "Age: ".clean_string($age)."\n";
    $email_message .= "Telephone: ".clean_string($tel)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
 
	// create email headers
	$headers = "De: ".$email."\n\n";
	mail($email_to, $email_subject, $email_message, $headers);
	header("Location: https://test-ic.netlify.com/");
}	
?>
