$(document).ready(function () {
    var id_prov, opcion;
    
    //opcion = 4;

    tablaProv = $("#tablaProveedor").DataTable({



        "columnDefs": [{
            "targets": -1,
            "data": null,
            "defaultContent": "<div class='text-center'><div class='btn-group'><button class='btn btn-sm btn-primary  btnEditar'><i class='fas fa-edit'></i></button><button class='btn btn-sm btn-danger btnBorrar'><i class='fas fa-trash-alt'></i></button></div></div>"
        },




        ],

        //Para cambiar el lenguaje a español
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
            "sSearch": "Buscar:",
            "oPaginate": {
                "sFirst": "Primero",
                "sLast": "Último",
                "sNext": "Siguiente",
                "sPrevious": "Anterior"
            },
            "sProcessing": "Procesando...",
        }
    });

    $("#btnNuevo").click(function () {
         fecha = $('<?php echo $fecha; ?>').val();
         usuario = $('<?php echo $s_nombre; ?>').val();
         tokenid = $('<?php echo $usuario; ?>').val();
         opcion = 1;

        if (
            fecha.length == 0 &&
            tokenid.length == 0 &&
            usuario.length == 0
        ) {
            $.ajax({
                type: 'POST',
                url: 'bd/crudorden.php',
                dataType: 'json',
                data: {
                    fecha: fecha,
                    tokeind: tokenid,
                    usuario: usuario,

                    opcion: opcion
                },

                success: function (res) {
                    if (res == 0) {
                        Swal.fire({
                            title: 'Error al Apartar Folio',
                            text: 'No se puedo apartar el folio',
                            icon: 'error',
                        })
                    } else {
                        Swal.fire({
                            title: 'Folio Apartado',
                            text: 'Capture los items',
                            icon: 'success',
                        })

                        window.setTimeout(function () {
                            window.location.href = 'detallecxp.php'
                        }, 1500)
                    }
                },
            })
        } else {
            Swal.fire({
                title: 'Datos Faltantes',
                text: 'Debe ingresar todos los datos',
                icon: 'warning',
            })
            return false
        }

    })


    var fila; //capturar la fila para editar o borrar el registro

    //botón EDITAR    
    $(document).on("click", ".btnEditar", function () {


    });

    //botón BORRAR
    $(document).on("click", ".btnBorrar", function () {

    });


});