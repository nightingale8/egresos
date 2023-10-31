<?php
include_once 'conexion.php';
$objeto = new conn();
$conexion = $objeto->connect();
// Recepción de los datos enviados mediante POST desde el JS   
//DATOS PARA TABLA DETALLE
$folio = (isset($_POST['folio'])) ? $_POST['folio'] : '';
$id_reg = (isset($_POST['id_reg'])) ? $_POST['id_reg'] : '';
$idconcepto = (isset($_POST['idconcepto'])) ? $_POST['idconcepto'] : '';
$nomconcepto = (isset($_POST['nomconcepto'])) ? $_POST['nomconcepto'] : '';
$unidad = (isset($_POST['unidadm'])) ? $_POST['unidadm'] : '';
$cantidad = (isset($_POST['cantidadconcepto'])) ? $_POST['cantidadconcepto'] : '';
$costo = (isset($_POST['costou'])) ? $_POST['costou'] : '';
$desc = (isset($_POST['desc'])) ? $_POST['desc'] : '';
$importe = (isset($_POST['importe'])) ? $_POST['importe'] : '';
$subtotal = (isset($_POST['subtotal'])) ? $_POST['subtotal'] : '';


$opcion = 1;

$data = 0;
switch ($opcion) {
    case 1: //alta detalle tmp
        
        $consulta = "INSERT INTO detalletmp (foliotmp,id_item,descripcion,tipo,cantidad,precio,importe,descuento,gimporte) VALUES ('$folio','$idconcepto','$nomconcepto','$unidad','$cantidad','$costo','$importe','$desc','$subtotal')";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
            $data = 1;
        
        
        

        break;
    $opcion = 2;
    $data=0;    
    case 2: //borrar detalle
        $consulta = "UPDATE detalletmp set estado_reg = 0  WHERE id_reg='$id_reg' and foliotmp='$folio'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
            $data = 1;    
        break;        
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
