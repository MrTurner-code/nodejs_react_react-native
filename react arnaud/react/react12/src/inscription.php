<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>inscripttion</title>
</head>

<body>
    <?php
    if (isset($_POST['email']) and isset($_POST['objet'])) {
        $email = $_POST['email'];
        $objet = $_POST['objet'];
    }
    ?>
    <p>Merci <?php echo $email ?>, votre requète à bien été envoyer avec l'opjet <?php echo $objet ?> et le texte <?php $_POST['requete'] ?></p>
</body>

</html>