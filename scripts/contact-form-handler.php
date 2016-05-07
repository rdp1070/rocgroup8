$errors = '';
$myemail = 'rdp1070@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  || 
   empty($_POST['email'])
)
{
    $errors .= "\n Error: all fields are required";
}
 
$name = $_POST['name']; 
$email_address = $_POST['email']; 

 
if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}