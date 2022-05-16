<?php
if (isset($_POST['enter'])) {
    $name = $_POST['name'];
    $user = $_POST['user'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    echo $name;
    echo $user;
    echo $email;
    echo $password;
//     if ($con) {
//         $sql = "INSERT INTO usuarios (nome, usuario, email, senha)
//             values ('$name', '$user', '$email', '$password')";
//         $query = mysqli_query($con, $sql) or die (mysqli_error($con));
//     if (!$query) {
//         echo '<p>Ops! não foi possivel efetuar o cadastro.</p>';
//         header("refresh:3; url=cadastro.php");
//     } else {
//         echo'<p class="txt">Cadastro efetuado com sucesso!!!</p>';
//     }
//   }
}                
?>