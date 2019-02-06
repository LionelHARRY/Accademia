<?php

if(isset($_POST['submit'])) {

    $email_to = "info@inscriptioncanada.com";
    $email_subject = "Candidature Inscription Canada";


    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $age = $_POST['age'];
	  $tel = $_POST['tel'];
  	$email = $_POST['email'];
  	$nationalite = $_POST['nationalite'];
  	$niveau = $_POST['niveau'];
  	$formation = $_POST['formation'];
    $message = $_POST['message'];


    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }

    $email_message .= "PrĂ©nom: ".clean_string($prenom)."\n";
    $email_message .= "Nom: ".clean_string($nom)."\n";
    $email_message .= "Age: ".clean_string($age)."\n";
    $email_message .= "Telephone: ".clean_string($tel)."\n";
  	$email_message .= "nationalite: ".clean_string($nationalite)."\n";
	  $email_message .= "niveau: ".clean_string($niveau)."\n";
	  $email_message .= "formation: ".clean_string($formation)."\n";
	  $email_message .= "Email: ".clean_string($email)."\n\n\n";
    $email_message .= "Message: ".clean_string($message)."\n";

	mail($email_to, $email_subject, $email_message);
	header("Location: https://inscriptioncanada.com");

}
?>
