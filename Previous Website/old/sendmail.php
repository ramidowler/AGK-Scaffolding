<?

/*Variables*/
$emri = $_REQUEST['emri'] ;
$email = $_REQUEST['email'] ;
$telefoni = $_REQUEST['telefoni'] ;
$fax = $_REQUEST['fax'] ;
$mesazhi = $_REQUEST['mesazhi'] ;

/* marresit */
$to  = "AGK Scaffolding <info@agk-scaffolding.co.uk>"; // note the commas
//$to .= "Emri <emri_juaj@domaini_juaj.com>";

/* subjekti */
$subject = "Contact Formular!";

/* mesazhi */
$message = <<<EOF
<b>Emri Mbiemri:</b>
$emri<br />
<b>Adresa Email:</b>
$email<br />
<b>Tel:</b>
$telefoni<br />
<b>Fax:</b>
$fax<br />
<b>Scaffolding requirements:</b>
$mesazhi
EOF;

/* To send HTML mail, you can set the Content-type header. */
$headers  = "From: $email\r\n";
$headers .= "Content-type: text/html\r\n";

/* dhe tani dergojeni ate */
mail($to, $subject, $message, $headers);

/* Mbasi dergohet rikthet tek */
header( "Location: http://www.agk-scaffolding.co.uk" );

?>