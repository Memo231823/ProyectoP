<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 1 | Php an Javascript</title>
</head>
<body>
    <!-- php siempre va de lado del servidor backend -->
    <?php 
        $numero = 5;
        echo "Hola Bienvenidos esto se imprimio con lenguaje PHP el valor de numero es:".$numero."<br>";
    ?>
    <!-- javascript siempre corre del lado del navegador front end -->
    <script>
        var numero = 5;
        document.write("Hola Esto se imprimio con JavaScript el valor de numero es:"+ numero);
    </script>


</body>
</html>