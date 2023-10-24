<?php
include_once 'conexion.php';
$objeto = new conn();
$conexion = $objeto->connect();
// Recepción de los datos enviados mediante POST desde el JS   
//DATOS PARA TABLA DETALLE
$folio = (isset($_POST['folio'])) ? $_POST['folio'] : '';
$idcon = (isset($_POST['idconcepto'])) ? $_POST['idconcepto'] : '';
$cantidad = (isset($_POST['cantidadconcepto'])) ? $_POST['cantidadconcepto'] : '';
$concepto = (isset($_POST['nomconcepto'])) ? $_POST['nomconcepto'] : '';
$unidad = (isset($_POST['unidadm'])) ? $_POST['unidadm'] : '';
$costo = (isset($_POST['costou'])) ? $_POST['costou'] : '';
$clave = (isset($_POST['claveconcepto'])) ? $_POST['claveconcepto'] : '';
$subtotal = (isset($_POST['importe'])) ? $_POST['importe'] : '';
$usuario = (isset($_POST['nameuser'])) ? $_POST['nameuser'] : '';
$tokenid = (isset($_POST['tokenid'])) ? $_POST['tokenid'] : '';

$opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
$res = 0;

switch ($opcion) {
    case 1: //alta detalle tmp
        $consulta = "UPDATE cxp_detalle set fecha='$fecha',id_prov='$id_prov',nom_prov='$proveedor',id_proyecto='$id_proy',nom_proy='$proyecto',concepto='$concepto',
        total='$total',activo='1' WHERE folio_ord='$folio'";
        $resultado = $conexion->prepare($consulta);
        $resultado->execute();
        $res = 1;
        break;
    case 2: //modificación
        
         
    case 3://baja
                             
        break;        
}

print json_encode($data, JSON_UNESCAPED_UNICODE); //enviar el array final en formato json a JS
$conexion = NULL;
