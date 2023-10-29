<?php
include_once 'conexion.php';
$objeto = new conn();
$conexion = $objeto->connect();
// Recepción de los datos enviados mediante POST desde el JS   
//DATOS PARA TABLA DETALLE
$folio = (isset($_POST['folio'])) ? $_POST['folio'] : '';
$idconcepto = (isset($_POST['idconcepto'])) ? $_POST['idconcepto'] : '';
$concepto = (isset($_POST['nomconcepto'])) ? $_POST['nomconcepto'] : '';
$unidad = (isset($_POST['unidadm'])) ? $_POST['unidadm'] : '';
$cantidad = (isset($_POST['cantidadconcepto'])) ? $_POST['cantidadconcepto'] : '';
$precio = (isset($_POST['costou'])) ? $_POST['costou'] : '';
$desc = (isset($_POST['desc'])) ? $_POST['desc'] : '';
$importe = (isset($_POST['importe'])) ? $_POST['importe'] : '';
$gimporte = (isset($_POST['subtotal'])) ? $_POST['subtotal'] : '';

$usuario = (isset($_POST['nameuser'])) ? $_POST['nameuser'] : '';
$tokenid = (isset($_POST['tokenid'])) ? $_POST['tokenid'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';

$res = 0;

switch ($opcion) {
    case 1: //alta detalle tmp
        
        $consulta = "INSERT INTO detalletmp ('foliotmp,id_item,descripcion,tipo,cantidad,precio,importe,descuento,gimporte')
        VALUES ('$folio','$idconcepto','$concepto','$unidad','$cantidad','$precio','$desc','$importe','$gimporte')";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
         
        $consulta = "SELECT * FROM detalletmp ORDER BY id_reg DESC LIMIT 1";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $data=$resultado->fetchAll(PDO::FETCH_ASSOC);

        break;
    case 2: //borrar detalle
            
        break;        
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
