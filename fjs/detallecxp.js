$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()

    var id, opcion, tipooperacion, id_reg

    var fila;
    var operacion = $('#opcion').val()

    var textopermiso = permisos()

    function permisos() {
        if (operacion == 1) {
            columnas =
                "<div class='text-center'><button class='btn btn-sm btn-danger btnBorrar'><i class='fas fa-trash-alt'></i></button></div>"
        } else {
            columnas = ''
        }
        return columnas
    }

    tablaC = $('#tabla2').DataTable({
        columnDefs: [
            {
                targets: -1,
                data: null,
                defaultContent:
                    "<div class='text-center'><div class='btn-group'><button class='btn btn-sm btn-success btnSelprov'><i class='fas fa-hand-pointer'></i></button></div></div>",
            },
        ],

        //Para cambiar el lenguaje a español
        language: {
            lengthMenu: 'Mostrar _MENU_ registros',
            zeroRecords: 'No se encontraron resultados',
            info:
                'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
            infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
            infoFiltered: '(filtrado de un total de _MAX_ registros)',
            sSearch: 'Buscar:',
            oPaginate: {
                sFirst: 'Primero',
                sLast: 'Último',
                sNext: 'Siguiente',
                sPrevious: 'Anterior',
            },
            sProcessing: 'Procesando...',
        },
    })

    tablaCon = $('#tablaCon').DataTable({
        columnDefs: [
            {
                targets: -1,
                data: null,
                defaultContent:
                    "<div class='text-center'><div class='btn-group'><button class='btn btn-sm btn-success btnSelConcepto'><i class='fas fa-hand-pointer'></i></button></div></div>",
            },
        ],

        //Para cambiar el lenguaje a español
        language: {
            lengthMenu: 'Mostrar _MENU_ registros',
            zeroRecords: 'No se encontraron resultados',
            info:
                'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
            infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
            infoFiltered: '(filtrado de un total de _MAX_ registros)',
            sSearch: 'Buscar:',
            oPaginate: {
                sFirst: 'Primero',
                sLast: 'Último',
                sNext: 'Siguiente',
                sPrevious: 'Anterior',
            },
            sProcessing: 'Procesando...',
        },
    })

    //TABLA DETALLE DE desechables
    tablaDetIndes = $('#tablaDetIndes').DataTable({
        "paging": false,
        "ordering": false,
        "info": false,
        "searching": false,

        "columnDefs": [
            {
                "targets": -1,
                "data": null,
                "defaultContent": textopermiso,
            },
            { className: "hide_column", targets: [0] },
            { className: "hide_column", targets: [1] },
            { className: "hide_column", targets: [7] },
            { className: "hide_column", targets: [8] },

        ],

        "language": {
            "lengthMenu": 'Mostrar _MENU_ registros',
            "zeroRecords": 'No se encontraron resultados',
            "info":
                'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
            "infoEmpty": 'Mostrando registros del 0 al 0 de un total de 0 registros',
            "infoFiltered": '(filtrado de un total de _MAX_ registros)',
            "sSearch": 'Buscar:',
            "oPaginate": {
                "sFirst": 'Primero',
                "sLast": 'Último',
                "sNext": 'Siguiente',
                "sPrevious": 'Anterior',
            },
            "sProcessing": 'Procesando...',
        },

        rowCallback: function (row, data) {


            val1 = numeral(data[6]).format('0,0.00')

            $($(row).find('td')[6]).addClass('text-right')
            $($(row).find('td')[6]).text(val1)

            val2 = numeral(data[7]).format('0,0.00')

            $($(row).find('td')[7]).addClass('text-right')
            $($(row).find('td')[7]).text(val2)

            val3 = numeral(data[9]).format('0,0.00')

            $($(row).find('td')[9]).addClass('text-right')
            $($(row).find('td')[9]).text(val3)
        },
    })

    //TABLA DESECHABLE
    tablaDes = $('#tablaDes').DataTable({
        columnDefs: [
            {
                targets: -1,
                data: null,
                defaultContent:
                    "<div class='text-center'><div class='btn-group'><button class='btn btn-sm btn-success btnSelDesechable'><i class='fas fa-hand-pointer'></i></button></div></div>",
            },
        ],

        //Para cambiar el lenguaje a español
        language: {
            lengthMenu: 'Mostrar _MENU_ registros',
            zeroRecords: 'No se encontraron resultados',
            info:
                'Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros',
            infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
            infoFiltered: '(filtrado de un total de _MAX_ registros)',
            sSearch: 'Buscar:',
            oPaginate: {
                sFirst: 'Primero',
                sLast: 'Último',
                sNext: 'Siguiente',
                sPrevious: 'Anterior',
            },
            sProcessing: 'Procesando...',
        },
    })

    $(document).on('click', '#bproveedor', function () {
        $('.modal-header').css('background-color', '#007bff')
        $('.modal-header').css('color', 'white')
        $('#modalProveedor').modal('show')
    })

    $(document).on('click', '#bproveedorplus', function () {
        window.location.href = 'cntaproveedor.php'
    })

    $(document).on('click', '#bproyectoplus', function () {
        window.location.href = 'cntaproyecto.php'
    })

    /*    $(document).on('click', '#bproyecto', function () {
            $('.modal-header').css('background-color', '#007bff')
            $('.modal-header').css('color', 'white')
    
            $('#modalProyecto').modal('show')
    
            $('#claveconcepto').val('')
            $('#concepto').val('')
            $('#id_umedida').val('')
            $('#usomat').val('')
            $('#nom_umedida').val('')
            $('#bmaterial').prop('disabled', true)
            $('#clavemat').val('')
            $('#material').val('')
            $('#clave').val('')
            $('#idprecio').val('')
            $('#unidad').val('')
    
            $('#precio').val('')
            $('#cantidad').val('')
            $('#cantidad').prop('disabled', true)
        }) */

    $(document).on('click', '.btnSelprov', function () {
        fila = $(this).closest('tr')

        idprov = fila.find('td:eq(0)').text()
        nomprov = fila.find('td:eq(2)').text()

        opcion = 1

        $('#id_prov').val(idprov)
        $('#nombre').val(nomprov)
        $('#modalProveedor').modal('hide')
    })

    $(document).on('click', '#btnGuardar', function () {
        folio = $('#folio').val()
        fecha = $('#fecha').val()

        id_prov = $('#id_prov').val()
        proveedor = $('#nombre').val()
        concepto = $('#concepto').val()

        total = $('#total').val().replace(/,/g, '')
        tokenid = $('#tokenid').val()
        opcion = $('#opcion').val()

        if (
            total.length != 0 &&
            concepto.length != 0 &&
            id_prov.length != 0 &&
            id_proy.length != 0
        ) {
            $.ajax({
                type: 'POST',
                url: 'bd/crudorden.php',
                dataType: 'json',
                data: {
                    fecha: fecha,
                    folio: folio,
                    id_prov: id_prov,
                    proveedor: proveedor,
                    id_proy: id_proy,
                    proyecto: proyecto,
                    concepto: concepto,
                    total: total,
                    tokenid: tokenid,
                    opcion: opcion,
                },
                success: function (res) {
                    if (res == 0) {
                        Swal.fire({
                            title: 'Error al Guardar',
                            text: 'No se puedo guardar los datos del cliente',
                            icon: 'error',
                        })
                    } else {
                        Swal.fire({
                            title: 'Operación Exitosa',
                            text: 'Presupuesto Guardado',
                            icon: 'success',
                        })

                        window.setTimeout(function () {
                            window.location.href = 'cntaordencompra.php'
                        }, 1500)
                    }
                },
            })
        } else {
            Swal.fire({
                title: 'Datos Faltantes',
                text: 'Debe ingresar todos los datos del Item',
                icon: 'warning',
            })
            return false
        }
    })

    /* $(document).on('click', '.btnSelConcepto', function () {
         fila = $(this).closest('tr')
         id_item = fila.find('td:eq(0)').text()
         concepto = fila.find('td:eq(1)').text()
         unidad = fila.find('td:eq(2)').text()
         precio = fila.find('td:eq(3)').text()
 
         $('#idconcepto').val(id_item)
         $('#nomconcepto').val(concepto)
         $('#costou').val(precio)
         $('#unidadm').val(unidad)
 
 
         $('#unidadm').prop('disabled', true)
         $('#costou').prop('disabled', true)
         $('#importe').prop('disabled', true)
         $('#gimporte').prop('disabled', true)
         $('#cantidad').prop('disabled', false)
         $('#desc').prop('disabled', false)
 
 
 
         $('#modalDes').modal('hide')
         obtImport();
     }) */

    //BOTON BUSCAR DESECHABLE
    $(document).on('click', '#btnInsumodes', function () {
        $('#modalDes').modal('show')
        id = null;


    })

    // SELECCIONAR  DESECHABLE
    $(document).on('click', '.btnSelDesechable', function () {
        fila = $(this).closest('tr')
        idconcepto = fila.find('td:eq(0)').text()
        concepto = fila.find('td:eq(1)').text()
        unidad = fila.find('td:eq(2)').text()
        precio = fila.find('td:eq(3)').text()

        /*
         */
        $('#idconcepto').val(idconcepto)
        $('#nomconcepto').val(concepto)
        $('#unidadm').val(unidad)
        $('#costou').val(precio)




        $('#cantidadconcepto').prop('disabled', false)

        $('#modalDes').modal('hide')

    })


    /*$(document).on('input', '#costou,#cantidad,#importe,#desc', function () {
         precio = parseFloat($('#costou').val())
         cantidad = parseInt($('#cantidadconcepto').val())
         desc = parseInt($('#desc').val())
         importe = precio * cantidad;
        $('#importe').val(importe.toFixed(2));
    
         gimporte = importe - (importe * (desc / 100));
        $('#subtotal').val(gimporte.toFixed(2));
    })*/

    //la función se ejecutará cada vez que se suelte una tecla en alguno de estos campos de entrada
    $(document).ready(function () {
        $('#cantidadconcepto,#desc').on('keyup', function () {
            calcularImporteYSubtotal();
        });
    });
    //la función se ejecutará cada vez que el valor del campo costou cambie
    // ya sea por una selección de item o cualquier otra actualización programática del valor
    $(document).ready(function () {
        $('#costou').on('change', function () {
            calcularImporteYSubtotal();
        });
    });
    //realiza los calculos de los valores obtenidos de los campos de texto
    //y el resultado los coloca en el campo de texto correspondiente
    function calcularImporteYSubtotal() {

        var precio = parseFloat($('#costou').val()) || 0
        var cantidad = parseInt($('#cantidadconcepto').val()) || 0
        var desc = parseInt($('#desc').val()) || 0
        var importe = precio * cantidad;
        $('#importe').val(importe);

        var gimporte = importe - (importe * (desc / 100));
        $('#subtotal').val(gimporte);

    }

    //BOTON LIMPIAR DESECHABLE
    $(document).on('click', '#btlimpiarides', function () {
        limpiardes()
    })

    //AGREGAR DESECHABLE DENTRO DEL CRUD REALIZAR UPDATE EN DETALLE TMP
    $("#btnagregarides").click(function () {
        id_reg = $('#id_reg').val()
        folio = $.trim($("#folio").val());
        idconcepto = $.trim($("#idconcepto").val());
        nomconcepto = $.trim($("#nomconcepto").val());
        unidad = $("#unidadm").val();
        cantidad = $.trim($("#cantidadconcepto").val());
        costo = $.trim($("#costou").val());//reemplaza todas las comas obtendra el valor sin comas
        importe = $.trim($("#importe").val().replace(/,/g, ''));
        desc = $.trim($("#desc").val());
        subtotal = $.trim($("#subtotal").val().replace(/,/g, ''));

        opcion = 1;//alta detalle item



        if (
            folio.length == 0 &&
            idconcepto.length == 0 &&
            cantidad.length == 0 &&
            costo.length == 0

        ) {
            Swal.fire({
                title: 'Datos Faltantes',
                text: "Debe ingresar todos los datos del Item",
                icon: 'warning',
            })
            return false;
        } else {
            $.ajax({
                url: 'bd/detalleorden.php',
                type: 'POST',
                dataType: 'json',
                //async: false,
                data: {
                    id_reg: id_reg,
                    folio: folio,
                    idconcepto: idconcepto,
                    nomconcepto: nomconcepto,

                    unidad: unidad,
                    cantidad: cantidad,
                    costo: costo,
                    opcion: opcion,
                    importe: importe,
                    desc: desc,
                    subtotal: subtotal,


                },
                success: function (data) {


                    console.log(data);// Muestra la respuesta del servidor en la consola
                    //ya muestra el valor de data = 1
                    id_reg = data[0].id_reg
                    folio = data[0].folio
                    idconcepto = data[0].idconcepto
                    nomconcepto = data[0].nomconcepto
                    unidad = data[0].unidad
                    cantidad = data[0].cantidad
                    costo = data[0].costo
                    importe = data[0].importe
                    desc = data[0].desc
                    subtotal = data[0].subtotal

                    if (data == 1) { //si data = 1 agregara la fila
                        tablaDetIndes.row
                            .add([folio, idconcepto, nomconcepto, unidad, cantidad, costo, importe, desc, subtotal])
                            .draw()
                            calcularTotalGimporte()
                        //muestra la suma de los subtotales de ides?
                        //formate el total  con separadores de miles y dos decimales
                        tipo = 4
                        $.ajax({
                            url: 'bd/sumadetalle.php',
                            type: 'POST',
                            dataType: 'json',
                            async: false,
                            data: { foliotmp: foliotmp },
                            success: function (data) {
                                total = data

                                var myNumeral = numeral(total)
                                var valor = myNumeral.format('0,0.00')

                                $('#total').val(valor)
                            },
                        })
                        tablaDetIndes.row
                            .add([folio, idconcepto, nomconcepto, unidad, cantidad, costo, importe, desc, subtotal])
                            .draw()
                            calcularTotalGimporte()
                        limpiardes()
                        calcularTotalGimporte()

                    } else {
                        Swal.fire({// data arroja que es igual a 0
                            title: 'Hubo algun fallo',
                            icon: 'error',
                        })
                    }



                }

            })
        }
    })
    

    function calcularTotalGimporte() {
        var totalGimporte = 0;

        // Iterar sobre todas las filas de la tabla
        $('#tablaDetIndes tbody tr').change(function () {

            // Obtener el valor de gimporte en esta fila
            var gimporte = parseFloat($(this).find('td:eq(9)').text().replace(/,/g, ''));

            // Sumar al total
            totalGimporte += gimporte;
        });

        // Actualizar el valor en el campo total
        var myNumeral = numeral(totalGimporte);
        var valorFormateado = myNumeral.format('0,0.00');
        $('#total').val(valorFormateado);
    }


    function limpiar() {
        var today = new Date()
        var dd = today.getDate()

        var mm = today.getMonth() + 1
        var yyyy = today.getFullYear()
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd

        $('#id_prov').val('')
        $('#nombre').val('')
        $('#fecha').val(today)
        $('#folio').val('')
        $('#folior').val('')
        $('#id_partida').val('')
        $('#partida').val('')
        $('#ccredito').val(false)
        $('#fechal').val(today)
        $('#cfactura').val(false)
        $('#referencia').val('')
        $('#proyecto').val('')
        $('#subtotal').val('')
        $('#iva').val('')
        $('#total').val('')
        $('#cinverso').val(false)
    }

    function limpiardes() {
        $('#idconcepto').val('')
        $('#nomconcepto').val('')
        $('#unidadm').val('')
        $('#costou').val('')
        $('#cantidadconcepto').val('')
        $('#importe').val('')
        $('#desc').val('')
        $('#subtotal').val('')
    }

    function round(value, decimals) {
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
    }

    // BORRAR MATERIAL
    
    $(document).on('click', '.btnBorrar', function (e) {
        e.preventDefault()
        fila = $(this)
        folio = $('#folio').val()
        id_reg = parseInt($(this).closest('tr').find('td:eq(0)').text())
        usuario = $('#nameuser').val()
        $("#id_reg").val(id_reg);
        opcion = 2

        $.ajax({
            type: 'POST',
            url: 'bd/detalleorden.php',
            dataType: 'json',
            data: { id_reg: id_reg, opcion: opcion, folio: folio },
            success: function (data) {
                console.log(data)
                if (data == 1) {
                    tablaDetIndes.row(fila.parents('tr')).remove().draw()
                    calcularRestaGimporte()
                    tipo = 4
                    $.ajax({
                        url: 'bd/sumadetalle.php',
                        type: 'POST',
                        dataType: 'json',
                        async: false,
                        data: { folio: folio, tipo: tipo },
                        success: function (data) {
                            total = data

                            var myNumeral = numeral(total)
                            var valor = myNumeral.format('0,0.00')

                            $('#total').val(valor)

                        },
                    })
                } else {
                    mensajeerror()
                }
            },
        })
    })

    function mensajeerror() {
        swal.fire({
            title: 'Operacion No exitosa',
            icon: 'error',
            focusConfirm: true,
            confirmButtonText: 'Aceptar',
        })
    }
})

function filterFloat(evt, input) {
    // Backspace = 8, Enter = 13, ‘0′ = 48, ‘9′ = 57, ‘.’ = 46, ‘-’ = 43
    var key = window.Event ? evt.which : evt.keyCode
    var chark = String.fromCharCode(key)
    var tempValue = input.value + chark
    var isNumber = key >= 48 && key <= 57
    var isSpecial = key == 8 || key == 13 || key == 0 || key == 46
    if (isNumber || isSpecial) {
        return filter(tempValue)
    }

    return false
}
function filter(__val__) {
    var preg = /^([0-9]+\.?[0-9]{0,2})$/
    return preg.te
    st(__val__) === true
}

function addCommas(nStr) {
    nStr += ''
    x = nStr.split('.')
    x1 = x[0]
    x2 = x.length > 1 ? '.' + x[1] : ''
    var rgx = /(\d+)(\d{3})/
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2')
    }
    return x1 + x2
}
