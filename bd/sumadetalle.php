<?php
include_once 'conexion.php';
$objeto = new conn();
$conexion = $objeto->connect();

// Recepción de los datos enviados mediante POST desde el JS   

$foliotmp =  (isset($_POST['folio'])) ? $_POST['folio'] : '';




        $consulta = "SELECT importe from detalletmp where foliotmp='$foliotmp'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);

        $granImporte=$resultado['gimporte'];
   
       
print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
